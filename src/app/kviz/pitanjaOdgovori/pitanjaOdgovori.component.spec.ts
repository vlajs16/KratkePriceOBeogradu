/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PitanjaOdgovoriComponent } from './pitanjaOdgovori.component';

describe('PitanjaOdgovoriComponent', () => {
  let component: PitanjaOdgovoriComponent;
  let fixture: ComponentFixture<PitanjaOdgovoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitanjaOdgovoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitanjaOdgovoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
