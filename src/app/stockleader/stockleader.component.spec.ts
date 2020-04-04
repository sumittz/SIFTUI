import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockleaderComponent } from './stockleader.component';

describe('StockleaderComponent', () => {
  let component: StockleaderComponent;
  let fixture: ComponentFixture<StockleaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockleaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
