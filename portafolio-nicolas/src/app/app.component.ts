import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink  ,RouterOutlet, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio-nicolas';
}
