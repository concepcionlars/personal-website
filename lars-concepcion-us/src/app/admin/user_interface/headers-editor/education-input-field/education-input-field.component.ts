import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { EducationInputFieldService } from './education-input-field.service'
import { EducationInformation } from 'src/app/customTSFIle/headersData/edu-info'
import { AlertBoxService } from 'src/app/popup_module/alert-box/alert-box.service';
import { AlertBoxComponent } from 'src/app/popup_module/alert-box/alert-box.component';

@Component({
  selector: 'app-education-input-field',
  templateUrl: './education-input-field.component.html',
  styleUrls: ['./education-input-field.component.css']
})
export class EducationInputFieldComponent implements OnInit {

  educationInformation: FormGroup;

  constructor(private educationInputService: EducationInputFieldService, private alertservice: AlertBoxService) {
    this.educationInformation = this.createFormGroup();
  }

  private openAlertBox() {
    this.alertservice.showAlertBox();
  }

  createFormGroup() {
    return new FormGroup({
      SchoolName: new FormControl(''),
      Degree: new FormControl(''),
      FieldOfStudy: new FormControl(''),
      expectedYear: new FormGroup({
        FromYear: new FormControl(''),
        ToYear: new FormControl('')
      }),
      Description: new FormControl(''),
      ActAndSociety: new FormControl(''),
    })
  }

  get schoolName() {
    return this.educationInformation.get('SchoolName');
  }

  get degree() {
    return this.educationInformation.get('Degree');
  }

  get fieldOfStudy(){
    return this.educationInformation.get('FieldOfStudy');
  }

  get expectedYear(){
    return this.educationInformation.get('expectedYear') as FormArray;
  }

  get fromYear() {
    return this.expectedYear.get('FromYear');
  }

  get toYear() {
    return this.expectedYear.get('ToYear');
  }

  get description(){
    return this.educationInformation.get('Description');
  }

  get activityAndSociety(){
    return this.educationInformation.get('ActAndSociety');
  }

  value() {
    const information: EducationInformation = {
      schoolname: this.schoolName.value,
      degree: this.degree.value,
      fieldOfStudy: this.fieldOfStudy.value,
      expectedYear: {
        fromYear: this.fromYear.value,
        toYear: this.toYear.value
      },
      description: this.description.value,
      ActAndSociety: this.activityAndSociety.value
    }

    this.educationInputService.sendInformation(information).subscribe(res => console.log(res))
    
  }

  ngOnInit() {
    this.createFormGroup();
  }

}
