export class Entreprise {
	id: number;
    name: string;
    adresse: string;
    ville: string;
    cp: string;
	description: string;
	author: string;
	date: Date;

	constructor(id?: number, name?: string, ville?: string, cp?: string, adresse?: string,
		description?: string, author: string = 'alban') {
		this.id = id;
		this.name = name;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
		this.description = description;
		this.author = author;
		this.date = new Date();
	}
}
