import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	FormControl,
	Validators,
} from "@angular/forms";
import { User } from "../../../model/user.class";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "../../../service/auth.service";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
	user: User[];
	registered = false;
	submitted = false;
	userForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private http: HttpClient,
		private router: Router,
		private auth: AuthService
	) {}

	invalidName() {
		return this.submitted && this.userForm.controls.name.errors != null;
	}

	invalidEmail() {
		return this.submitted && this.userForm.controls.email.errors != null;
	}

	invalidPassword() {
		return this.submitted && this.userForm.controls.password.errors != null;
	}

	invalidCPassword() {
		return (
			this.submitted &&
			this.userForm.controls.cpassword.value !=
				this.userForm.controls.password.value
		);
	}

	ngOnInit() {
		this.userForm = this.formBuilder.group({
			name: ["", Validators.required],
			email: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required, Validators.minLength(5)]],
			cpassword: ["", [Validators.required]],
		});
	}

	onSubmit(event) {
		const name = this.userForm.controls.name.value;
		const email = this.userForm.controls.email.value;
		const password = this.userForm.controls.password.value;

		this.submitted = true;
		if (this.userForm.invalid == true) {
			return;
		} else {
			this.auth.onSubmit(name, email, password).subscribe((data) => {
				this.user = data as any;
			});
			this.registered = true;
		}
	}
}
