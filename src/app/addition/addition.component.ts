import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  n1:number;
  n2:number;
  sum: number;

  constructor(private toastrService:ToastrService) { 
    this.n1=0;
    this.n2=0;
    this.sum=0;

  }

  ngOnInit(): void {
    
  }

  add(){
    this.sum =  this.n1 + this.n2
    console.log("Sum is: ",this.sum);
    this.toastrService.success("Addition Done..");
  }

  

}
