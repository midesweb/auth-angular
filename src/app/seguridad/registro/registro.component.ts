import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro = {
    email: 'a@a.com',
    password: 'qwe'
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onRegistro() {
    this.http.post('http://localhost:3000/sign-in', this.registro)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
