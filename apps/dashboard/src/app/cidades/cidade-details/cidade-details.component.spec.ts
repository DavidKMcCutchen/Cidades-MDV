import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeDetailsComponent } from './cidade-details.component';

describe('CidadeDetailsComponent', () => {
  let component: CidadeDetailsComponent;
  let fixture: ComponentFixture<CidadeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
