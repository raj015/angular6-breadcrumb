import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppAngularMaterialModule } from "./app-angular-material.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "../components/home/home.component";
import { BreadcrumbsComponent } from "../components/breadcrumbs/breadcrumbs.component";

import { Breadcrumb } from "../models/breadcrumb";
import { MenuComponent } from "../components/menu/menu.component";
import { CategoryComponent } from "../components/category/category.component";
import { RecipeComponent } from "../components/recipe/recipe.component";

import { BreadcrumbProvider } from "../providers/breadcrumb";

const ROUTES: Routes = [{
  path: "home",
  component: HomeComponent,
  data: {
    breadcrumbs: [
      new Breadcrumb("Home", "/home")
    ]
  }
}, {
  path: "category/:name",
  component: CategoryComponent,
  data: {
    breadcrumbs: [
      new Breadcrumb("Home", "/home")
    ]
  }
}, {
  path: "recipe/:name",
  component: RecipeComponent,
  data: {
    defaultBreadcrumbs: [
      new Breadcrumb("Home", "/home")
    ]
  }
}, {
  path: "menu",
  component: MenuComponent,
  data: {
    breadcrumbs: [
      new Breadcrumb("Menu", "/menu")
    ]
  }
}, {
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreadcrumbsComponent,
    MenuComponent,
    CategoryComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppAngularMaterialModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [BreadcrumbProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
