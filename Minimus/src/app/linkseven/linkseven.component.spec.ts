import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksevenComponent } from './linkseven.component';

describe('LinksevenComponent', () => {
  let component: LinksevenComponent;
  let fixture: ComponentFixture<LinksevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
