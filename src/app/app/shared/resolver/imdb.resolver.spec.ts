import { TestBed } from '@angular/core/testing';

import { ImdbResolverResolver } from './imdb.resolver';

describe('ImdbResolverResolver', () => {
  let resolver: ImdbResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ImdbResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
