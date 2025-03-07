import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSwitchComponent } from './color-switch.component';

describe('ColorSwitchComponent', () => {
  let component: ColorSwitchComponent;
  let fixture: ComponentFixture<ColorSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorSwitchComponent]
    });
    fixture = TestBed.createComponent(ColorSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
