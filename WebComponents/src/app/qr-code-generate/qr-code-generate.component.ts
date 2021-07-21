import qrCode from 'qrcode';
import { Component, Input, Renderer2, ElementRef } from '@angular/core';

type ElementType = 'url' | 'img' | 'canvas';


@Component({
  selector: 'qr-code-generate',
  template: '',
  styleUrls: []
})
export class QrCodeGenerateComponent {

  @Input() elementType: ElementType = 'url'
  @Input() value = '';
  @Input() margin = 4;
  @Input() scale = 4;
  @Input() colorDark = '#000';
  @Input() colorLight = '#FFF';


  get options() {
    return {
      margin: this.margin,
      scale: this.scale,
      color: {
        dark: this.colorDark,
        light: this.colorLight
      }
    }
  }


  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnChanges() {
    this.createQRCode();
  }


  private async createQRCode() {
    if (!this.value) {
      return;
    }
    const div = this.renderer.createElement('div');

    let element: Element;

    switch (this.elementType) {
      case 'canvas':
        element = this.renderer.createElement('canvas');
        await qrCode.toCanvas(element, this.value, this.options);
        break;
      default:
        element = this.renderer.createElement('img');
        const src = await qrCode.toDataURL(this.value, this.options);
        element.setAttribute('src', src);
        break;
    }

    for (const node of this.elementRef.nativeElement.childNodes) {
      this.renderer.removeChild(this.elementRef.nativeElement, node);
    }

    this.renderer.appendChild(div, element);
    this.renderer.appendChild(this.elementRef.nativeElement, div);
  }
}
