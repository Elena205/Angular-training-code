import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyServerComponent } from './edit-my-server.component';

describe('EditMyServerComponent', () => {
  let component: EditMyServerComponent;
  let fixture: ComponentFixture<EditMyServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMyServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
