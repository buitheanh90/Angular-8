import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../service/product.service";
import { Product } from "../../../model/product.class";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	product: Product[];
	constructor(private productService: ProductService) {}

	ngOnInit() {
		this.productService.getProducts().subscribe((data) => {
			this.product = data;
		});
	}
}
