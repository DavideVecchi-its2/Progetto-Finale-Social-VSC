import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suggeriti } from './suggeriti';

describe('Suggeriti', () => {
  let component: Suggeriti;
  let fixture: ComponentFixture<Suggeriti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suggeriti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Suggeriti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
