import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User = new User();
  message = '';
  return = '';

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
    .subscribe(params => this.return = params['return'] || '/dashboard');
  }

  async submit(f) {
    if (f.invalid) {
      return;
    }
    try {
      this.message = 'Try to login';
      await this.authService.login(this.model);
      this.router.navigateByUrl(this.return);
    } catch (e) {
      this.message = 'Login failed';
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
