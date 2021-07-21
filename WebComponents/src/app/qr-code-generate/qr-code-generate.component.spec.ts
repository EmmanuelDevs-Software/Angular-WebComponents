import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeGenerateComponent } from './qr-code-generate.component';

describe('QrCodeGenerateComponent', () => {
  let component: QrCodeGenerateComponent;
  let fixture: ComponentFixture<QrCodeGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrCodeGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
