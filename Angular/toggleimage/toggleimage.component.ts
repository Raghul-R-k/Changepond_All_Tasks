import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimage',
  templateUrl: './toggleimage.component.html',
  styleUrl: './toggleimage.component.css'
})
export class ToggleimageComponent {

  imgPath:string = "https://th.bing.com/th/id/OIP.gKU019dGZJaYxjWV5PIoNgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  imgName:string = "Kamal";
 
  Greeting(){
    if(this.imgName=="Kamal"){
   this.imgPath="https://th.bing.com/th/id/OIP.Bp6RKFmu9m2vfskC93e_6QHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7";
   this.imgName="Ajith";
    }else if(this.imgName=="Ajith"){
      this.imgPath="https://th.bing.com/th/id/OIP.gKU019dGZJaYxjWV5PIoNgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7";
      this.imgName="Kamal";
    }
  }

}
