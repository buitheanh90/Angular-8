import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { SignupComponent } from "./components/pages/signup/signup.component";
import { ValidateComponent } from "./components/pages/validate/validate.component";

//services
import { ProductService } from "./service/product.service";

//material
import { MatTabsModule } from "@angular/material";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		FooterComponent,
		SignupComponent,
		ValidateComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatTabsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [ProductService],
	bootstrap: [AppComponent],
})
export class AppModule {}
