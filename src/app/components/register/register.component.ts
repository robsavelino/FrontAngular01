import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerForm !: FormGroup;
  @Output() public formDataOutput: EventEmitter<FormGroup> = new EventEmitter();

  ngOnInit() {
    this.buildForm()
  }

  public onSubmit(): void {
    this.formDataOutput.emit(this.registerForm);
    this.registerForm.reset();
  }

  private buildForm(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      cpf: new FormControl(null, [Validators.required]),
      birthDate: new FormControl(null, [Validators.required]),
      address: new FormGroup({
        street: new FormControl(),
        number: new FormControl(),
        complement: new FormControl(),
        state: new FormControl(),
        city: new FormControl(),
        district: new FormControl(),
        zipCode: new FormControl()
      }),
      contact: new FormGroup({
        phone: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required])
      }),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }
}



