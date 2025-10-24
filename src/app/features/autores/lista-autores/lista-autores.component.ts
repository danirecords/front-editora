import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../../core/services/autor.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatTableModule, MatIconModule],
})
export class ListaAutoresComponent implements OnInit {
  displayedColumns = ['CodAu', 'Nome'];
  autores: any[] = [];

  constructor(private autorService: AutorService) {}

  ngOnInit() {
    this.loadAutores();
  }

  loadAutores() {
    this.autorService.getAll().subscribe(data => this.autores = data);
  }

  editar(livro: any) {
    console.log('Editar:', livro);
  }

  deletar(id: number) {
    if (confirm('Deseja excluir este autor?')) {
      this.autorService.delete(id).subscribe(() => this.loadAutores());
    }
  }
}
