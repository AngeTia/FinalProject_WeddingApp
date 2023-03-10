import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMairieComponent } from './info-mairie.component';

describe('InfoMairieComponent', () => {
  let component: InfoMairieComponent;
  let fixture: ComponentFixture<InfoMairieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMairieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
