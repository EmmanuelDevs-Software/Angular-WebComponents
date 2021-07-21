import { Component, OnChanges, Input, ElementRef, Renderer2 } from '@angular/core';

declare var require: any;

const jsbarcode = require('jsbarcode');

type BarCodeFormats = '' | 'CODE128' | 'CODE128A' | 'CODE128B' | 'CODE128C' | 'EAN13' | 'EAN8' | 'EAN5' | 'EAN2' | 'UPC' 
| 'CODE39' | 'ITF14' | 'ITF' | 'MSI' | 'MSI10' | 'MSI11' | 'MSI1010' | 'MSI1110' | 'pharmacode' | 'codabar'

type ElementType = 'svg' | 'img' | 'canvas';

@Component({
  selector: 'bar-code-generate',
  template: '',
  styleUrls: []
})

export class BarCodeGenerateComponent implements OnChanges {

  @Input() elementType: ElementType = 'svg';

  @Input() format: BarCodeFormats = 'EAN13';

  @Input() showText = false;
  @Input() value = '';

  // styles
  @Input() width = 2;
  @Input() height = 100;
  @Input() font = 'monospace';
  @Input() textAlign = 'center';
  @Input() textPosition = 'bottom';
  @Input() textMargin = 2;
  @Input() fontSize = 20;
  @Input() background = '#ffffff';
  @Input() margin = 10;
  @Input() marginTop = 10;
  @Input() marginBottom = 10;
  @Input() marginLeft = 10;
  @Input() marginRight = 10;

  get options() {
    return {
      format: this.format,
      width: this.width,
      height: this.height,
      displayValue: this.showText,
      font: this.font,
      textAlign: this.textAlign,
      textPosition: this.textPosition,
      textMargin: this.textMargin,
      fontSize: this.fontSize,
      background: this.background,
      margin: this.margin,
      marginTop: this.marginTop,
      marginBottom: this.marginBottom,
      marginLeft: this.marginLeft,
      marginRight: this.marginRight,
    };
  }


  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnChanges() {
    this.createBarcode();
  }

  createBarcode() {
    if (!this.value) { return; };

    const div = this.renderer.createElement('div');

    let element: Element;

    switch (this.elementType) {
      case 'img':
        element = this.renderer.createElement('img');
        break;
      case 'canvas':
        element = this.renderer.createElement('canvas');
        break;
      case 'svg':
      default:
        element = this.renderer.createElement('svg', 'svg');
    }

    jsbarcode(element, this.value, this.options);

    for (let node of this.elementRef.nativeElement.childNodes) {
      this.renderer.removeChild(this.elementRef.nativeElement, node);
    }

    this.renderer.appendChild(div, element);
    this.renderer.appendChild(this.elementRef.nativeElement, div);
  }


}
