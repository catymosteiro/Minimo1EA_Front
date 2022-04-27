import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'

// Components
import { AppComponent } from './app.component';
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { ListarUsersComponent } from './components/listar-users/listar-users.component';
import { CrearlibroComponent } from './components/crear-libro/crear-libro.component';
import { ListarlibrosComponent } from './components/listar-libros/listar-libros.component';
import { ListarTodoComponent } from './components/listar-todo/listar-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUserComponent,
    ListarUsersComponent,
    CrearlibroComponent,
    ListarlibrosComponent,
    ListarTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
