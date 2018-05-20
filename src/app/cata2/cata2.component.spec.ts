import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cata2Component } from './cata2.component';

describe('Cata2Component', () => {
  let component: Cata2Component;
  let fixture: ComponentFixture<Cata2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cata2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
