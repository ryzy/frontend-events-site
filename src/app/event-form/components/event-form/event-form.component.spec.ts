import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestingAuthAndDbModule } from '../../../../testing/app-testing-with-database.module';
import { countriesData } from '../../../event-base/data/countries';

import { EventFormModule } from '../../event-form.module';
import { EventFormComponent } from './event-form.component';

describe('EventFormComponent', () => {
  let component: EventFormComponent;
  let fixture: ComponentFixture<EventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EventFormModule, AppTestingAuthAndDbModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('#displayCountryFn', () => {
    expect(component.displayCountryFn()).toBeFalsy();
    expect(component.displayCountryFn(countriesData[0])).toBe(countriesData[0].name);
  });

  it('should handleCountryAndCity: set the country and the city', () => {
    fixture.detectChanges();
    component.eventForm.patchValue({ country: 'pl' });
    component.eventForm.patchValue({ country: countriesData[0] });

    expect(component.eventForm.getRawValue()).toEqual(
      jasmine.objectContaining({
        country: countriesData[0],
        city: countriesData[0].capital,
      }),
    );
  });
});
