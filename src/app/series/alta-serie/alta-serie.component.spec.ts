import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaSerieComponent } from './alta-serie.component';

describe('AltaSerieComponent', () => {
  let component: AltaSerieComponent;
  let fixture: ComponentFixture<AltaSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
