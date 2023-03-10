import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheMairieComponent } from './recherche-mairie.component';

describe('RechercheMairieComponent', () => {
  let component: RechercheMairieComponent;
  let fixture: ComponentFixture<RechercheMairieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheMairieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheMairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
