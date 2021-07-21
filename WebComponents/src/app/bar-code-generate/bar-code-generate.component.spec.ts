import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCodeGenerateComponent } from './bar-code-generate.component';

describe('BarCodeGenerateComponent', () => {
  let component: BarCodeGenerateComponent;
  let fixture: ComponentFixture<BarCodeGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarCodeGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCodeGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
