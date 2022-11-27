import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad7childComponent } from './zad7child.component';

describe('Zad7childComponent', () => {
  let component: Zad7childComponent;
  let fixture: ComponentFixture<Zad7childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad7childComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zad7childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
