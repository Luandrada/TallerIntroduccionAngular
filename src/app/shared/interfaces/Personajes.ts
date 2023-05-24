
interface Location {
    name: string;
    url: string;
}
interface Origin {
    name: string;
    url: string;
}

export interface Personaje {
    name: string;
    created: Date;
    episode: Array<string>;
    gender: string;
    id: number;
    image: string;
    location: Location;
    origin: Origin;
    species: string;
    status: string;
    type: string;
    url: string;
}
