import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @Input() cor = 'gray';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('focus')
  colorir() {
    this.extracted(this.cor);
  }


  @HostListener('blur')
  descolorir() {
    this.extracted('green');
  }

  private extracted(value) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', value);
    this.corDeFundo = value;
  }

}
