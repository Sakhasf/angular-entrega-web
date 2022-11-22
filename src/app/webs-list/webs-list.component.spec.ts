import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebListComponent } from './webs-list.component';

describe('WebListComponent', () => {
  let component: WebListComponent;
  let fixture: ComponentFixture<WebListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
