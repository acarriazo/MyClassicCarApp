import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutFormComponent } from './put-form.component';

describe('PutFormComponent', () => {
  let component: PutFormComponent;
  let fixture: ComponentFixture<PutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
