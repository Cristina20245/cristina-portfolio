import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service'; // AÑADE ESTE IMPORT

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(public translationService: TranslationService) {}
}