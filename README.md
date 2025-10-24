# 📚 Sistema de Editora – Frontend (Angular 17)

Aplicação frontend desenvolvida em **Angular 17** com **Angular Material**, implementando o CRUD completo de **Livros**, **Autores** e **Assuntos**.

---

## 🚀 Tecnologias utilizadas

- **Angular 17**  
- **Angular Material** (UI components)  
- **TypeScript**  
- **RxJS**  
- **HTML 5 / CSS 3 (Flex Layout)**  
- **Comunicação HTTP** com API Laravel (backend)

---

## 🧩 Estrutura do projeto

```
src/
 ├── app/
 │   ├── features/
 │   │   ├── livros/
 │   │   │   ├── lista-livros/
 │   │   │   ├── novo-livro/
 │   │   ├── autores/
 │   │   │   ├── lista-autores/
 │   │   │   ├── novo-autor/
 │   │   ├── assuntos/
 │   │       ├── lista-assuntos/
 │   │       ├── novo-assunto/
 │   ├── core/
 │   │   ├── components/header/
 │   │   └── services/
 │   ├── app.routes.ts
 │   └── app.component.ts
 ├── assets/
 └── main.ts
```

---

## ⚙️ Pré-requisitos

- **Node.js** 18+  
- **npm** ou **yarn**  
- **Angular CLI 17**  
- **Backend Laravel** rodando em `http://localhost:8000` (ou outra URL configurada no serviço HTTP)

---

## 🧰 Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/seuusuario/editora-frontend.git
cd editora-frontend

# 2. Instalar dependências
npm install

# 3. Rodar o servidor de desenvolvimento
ng serve
```

Acesse em:  
👉 **http://localhost:4200**

---

## 🧱 Estrutura de CRUDs

### 📘 Livros

- **Listar livros:** `/livros`  
- **Novo livro:** `/livros/novo`  
- **Editar livro:** `/livros/novo/:id`

### ✍️ Autores

- **Listar autores:** `/autores`  
- **Novo autor:** `/autores/novo`  
- **Editar autor:** `/autores/novo/:id`

### 🧾 Assuntos

- **Listar assuntos:** `/assuntos`  
- **Novo assunto:** `/assuntos/novo`  
- **Editar assunto:** `/assuntos/novo/:id`

---

## 🎨 Layout e componentes

### ✅ Header (App Header)

Barra superior com menus de navegação:

```html
<mat-toolbar color="primary">
  <span style="flex: 1 1 auto;">Editora</span>

  <button mat-button [matMenuTriggerFor]="livrosMenu">Livros</button>
  <mat-menu #livrosMenu="matMenu">
    <button mat-menu-item routerLink="/livros">Listar</button>
    <button mat-menu-item routerLink="/livros/novo">Novo</button>
  </mat-menu>

  <button mat-button [matMenuTriggerFor]="autoresMenu">Autores</button>
  <mat-menu #autoresMenu="matMenu">
    <button mat-menu-item routerLink="/autores">Listar</button>
    <button mat-menu-item routerLink="/autores/novo">Novo</button>
  </mat-menu>

  <button mat-button [matMenuTriggerFor]="assuntosMenu">Assuntos</button>
  <mat-menu #assuntosMenu="matMenu">
    <button mat-menu-item routerLink="/assuntos">Listar</button>
    <button mat-menu-item routerLink="/assuntos/novo">Novo</button>
  </mat-menu>
</mat-toolbar>
```

---

## 🔗 Comunicação com Backend

Os services utilizam o `HttpClient` para consumir a API Laravel:

```ts
@Injectable({ providedIn: 'root' })
export class LivroService {
  private apiUrl = 'http://localhost:8000/api/livros';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<Livro>(`${this.apiUrl}/${id}`);
  }

  create(livro: Livro) {
    return this.http.post(this.apiUrl, livro);
  }

  update(id: number, livro: Livro) {
    return this.http.put(`${this.apiUrl}/${id}`, livro);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
```

---

## 🧪 Scripts úteis

| Comando | Descrição |
|----------|------------|
| `npm start` | Inicia o servidor local (`ng serve`) |
| `ng build` | Gera build de produção |
| `ng generate component` | Cria novo componente |
| `ng generate service` | Cria novo serviço |
| `ng test` | Executa testes unitários |

---

## 💅 Padrões de código

- Componentes **standalone** (`standalone: true`)  
- Angular Material como biblioteca de UI  
- `RouterModule` importado em cada componente que usa `routerLink`  
- Boas práticas de tipagem com `interface` e `DTO`  
- CSS modularizado por componente  

---

## 📦 Build de produção

```bash
ng build --configuration production
```

Os arquivos compilados ficarão em `dist/editora-frontend/`.

---

## 🧑‍💻 Autor

**Daniel Augusto Miranda de Oliveira**  
📧 [danirecords@terra.com](mailto:danirecords@terra.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/daniel-oliveira-5b945831/)  
💻 [GitHub](https://github.com/danirecords)
