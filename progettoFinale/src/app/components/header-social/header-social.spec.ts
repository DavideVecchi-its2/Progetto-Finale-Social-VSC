import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSocial } from './header-social';

describe('HeaderSocial', () => {
  let component: HeaderSocial;
  let fixture: ComponentFixture<HeaderSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSocial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSocial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
