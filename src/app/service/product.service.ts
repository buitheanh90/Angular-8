import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../model/product.class";
import { Observable } from "rxjs";

const httpOptions = {
	headers: new HttpHeaders().set("Content-Type", "x-www-form-urlencoded"),
};

@Injectable()
export class ProductService {
	API: string = "/api/products";

	constructor(private http: HttpClient) {}

	getProducts(): Observable<Product[]> {
		return this.http.post<Product[]>(this.API, httpOptions);
	}
}
