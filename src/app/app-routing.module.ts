import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearlibroComponent } from './components/crear-libro/crear-libro.component';
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { ListarTodoComponent } from './components/listar-todo/listar-todo.component';
import { CrearvaloracionComponent } from './components/crear-valoracion/crear-valoracion.component';

// Routes
const routes: Routes = [
  { path: '', component: ListarTodoComponent},
  { path: 'crear-user', component: CrearUserComponent},
  { path: 'editar-user/:name', component: CrearUserComponent},
  { path: 'crear-libro', component: CrearlibroComponent},
  { path: 'editar-libro/:author', component: CrearlibroComponent},
  { path: 'crear-valoracion', component: CrearvaloracionComponent},
  { path: 'editar-valoracion/:identificador', component: CrearvaloracionComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'} // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
