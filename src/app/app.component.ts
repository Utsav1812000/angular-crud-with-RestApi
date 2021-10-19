import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private toastrService:ToastrService){}

  ngOnInit() {
    this.toastrService.success("Explore the Features..","Welcome")
  }

  title = 'angular-demo';

 
  
}
