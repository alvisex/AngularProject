import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogComponent } from './catalog/catalog.component';
import {DetailsComponent} from './details/details.component';
import{FormComponent} from './form/form.component';
import{TableTestComponent} from './table-test/table-test.component';

import {RouterModule, Routes} from '@angular/router';

const routes: Routes=[
{path: '', redirectTo:'/dashboard', pathMatch:'full'},
{path: 'dashboard', component: DashboardComponent },
{path: 'footer', component:FooterComponent},
{path: 'catalog', component: CatalogComponent},
{path: 'form', component: FormComponent},
{path: 'table-test', component: TableTestComponent},
{path: 'details/:id', component: DetailsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
