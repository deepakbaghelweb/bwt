import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkfiveComponent } from './linkfive.component';

describe('LinkfiveComponent', () => {
  let component: LinkfiveComponent;
  let fixture: ComponentFixture<LinkfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
