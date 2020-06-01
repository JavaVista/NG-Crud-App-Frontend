import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    name: '',
    description: '',
    published: false,
  };

  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial() {
    const data = {
      name: this.tutorial.name,
      description: this.tutorial.description,
    };

    this.tutorialService.create(data).subscribe(
      respose => {
        console.log(respose);
        this.submitted = true;
      },
      error => {
        console.log('Server: ', error);
      }
    );
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      name: '',
      description: '',
      published: false,
    };
  }


}
