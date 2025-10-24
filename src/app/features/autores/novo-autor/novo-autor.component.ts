import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';
import { AutorService } from '../../../core/services/autor.service';

@Component({
  selector: 'app-novo-autor',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './novo-autor.component.html',
  styleUrls: ['./novo-autor.component.scss']
})
export class NovoAutorComponent implements OnInit {
  autor = {
    CodAu: 0,
    Nome: ''
  };

  isEdit = false;

  constructor(
    private autorService: AutorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.autor.CodAu = +id;
      this.autorService.getById(+id).subscribe((data) => {
      this.autor = data;
      });
    }
  }

  salvar() {
    if (this.isEdit) {
      this.autorService.update(this.autor.CodAu!, this.autor).subscribe({
        next: () => this.router.navigate(['/autores']),
        error: (err) => console.error(err)
      });
    } else {
      this.autorService.create(this.autor).subscribe({
        next: () => this.router.navigate(['/autores']),
        error: (err) => console.error(err)
      });
    }
  }

  cancelar() {
      this.router.navigate(['/autores']);
  }

}
