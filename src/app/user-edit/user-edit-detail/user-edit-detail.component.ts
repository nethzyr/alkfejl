import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-edit-detail',
  templateUrl: './user-edit-detail.component.html',
  styleUrls: ['./user-edit-detail.component.css']
})
export class UserEditDetailComponent implements OnInit {

  @Input() user: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  async submit(f) {
    if (f.invalid) {
      return;
    }
    if (this.user.id > 0) {
      await this.authService.editUser(this.user.id, this.user);
    }
  }

}
