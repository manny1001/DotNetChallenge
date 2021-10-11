/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChuckComponent } from './Chuck.component';

describe('ChuckComponent', () => {
  let component: ChuckComponent;
  let fixture: ComponentFixture<ChuckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
