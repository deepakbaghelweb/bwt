import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      Gender: [''],
      webuserRadios: [''],
      progressRadios: [''],
      Age: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
     // this.submitted = true;
      console.log("=============this.registerForm==========",this.registerForm.value);

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      

      var userInformation = { 'Name': this.registerForm.value.Name, 
                          'Email': this.registerForm.value.Email, 
                          'Gender': this.registerForm.value.Gender, 
                          'Frequentwebuser': this.registerForm.value.webuserRadios, 
                          'knowprogressindicator': this.registerForm.value.progressRadios };

      localStorage.setItem('userInformation', JSON.stringify(userInformation));

      this.router.navigate(['/links']);
  }

}
