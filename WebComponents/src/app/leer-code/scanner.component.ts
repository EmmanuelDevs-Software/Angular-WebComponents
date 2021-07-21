import { Component } from '@angular/core';
import { QrScannerService } from '@argo/qr-web';
@Component({
  selector: 'argo-code-scanner',
  template: `
  <div class="card">
  <div class="card-body">
    <h1 class="card-title text-center mx-auto">QR & BARCODE</h1>
    <div class="grid caja1">
      <div class="row">
        <div class="col-6 text-center mx-auto">
          <button class="btn" (click)="scanQr()">ScanQRCode</button>
        </div>
        <div class="col-6 text-center mx-auto">
          <button class="btn" (click)="scanBar()">ScanBarCode</button>
        </div>
        <div class="col-12 text-center mx-auto mt-2">
          <h3>Este es el resultado de escanear el código: {{ data }}</h3>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./qr-bar-code.page.scss']
})
export class ScannerComponent {
  data: string;
  qrCodeData: string;
  barCodeData: string;
  barFormat: string;
  barFormatArray: string[] = ['CODE128', 'CODE128A', 'CODE128B', 'CODE128C', 'EAN13', 'EAN8', 'EAN5', 'EAN2', 'UPC',
  'CODE39', 'ITF14', 'ITF', 'MSI', 'MSI10', 'MSI11', 'MSI1010', 'MSI1110', 'pharmacode', 'codabar'];
  activeQrGenerate: boolean = false;
  activeBarGenerate: boolean = false;

  constructor(private qrScanService: QrScannerService) {}

  private barCodeFormats: string[] = ['DATA_MATRIX', 'UPC_E', 'UPC_A', 'EAN_8', 'EAN_13', 'CODE_128',
    'CODE_39', 'CODE_93', 'CODABAR', 'ITF', 'MAXICODE', 'RSS_14', 'RSS_EXPANDED', 'PDF_417', 'AZTEC'];

  public scanQr() {
    alert('boton presionado')
    this.scan('QR_CODE', 'QR');
  }

  public scanBar() {
    alert('boton presionado')
    this.scan(this.barCodeFormats, 'BAR');
  }

  private scan(format: string | string[], text) {
    this.qrScanService.scan(format)
      .then((res) => {
        this.data = res;
        console.log(`Esto es el resultado del código ${text}: ${this.data}`);
      })
      .catch((err) => console.error('Error al escanear: ', err));
  }


  public changeQrCode(){
    this.activeQrGenerate = false
  }

  public changeBarCode(){
    this.activeBarGenerate = false
  }

  public generateQr() {
    this.activeQrGenerate = true;
  }

  public generateBar() {
    this.activeBarGenerate = true;
  }

}
