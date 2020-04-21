/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RangListaComponent } from './rang-lista.component';

describe('RangListaComponent', () => {
  let component: RangListaComponent;
  let fixture: ComponentFixture<RangListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
