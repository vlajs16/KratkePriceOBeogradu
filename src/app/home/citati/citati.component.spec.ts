/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitatiComponent } from './citati.component';

describe('CitatiComponent', () => {
  let component: CitatiComponent;
  let fixture: ComponentFixture<CitatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
