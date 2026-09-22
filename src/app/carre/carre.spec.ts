import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carre } from './carre';

describe('Carre', () => {
  let component: Carre;
  let fixture: ComponentFixture<Carre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carre],
    }).compileComponents();

    fixture = TestBed.createComponent(Carre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
