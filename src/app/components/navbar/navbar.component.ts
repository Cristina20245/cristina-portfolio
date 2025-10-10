import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public translationService: TranslationService) {}
}
