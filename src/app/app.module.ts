import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApiSimulatorComponent } from './components/api-simulator/api-simulator.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { FormsModule } from '@angular/forms';
import { ArchitectureComponent } from './components/architecture/architecture.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    ApiSimulatorComponent,
    TerminalComponent,
    ArchitectureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
