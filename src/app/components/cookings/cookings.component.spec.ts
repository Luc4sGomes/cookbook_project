import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingsComponent } from './cookings.component';

describe('CookingsComponent', () => {
  let component: CookingsComponent;
  let fixture: ComponentFixture<CookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
