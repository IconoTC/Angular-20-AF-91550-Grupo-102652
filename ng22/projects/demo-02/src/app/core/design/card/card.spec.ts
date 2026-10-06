import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from './card';
import { Component } from '@angular/core';

@Component
({
  imports: [Card],
  selector: 'test-component',
  template: `<ind-card>Test Card Content</ind-card>`,
})
class TestComponent {}

describe('Card inside TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the card content', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ind-card')?.textContent).toContain('Test Card Content');
  });
});
