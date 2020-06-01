import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsListComponent } from './tutorials-list.component';
import { TutorialService } from 'src/app/services/tutorial.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TutorialsListComponent', () => {
  let component: TutorialsListComponent;
  let fixture: ComponentFixture<TutorialsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialsListComponent],
      providers: [
        { provide: TutorialService, useClass: TutorialServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show a search field', () => {
    expect(fixture.nativeElement.querySelector('[data-test="search"]')).toBeTruthy();
  });

  it('should click a search', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const comp = fixture.componentInstance;
      spyOn(comp, 'searchName');
      const link = fixture.debugElement.query(By.css('[data-test="search"]')).nativeElement;
      link.click();
      expect(comp.searchName).toHaveBeenCalled();
    });
  });


  it('should show a list', () => {
    const link = fixture.debugElement.queryAll(By.css('[data-test="list-group"]'));
    expect(link).toBeTruthy();
  });


  it('should click a listing', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const comp = fixture.componentInstance;
      spyOn(comp, 'setActiveTutorial');
      const link = fixture.debugElement.query(By.css('[data-test="list-group"]')).nativeElement;
      link.click();
      expect(comp.setActiveTutorial).toHaveBeenCalled();
    });
  });



});

class TutorialServiceStub {
  getAll() {
    return of([]);
  }
}