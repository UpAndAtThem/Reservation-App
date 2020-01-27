import { Directive, HostBinding, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appReservationHighlight]'
})
export class ReservationHighlightDirective implements OnInit{
  @HostBinding('style.background') background: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
  }

  @HostListener('mouseenter') mouseOver() {
    this.background = 'rgb(255, 255, 255)';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = '';
  }
}
