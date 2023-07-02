import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailContactComponent } from './list-detail-contact.component';

describe('ListDetailContactComponent', () => {
  let component: ListDetailContactComponent;
  let fixture: ComponentFixture<ListDetailContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDetailContactComponent]
    });
    fixture = TestBed.createComponent(ListDetailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});