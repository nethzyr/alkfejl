import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: User = new User();
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
      this.model.firstname = this.model.firstName;
      this.model.lastname = this.model.lastName;
    try {
      console.log(this.model);
      await this.authService.register(this.model);
      this.router.navigateByUrl(this.return);
    } catch (e) {
      console.log(e);
    }
  }

}
