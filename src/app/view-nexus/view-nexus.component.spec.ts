import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNexusComponent } from './view-nexus.component';

describe('ViewNexusComponent', () => {
  let component: ViewNexusComponent;
  let fixture: ComponentFixture<ViewNexusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNexusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNexusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
