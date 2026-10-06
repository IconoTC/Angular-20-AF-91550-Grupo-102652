import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchRef } from './search-ref';

describe('SearchRef', () => {
  let component: SearchRef;
  let fixture: ComponentFixture<SearchRef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRef],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchRef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
