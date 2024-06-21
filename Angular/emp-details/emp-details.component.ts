import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent {
  emp:any =[
    {id:101,name:"Raghul",salary:6777045678,post:"CEO",Address:"Madurai"},
    {id:102,name:"Kumar",salary:67673456786,post:"TL",Address:"Delhi"},
    {id:103,name:"Guna",salary:2323,post:"GC",Address:"Mumbai"},
    {id:104,name:"Nithish",salary:69070,post:"Analyst",Address:"Bangalore"},
    {id:105,name:"Dinesh",salary:65550,post:"Trainee",Address:"Goa"}
  ]

}
