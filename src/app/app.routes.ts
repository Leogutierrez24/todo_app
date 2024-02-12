import { Routes } from '@angular/router';

import { HomeComponent } from "../app/pages/home/home.component";
import { LabComponent } from "../app/pages/lab/lab.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "lab", component: LabComponent },
];
