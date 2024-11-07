import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownHiddenComponent } from './shown-hidden.component';

describe('ShownHiddenComponent', () => {
  let component: ShownHiddenComponent;
  let fixture: ComponentFixture<ShownHiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShownHiddenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShownHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
