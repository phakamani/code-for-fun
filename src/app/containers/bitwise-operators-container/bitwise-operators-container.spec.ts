import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BitwiseOperatorsContainer } from './bitwise-operators-container';

describe('BitwiseOperatorsContainer', () => {
  let component: BitwiseOperatorsContainer;
  let fixture: ComponentFixture<BitwiseOperatorsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitwiseOperatorsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(BitwiseOperatorsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
