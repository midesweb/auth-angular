import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuario = {
    email: 'a@a.es',
    password: '123'
  };
  registro = {
    email: 'a@a.com',
    password: 'qwe'
  };

  constructor (private http: Http) {}

  ngOnInit() {}

  onLogin() {
    console.log(this.usuario);
    this.http.post('http://localhost:3000/login', this.usuario)
      .subscribe(
        (response) => console.log(response)
      );
  }

  onRegistro() {
    this.http.post('http://localhost:3000/sign-in', this.registro)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
