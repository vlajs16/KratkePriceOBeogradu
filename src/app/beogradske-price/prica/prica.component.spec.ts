/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PricaComponent } from './prica.component';

describe('PricaComponent', () => {
  let component: PricaComponent;
  let fixture: ComponentFixture<PricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
