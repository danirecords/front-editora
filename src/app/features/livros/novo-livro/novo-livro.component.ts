import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from '../../../core/services/livro.service';
import { AutorService } from '../../../core/services/autor.service';
import { AssuntoService } from '../../../core/services/assunto.service';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-novo-livro',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule],
  templateUrl: './novo-livro.component.html',
  styleUrls: ['./novo-livro.component.scss']
})
export class NovoLivroComponent implements OnInit {
  livro = {
    Codl: 0,
    Titulo: '',
    Editora: '',
    Edicao: '',
    AnoPublicacao: '',
    autores: [],
    assuntos: []
  };

  autores: any[] = [];
  assuntos: any[] = [];

  isEdit = false;

  constructor(
    private livroService: LivroService,
    private autorService: AutorService,
    private assuntoService: AssuntoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.carregarAutores();
    this.carregarAssunto();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.livro.Codl = +id;
      this.livroService.getById(+id).subscribe((data) => {
        this.livro = data;

        this.livro.autores = data.autores.map((a: any) => a.CodAu);
        this.livro.assuntos = data.assuntos.map((a: any) => a.codAs);
      });
    }
  }

  carregarAutores() {
    this.autorService.getAll().subscribe(data => this.autores = data);
  }

  carregarAssunto() {
    this.assuntoService.getAll().subscribe(data => this.assuntos = data);
  }

  salvar() {
    if (this.isEdit) {
      this.livroService.update(this.livro.Codl!, this.livro).subscribe({
        next: () => this.router.navigate(['/livros']),
        error: (err) => console.error(err)
      });
    } else {
      this.livroService.create(this.livro).subscribe({
        next: () => this.router.navigate(['/livros']),
        error: (err) => console.error(err)
      });
    }
  }

  cancelar() {
      this.router.navigate(['/livros']);
  }

}
