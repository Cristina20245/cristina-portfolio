import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cristina-portfolio';

  constructor(public translationService: TranslationService) {}

  toggleLanguage() {
    const newLang = this.translationService.getCurrentLang() === 'en' ? 'es' : 'en';
    this.translationService.setLanguage(newLang);
  }

}