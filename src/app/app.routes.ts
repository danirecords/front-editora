import { Routes } from '@angular/router';
import { ListaLivrosComponent } from './features/livros/lista-livros/lista-livros.component';
import { NovoLivroComponent } from './features/livros/novo-livro/novo-livro.component';
import { ListaAutoresComponent } from './features/autores/lista-autores/lista-autores.component';
import { NovoAutorComponent } from './features/autores/novo-autor/novo-autor.component';
import { ListaAssuntosComponent } from './features/assuntos/lista-assuntos/lista-assuntos.component';
import { NovoAssuntoComponent } from './features/assuntos/novo-assunto/novo-assunto.component';


export const routes: Routes = [
  { path: 'livros', component: ListaLivrosComponent },
  { path: 'livros/novo', component: NovoLivroComponent },
  { path: 'livros/novo/:id', component: NovoLivroComponent },
  { path: 'autores', component: ListaAutoresComponent },
  { path: 'autores/novo', component: NovoAutorComponent },
  { path: 'autores/novo/:id', component: NovoAutorComponent },
  { path: 'assuntos', component: ListaAssuntosComponent },
  { path: 'assuntos/novo', component: NovoAssuntoComponent },
  { path: 'assuntos/novo/:id', component: NovoAssuntoComponent },
  { path: '', redirectTo: 'livros', pathMatch: 'full' }
];
