import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Timestamp } from './timestamp';
import { TimeService } from '../../services/time.service';

const TimeServiceMock = {
  getTime: vi.fn(() => 7777777777777),
};

describe('Timestamp', () => {
  let component: Timestamp;
  let fixture: ComponentFixture<Timestamp>;
  let service: TimeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timestamp],
      providers: [
        {
          provide: TimeService,
          useValue: TimeServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Timestamp);
    component = fixture.componentInstance;
    service = TestBed.inject(TimeService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service.getTime()).toBe(7777777777777);
    expect(service.getTime).toHaveBeenCalled();
  });
});
