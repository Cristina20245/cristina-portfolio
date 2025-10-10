import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  constructor(public translationService: TranslationService) {}

}
