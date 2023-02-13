import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditiontaskComponent } from './conditiontask.component';

describe('ConditiontaskComponent', () => {
  let component: ConditiontaskComponent;
  let fixture: ComponentFixture<ConditiontaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditiontaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditiontaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
