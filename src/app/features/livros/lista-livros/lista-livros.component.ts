import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../../core/services/livro.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatTableModule, MatIconModule],
})
export class ListaLivrosComponent implements OnInit {
  displayedColumns = ['Codl', 'Titulo', 'Editora', 'Edicao', 'AnoPublicacao', 'Ações'];
  livros: any[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit() {
    this.loadLivros();
  }

  loadLivros() {
    this.livroService.getAll().subscribe(data => this.livros = data);
  }

  editar(livro: any) {
    console.log('Editar:', livro);
  }

  deletar(id: number) {
    if (confirm('Deseja excluir este livro?')) {
      this.livroService.delete(id).subscribe(() => this.loadLivros());
    }
  }
}
