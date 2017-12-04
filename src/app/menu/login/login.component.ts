import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User = new User();
  message = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async submit(f) {
    if (f.invalid) {
      return;
    }
    try {
      this.message = 'Try to login';
      await this.authService.login(this.model);
      this.router.navigate([this.authService.redirectUrl]);
    } catch (e) {
      this.message = 'Login failed';
      console.log('hali', e);
    }
  }

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/dashboard']);
    } catch (err) {
      console.log(err);
    }
  }

}
