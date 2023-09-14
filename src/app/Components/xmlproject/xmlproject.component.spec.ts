import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlprojectComponent } from './xmlproject.component';

describe('XmlprojectComponent', () => {
  let component: XmlprojectComponent;
  let fixture: ComponentFixture<XmlprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XmlprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
