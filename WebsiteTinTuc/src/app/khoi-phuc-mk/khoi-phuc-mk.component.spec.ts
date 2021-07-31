import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoiPhucMKComponent } from './khoi-phuc-mk.component';

describe('KhoiPhucMKComponent', () => {
  let component: KhoiPhucMKComponent;
  let fixture: ComponentFixture<KhoiPhucMKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhoiPhucMKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhoiPhucMKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
