import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.class";

const options = { responseType: "text" as "json" };

@Injectable({
	providedIn: "root",
})
export class AuthService {
	API: string = "/api/users/create";
	constructor(private http: HttpClient) {}

	onSubmit(name, email, password) {
		return this.http.post<User>(
			this.API,
			{
				name,
				email,
				password,
			},
			options
		);
	}
}
