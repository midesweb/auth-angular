import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: 'a@a.es',
    password: '123'
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.usuario);
    this.http.post('http://localhost:3000/login', this.usuario)
      .subscribe(
        (response) => console.log(response)
      );
  }

}
