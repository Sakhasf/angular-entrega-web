import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCreateComponent } from './web-create.component';

describe('WebCreateComponent', () => {
  let component: WebCreateComponent;
  let fixture: ComponentFixture<WebCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
