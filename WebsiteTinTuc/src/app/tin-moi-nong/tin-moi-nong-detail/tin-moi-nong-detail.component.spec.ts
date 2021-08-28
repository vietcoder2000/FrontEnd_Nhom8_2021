import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinMoiNongDetailComponent } from './tin-moi-nong-detail.component';

describe('TinMoiNongDetailComponent', () => {
  let component: TinMoiNongDetailComponent;
  let fixture: ComponentFixture<TinMoiNongDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinMoiNongDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinMoiNongDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
