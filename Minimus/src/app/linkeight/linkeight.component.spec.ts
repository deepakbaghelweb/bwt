import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkeightComponent } from './linkeight.component';

describe('LinkeightComponent', () => {
  let component: LinkeightComponent;
  let fixture: ComponentFixture<LinkeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
