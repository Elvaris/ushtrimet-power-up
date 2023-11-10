import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetyratComponent } from './detyrat.component';

describe('DetyratComponent', () => {
  let component: DetyratComponent;
  let fixture: ComponentFixture<DetyratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetyratComponent]
    });
    fixture = TestBed.createComponent(DetyratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
