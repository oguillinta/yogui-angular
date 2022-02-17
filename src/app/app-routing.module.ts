import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'student', component: StudentComponent, canActivate: [AuthGuard]},
  {path:'student-maintenance', component: StudentFormComponent, canActivate: [AuthGuard]},
  {path:'student-maintenance/:id', component: StudentFormComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
