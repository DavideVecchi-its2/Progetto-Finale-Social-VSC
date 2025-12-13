import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Balto } from './balto';

describe('Balto', () => {
  let component: Balto;
  let fixture: ComponentFixture<Balto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Balto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Balto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
