import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkthreeComponent } from './linkthree.component';

describe('LinkthreeComponent', () => {
  let component: LinkthreeComponent;
  let fixture: ComponentFixture<LinkthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
