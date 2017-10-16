import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @Input() cor = 'gray';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('focus')
  aoGanharFoco() {
    this.extracted(this.cor);
  }

  private extracted(value) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', value);
    this.corDeFundo = value;
  }

  @HostListener('blur')
  aoPerderFoco() {
    this.extracted('green');
  }

}
