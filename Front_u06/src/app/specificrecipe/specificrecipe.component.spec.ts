import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificrecipeComponent } from './specificrecipe.component';

describe('SpecificrecipeComponent', () => {
  let component: SpecificrecipeComponent;
  let fixture: ComponentFixture<SpecificrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificrecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecificrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
