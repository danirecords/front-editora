import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';
import { AssuntoService } from '../../../core/services/assunto.service';

@Component({
  selector: 'app-novo-assunto',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './novo-assunto.component.html',
  styleUrls: ['./novo-assunto.component.scss']
})
export class NovoAssuntoComponent implements OnInit {
  assunto = {
    codAs: 0,
    Descricao: ''
  };

  isEdit = false;

  constructor(
    private assuntoService: AssuntoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.assunto.codAs = +id;
      this.assuntoService.getById(+id).subscribe((data) => {
        this.assunto = data;
      });
    }
  }

  salvar() {
    if (this.isEdit) {
      this.assuntoService.update(this.assunto.codAs!, this.assunto).subscribe({
        next: () => this.router.navigate(['/assuntos']),
        error: (err) => console.error(err)
      });
    } else {
      this.assuntoService.create(this.assunto).subscribe({
        next: () => this.router.navigate(['/assuntos']),
        error: (err) => console.error(err)
      });
    }
  }

  cancelar() {
      this.router.navigate(['/assuntos']);
  }

}
