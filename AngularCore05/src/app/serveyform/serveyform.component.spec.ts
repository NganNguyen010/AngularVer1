import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyformComponent } from './serveyform.component';

describe('ServeyformComponent', () => {
  let component: ServeyformComponent;
  let fixture: ComponentFixture<ServeyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
