import { mockEvent } from '../../../testing/fixtures/events';
import { Entity } from '../../core/model/entity';
import { countriesData } from '../../data/countries';
import {
  findCountries,
  findCountry,
  getEventSlug,
  getNormalisedDate,
  getRegionList,
  getUrlForDisplay,
  isPastDate,
  slug,
  trackByFn,
} from './event-utils';

describe('event-utils', () => {
  const poland = countriesData.find((c) => c.isoCode === 'pl');
  const uk = countriesData.find((c) => c.isoCode === 'gb');

  it('#trackByFn', () => {
    expect(trackByFn(123, mockEvent)).toEqual(mockEvent.id);
    expect(trackByFn(123, undefined as any)).toEqual(undefined);
  });

  it('#findCountry', () => {
    expect(findCountry()).toBe(undefined);
    expect(findCountry(uk)).toBe(uk);

    expect(findCountry('pl')).toBe(poland);
    expect(findCountry('poland')).toBe(poland);

    expect(findCountry('GB')).toBe(uk);
    expect(findCountry('United Kingdom')).toBe(uk);
  });

  it('#findCountries', () => {
    expect(findCountries().length).toBe(countriesData.length);
    expect(findCountries({} as any).length).toBe(countriesData.length);
    expect(findCountries('').length).toBe(countriesData.length);

    expect(findCountries('pl').length).toBe(3);
    expect(findCountries('pol').length).toBe(12); // looks in countries and cities, so it finds a few...

    expect(findCountries('z').length).toBe(24);
  });

  it('#getRegionList', () => {
    const regionsCount = 27;
    const res: Entity[] = getRegionList();
    expect(res.length).toBe(regionsCount);

    const r: Entity = res.pop();
    expect(r.id).toBeTruthy();
    expect(r.id.split(',').length).toBe(2); // expect url-friendly id part
  });

  it('#getNormalisedDate', () => {
    expect(getNormalisedDate() instanceof Date).toBe(true);

    // from Date obj
    const mockDate = new Date();
    expect(getNormalisedDate(mockDate)).toBe(mockDate);

    // from string
    expect(getNormalisedDate(mockDate.toISOString())).toEqual(mockDate);
  });

  it('#getUrlForDisplay', () => {
    expect(getUrlForDisplay('www.example.com')).toBe('example.com');
    expect(getUrlForDisplay('http://www.example.com')).toBe('example.com');
    expect(getUrlForDisplay('https://example.com/')).toBe('example.com');
    expect(getUrlForDisplay('https://example.com/page/')).toBe('example.com/page');
  });

  it('#slug', () => {
    expect(slug(undefined as string)).toEqual('');
    expect(slug('Some String')).toEqual('some-string');
  });

  it('#getEventSlug', () => {
    expect(getEventSlug('Some Event Title')).toContain('some-event-title-');
    expect(getEventSlug('')).toContain('-');
    expect(getEventSlug('').length).toBeGreaterThan(5); // we should have at least an -random-suffix here...
  });

  it('#isPastDate', () => {
    expect(isPastDate(new Date())).toBe(true);
    expect(isPastDate(new Date('2099'))).toBe(false);
    expect(isPastDate(new Date('2010'))).toBe(true);
  });
});
