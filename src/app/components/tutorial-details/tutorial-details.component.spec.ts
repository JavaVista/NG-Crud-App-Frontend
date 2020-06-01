import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDetailsComponent } from './tutorial-details.component';

describe('TutorialDetailsComponent', () => {
  let component: TutorialDetailsComponent;
  let fixture: ComponentFixture<TutorialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show a heading Tutorial', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[data-test="heading"]').textContent).toContain('Tutorial');
  });
});
