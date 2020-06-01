import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  name = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    this.tutorialService.getAll().subscribe(data => {
      this.tutorials = data;
      console.log(data);
    },
      error => {
        console.log('Server error: ', error);
      }
    );
  }

  refreshList() {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  searchName() {
    this.tutorialService.findByName(this.name).subscribe(
      data => {
        this.tutorials = data;
        console.log(data);
      },
      error => {
        console.log('Search: ', error);
      }
    )
  }

}
