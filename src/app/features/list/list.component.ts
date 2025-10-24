import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../../src/environmnts/environment'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

    products: any[] = [];
    httpClient = inject(HttpClient);

    ngOnInit() {
      this.httpClient.get<any>(`${environment.apiUrl}/products`).subscribe((products) => {
        this.products = products
      });
    }

}
