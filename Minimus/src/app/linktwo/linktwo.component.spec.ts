import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktwoComponent } from './linktwo.component';

describe('LinktwoComponent', () => {
  let component: LinktwoComponent;
  let fixture: ComponentFixture<LinktwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinktwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinktwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
