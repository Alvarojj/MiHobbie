import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiFavoritoComponent } from './mi-favorito.component';

describe('MiFavoritoComponent', () => {
  let component: MiFavoritoComponent;
  let fixture: ComponentFixture<MiFavoritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiFavoritoComponent]
    });
    fixture = TestBed.createComponent(MiFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
