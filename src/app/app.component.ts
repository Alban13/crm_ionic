import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntrepriseService } from './modele/entreprise.service';
import {Entreprise} from './modele/entreprise';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Top of CRM';
    entreprises: Array<Entreprise>;
    editing: boolean;
    editEntreprise: Entreprise;

    constructor(private entrepriseService: EntrepriseService){
        this.editing = false;
        this.editEntreprise = new Entreprise();
        this.title = 'the top of CRM';
        this.entreprises = new Array();
    }
    ngOnInit() {
        this.entrepriseService.list().subscribe({
            next: (entreprises) => {
                this.entreprises = entreprises;
            },
            error: (response) => {
                console.log('Impossible de récupérer les article dans le fichier JSON.',
                    response);
            }
        });
    }

    addEntreprise() {
        this.editing = true;
    }
    saveEntreprise(myForm: NgForm) {
        if (this.editEntreprise.id >= 0) {
            this.entrepriseService.update(this.editEntreprise)
                .subscribe((entreprise) => {
                    // Remplacer l'article à jour dans la liste.
                    let index = this.entreprises.findIndex(
                        (value: Entreprise) => value.id === entreprise.id);
                    this.entreprises.splice(index, 1, entreprise);
                });
        } else {
            this.entrepriseService.create(this.editEntreprise)
                .subscribe((entreprise) => this.entreprises.push(entreprise));
        }
        this.editEntreprise.id = undefined;
        myForm.resetForm();
    }
    backToList() {
        setTimeout(() => this.editing = false);
    }
    modifyEntreprise(id: number, index: number) {
        this.editEntreprise = this.entreprises[index];
        this.addEntreprise();
    }

    deleteEntreprise(id: number, index: number) {
        this.entreprises.splice(index, 1);
    }
}