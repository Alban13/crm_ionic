import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Entreprise } from './entreprise';

@Injectable()
export class EntrepriseService {
	idCount: number;

	constructor(private httpClient: HttpClient) {
		this.idCount = 100;
	}

	public create(entreprise: Entreprise): Observable<Entreprise> {
		let newEntreprise = JSON.parse(JSON.stringify(entreprise));
        newEntreprise.id = this.idCount++;
		return Observable.of(newEntreprise);
	}

	public update(entreprise: Entreprise): Observable<Entreprise> {
		return Observable.of(JSON.parse(JSON.stringify(entreprise)));
	}

	public list(): Observable<Entreprise[]> {
		return this.httpClient.get<Array<Entreprise>>('/assets/entreprises.json');
	}
}
