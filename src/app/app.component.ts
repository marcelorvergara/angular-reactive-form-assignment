
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup
  subscriptionOptions = ['Basic', 'Advanced', 'Pro']
  finalProjectData = {
    projectName: '',
    projectEmail: '',
    projectSubscriptionOpts: '',
    projectPassword: ''
  }

  ngOnInit(): void {
      this.projectForm = new FormGroup({
        'projectData': new FormGroup({
          'projectName': new FormControl(null,
            [ CustomValidators.asyncInvalidProjectName,
            ]),
          'projectEmail': new FormControl(null, [Validators.required, Validators.email]),
          'projectSubscriptionOpts': new FormControl(['Advanced']),
          'projectPassword': new FormControl('teste123', Validators.required)
        })
      })
  }

  onSubmit() {
    this.finalProjectData = this.projectForm.value.projectData
    console.log(this.projectForm)
  }
}
