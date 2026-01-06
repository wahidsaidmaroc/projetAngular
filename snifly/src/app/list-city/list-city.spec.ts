import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCity } from './list-city';

describe('ListCity', () => {
  let component: ListCity;
  let fixture: ComponentFixture<ListCity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
