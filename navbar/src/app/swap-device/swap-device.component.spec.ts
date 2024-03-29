import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapDeviceComponent } from './swap-device.component';

describe('SwapDeviceComponent', () => {
  let component: SwapDeviceComponent;
  let fixture: ComponentFixture<SwapDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwapDeviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
