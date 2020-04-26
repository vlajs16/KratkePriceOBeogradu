import { Odgovor } from './odgovor';

export interface Pitanje {
    pitanjeID: number;
    vrednost?: string;
    odgovori?: Odgovor[];
    odgovor?: Odgovor;
}
