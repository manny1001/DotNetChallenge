/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SwapiComponent } from './Swapi.component';

describe('SwapiComponent', () => {
  let component: SwapiComponent;
  let fixture: ComponentFixture<SwapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
