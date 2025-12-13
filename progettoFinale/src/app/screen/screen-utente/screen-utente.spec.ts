import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenUtente } from './screen-utente';

describe('ScreenUtente', () => {
  let component: ScreenUtente;
  let fixture: ComponentFixture<ScreenUtente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenUtente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenUtente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
