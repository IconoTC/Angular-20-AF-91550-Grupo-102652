import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menu } from './menu';
import { By } from '@angular/platform-browser';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
    }).compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render the menu items", () => {
  const options = component["options"]();
  options.forEach((option, index) => {
    const itemElement: HTMLLIElement = fixture.debugElement.queryAll(By.css("li"))[
      index
    ].nativeElement;
    expect(itemElement.textContent).toContain(option.label);
  });
});
});
