import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertaskComponent } from './entertask.component';

describe('EntertaskComponent', () => {
  let component: EntertaskComponent;
  let fixture: ComponentFixture<EntertaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
