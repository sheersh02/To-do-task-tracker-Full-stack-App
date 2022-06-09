import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/register/register.component';
import { NotificationComponent } from './components/notification/notification.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { HomeComponent } from './components/home/home.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { CompletedComponent } from './components/completed/completed.component';
import { EntertaskComponent } from './components/entertask/entertask.component';
import { UseraccountComponent } from './components/useraccount/useraccount.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PriorityComponent } from './priority/priority.component';
import { CategoryComponent } from './category/category.component';
import { EntryComponent } from './components/entry/entry.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    NotificationComponent,
    UpdateTaskComponent,
    HomeComponent,
    ViewTaskComponent,
    CompletedComponent,
    EntertaskComponent,
    UseraccountComponent,
    EditprofileComponent,
    PriorityComponent,
    CategoryComponent,
    EntryComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatTabsModule,
    NgbModule,
    MatPaginatorModule,
    NgxPaginationModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
