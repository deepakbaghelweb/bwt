import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkfourComponent } from './linkfour.component';

describe('LinkfourComponent', () => {
  let component: LinkfourComponent;
  let fixture: ComponentFixture<LinkfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
