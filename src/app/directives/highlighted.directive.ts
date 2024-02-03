import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() { 
    console.log('directive used');
  }


  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }


  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    // console.log($event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }


  toggle(){
    this.isHighlighted = !this.isHighlighted;
  }
}
