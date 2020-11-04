import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirm: ['',[Validators.required,Validators.minLength(6)]]
    });
  }

  CrearUsuario(){
    if(this.form.valid){
      console.log("Valido");
    } else {
      console.log("Invalido");
    }
  }

}
