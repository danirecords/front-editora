import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from '../../../core/services/livro.service';

@Component({
  selector: 'app-novo-livro',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './novo-livro.component.html',
  styleUrls: ['./novo-livro.component.scss']
})
export class NovoLivroComponent implements OnInit {
  livro = {
    Codl: 0,
    Titulo: '',
    Editora: '',
    Edicao: '',
    AnoPublicacao: ''
  };

  isEdit = false;

  constructor(
    private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.livro.Codl = +id;
      this.livroService.getById(+id).subscribe((data) => {
        this.livro = data;
      });
    }
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
