import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterItem } from './counter-item';
import { CounterState } from '../../types/counter-state';


const INITIAL_STATE: CounterState = {
  id: 1,
  count: 0,
  clicks: 0,
}; 

describe('CounterItem', () => {
  let component: CounterItem;
  let fixture: ComponentFixture<CounterItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('initialState', INITIAL_STATE);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
