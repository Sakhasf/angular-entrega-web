import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsListComponent } from './webs-list.component';

describe('WebsListComponent', () => {
  let component: WebsListComponent;
  let fixture: ComponentFixture<WebsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
