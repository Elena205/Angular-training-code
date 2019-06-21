import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from './account.service';
import { UsersService } from './users.service';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }
  // `],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  serverElements = [{type:'server',name:'testServer',content:'Just a test!'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  // loadedFeature = 'recipe';
  accounts: {name: string, status: string}[] = [];
  activeUsers = [];
  inactiveUsers = [];
  // subscriptions = [ 'Bsaic','Advanced','Pro' ];
  // selectedSubscription = 'Advanced';
  // @ViewChild('signUpForm', {static: false}) sgnForm: NgForm;
  projectForm: FormGroup;

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null, 
        [Validators.required, CustomValidators.invalidProjectName], 
        CustomValidators.asyncInvalidProjectName
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    });
  }

  onServerAdded(serverData:{serverName: string,serverContent: string}) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    })
  }

  onBlueprintAdded(blueprintData:{serverName: string,serverContent: string}) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    })
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestoryFirst() {
    this.serverElements.splice(0,1);
  }

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  // onSubmit(formData: Form) {
  //   // console.log(this.sgnForm.value);
  //   console.log(formData);
  // }

  onSaveProject() {
    console.log(this.projectForm.value);
  }
}
