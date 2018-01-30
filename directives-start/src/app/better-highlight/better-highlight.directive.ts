import { Directive, Renderer2, OnInit} from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseover') mouseover() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
