import { Odgovor } from './odgovor';

export interface Pitanje {
    pitanjeId: number;
    vrednost?: string;
    odgovori: Odgovor[];
}
