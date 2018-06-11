import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NewServiceService } from './../services/new-service.service';
import { NgForm, FormGroup , Validators, FormControl , FormBuilder } from '@angular/forms';

import { ValidationService } from './../validation.service';
import { fbind } from 'q';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  @ViewChild('newsubForm') newsubForm : NgForm;
  
  formdata:FormGroup;
  
// private fb : FormBuilder
  constructor(public newServiceService : NewServiceService, private fb : FormBuilder) { }

  ngOnInit() {
    this.formdata =this.fb.group({
     'name':['',[Validators.required]],
     'email': ['', [Validators.required , ValidationService.emailValidator]],
     'gender': ['', [Validators.required]],
     'mobile':['',[Validators.required , Validators.minLength(10) , Validators.maxLength(10) , ValidationService.mobileValidator]],
     'password':['',[Validators.required , ValidationService.passwordValidator]],
     'confirmpassword':['',[Validators.required ]]

   },
   {
    validator: this.validatePasswordConfirmation
  }
  );
  }

  customValidator(control) {debugger;
    //console.log(this.registerForm.value.password)
    console.log(control.value);
    if(typeof control.value ==="string" && control.value === this.formdata.value.password)
    return null;
    else 
    {
      return {'PasswordNotMatched': true}
    }

  }


  validatePasswordConfirmation(group: FormGroup) {
    debugger;
    var pw = group.controls['password'];
    var pw2 = group.controls['confirmpassword'];

    if (pw.value !== pw2.value) { // this is the trick
     return group.controls['confirmpassword'].setErrors( {MatchPassword: true} );
    }
    else{
      return null;
    }
    
  }

  onSubmit(data) : void
  {
   this.newServiceService.addData(data);
   console.log( this.formdata.value.password);
   this.formdata.reset();
  }

}
