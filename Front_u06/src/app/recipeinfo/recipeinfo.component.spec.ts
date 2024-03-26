import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeinfoComponent } from './recipeinfo.component';

describe('RecipeinfoComponent', () => {
  let component: RecipeinfoComponent;
  let fixture: ComponentFixture<RecipeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
