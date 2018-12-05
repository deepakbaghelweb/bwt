import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktenComponent } from './linkten.component';

describe('LinktenComponent', () => {
  let component: LinktenComponent;
  let fixture: ComponentFixture<LinktenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinktenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinktenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
