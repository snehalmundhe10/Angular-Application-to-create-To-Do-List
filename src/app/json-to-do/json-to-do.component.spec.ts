import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToDoComponent } from './json-to-do.component';

describe('JsonToDoComponent', () => {
  let component: JsonToDoComponent;
  let fixture: ComponentFixture<JsonToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
