import { Component, OnInit } from '@angular/core';
import { AssuntoService } from '../../../core/services/assunto.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lista-assuntos',
  templateUrl: './lista-assuntos.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatTableModule, MatIconModule],
})
export class ListaAssuntosComponent implements OnInit {
  displayedColumns = ['CodAs', 'Descricao','Ações'];
  assuntos: any[] = [];

  constructor(private assuntoService: AssuntoService) {}

  ngOnInit() {
    this.loadAssuntos();
  }

  loadAssuntos() {
    this.assuntoService.getAll().subscribe(data => this.assuntos = data);
  }

  editar(assunto: any) {
    console.log('Editar:', assunto);
  }

  deletar(id: number) {
    if (confirm('Deseja excluir este assuntos ?')) {
      this.assuntoService.delete(id).subscribe(() => this.loadAssuntos());
    }
  }
}
