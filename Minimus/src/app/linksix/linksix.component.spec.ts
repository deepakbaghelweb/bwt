import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksixComponent } from './linksix.component';

describe('LinksixComponent', () => {
  let component: LinksixComponent;
  let fixture: ComponentFixture<LinksixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
