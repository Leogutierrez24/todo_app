import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.css'
})
export class LabComponent {
  public titulo: string = "Mi primera APP en Angular!!!";

  public tasks: string[] = ["Instalar el CLI", "Crear proyecto", "Crear componentes"];

  name: string = "Leonel";

  state: boolean = true;

  image: string = "https://w3schools.com/howto/img_avatar.png";
}
