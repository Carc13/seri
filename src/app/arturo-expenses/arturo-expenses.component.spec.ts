import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArturoExpensesComponent } from './arturo-expenses.component';

describe('ArturoExpensesComponent', () => {
  let component: ArturoExpensesComponent;
  let fixture: ComponentFixture<ArturoExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArturoExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArturoExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
