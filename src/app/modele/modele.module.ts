import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EntrepriseService } from './entreprise.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [NavbarComponent],
    exports: [
        NavbarComponent,
        HttpClientModule
    ],
    providers: [
        EntrepriseService
    ]
})
export class ModeleModule { }