import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtraCarpetaComponent } from './otra-carpeta.component';

describe('OtraCarpetaComponent', () => {
  let component: OtraCarpetaComponent;
  let fixture: ComponentFixture<OtraCarpetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtraCarpetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtraCarpetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
