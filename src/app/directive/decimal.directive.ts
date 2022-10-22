import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDecimal]'
})
export class DecimalDirective implements AfterViewInit{

  @Input() decimalPoints: number = 2;

  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const digit = parseFloat(this.el.nativeElement.value);
    this.el.nativeElement.value = digit.toFixed(this.decimalPoints);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

}
