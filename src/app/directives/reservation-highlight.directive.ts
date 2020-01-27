import { Directive, HostBinding, HostListener, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appReservationHighlight]'
})
export class ReservationHighlightDirective implements OnInit {

  @Input() defaultColor: string;
  @Input() highlightColor: string;
  @HostBinding('style.background') background: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
  }

  @HostListener('mouseenter') mouseOver() {
    this.background = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
  }
}
