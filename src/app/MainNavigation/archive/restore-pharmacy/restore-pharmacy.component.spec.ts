import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePharmacyComponent } from './restore-pharmacy.component';

describe('RestorePharmacyComponent', () => {
  let component: RestorePharmacyComponent;
  let fixture: ComponentFixture<RestorePharmacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestorePharmacyComponent]
    });
    fixture = TestBed.createComponent(RestorePharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
