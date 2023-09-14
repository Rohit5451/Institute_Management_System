import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavitasoftComponent } from './savitasoft.component';

describe('SavitasoftComponent', () => {
  let component: SavitasoftComponent;
  let fixture: ComponentFixture<SavitasoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavitasoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavitasoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
