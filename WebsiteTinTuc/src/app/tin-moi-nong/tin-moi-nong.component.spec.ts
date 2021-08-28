import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinMoiNongComponent } from './tin-moi-nong.component';

describe('TinMoiNongComponent', () => {
  let component: TinMoiNongComponent;
  let fixture: ComponentFixture<TinMoiNongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinMoiNongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinMoiNongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
