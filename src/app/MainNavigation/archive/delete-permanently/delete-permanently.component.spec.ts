import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePermanentlyComponent } from './delete-permanently.component';

describe('DeletePermanentlyComponent', () => {
  let component: DeletePermanentlyComponent;
  let fixture: ComponentFixture<DeletePermanentlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePermanentlyComponent]
    });
    fixture = TestBed.createComponent(DeletePermanentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
