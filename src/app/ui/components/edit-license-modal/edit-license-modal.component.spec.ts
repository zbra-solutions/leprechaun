import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLicenseModalComponent } from './edit-license-modal.component';

describe('EditLicenseModalComponent', () => {
  let component: EditLicenseModalComponent;
  let fixture: ComponentFixture<EditLicenseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLicenseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLicenseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
