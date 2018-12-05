import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinknineComponent } from './linknine.component';

describe('LinknineComponent', () => {
  let component: LinknineComponent;
  let fixture: ComponentFixture<LinknineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinknineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinknineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
