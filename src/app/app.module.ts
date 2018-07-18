import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from "@angular/forms";
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { CombatantService} from "./combatant.service";

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ CombatantService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
