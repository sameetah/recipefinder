import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { RecipeSearchFormComponent } from './recipe-search-form.component';

describe('RecipeSearchFormComponent', () => {
  let component: RecipeSearchFormComponent;
  let fixture: ComponentFixture<RecipeSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [RecipeSearchFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchRecipes() when the search button is clicked', () => {
    spyOn(component, 'searchRecipes');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.searchRecipes).toHaveBeenCalled();
  });
});

