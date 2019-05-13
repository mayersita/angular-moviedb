import { Filme } from './filme';
import { Pessoa } from './pessoa';
import { Serie } from './serie';

export class AtuacaoElenco {
    id: number;
    personagem: string;
    nome: string;
    ordem: number;
    pessoaId: number;
    pessoaImagem: String;
}

export class AtuacaoPessoa {
    id: number;
    personagem: string;
    titulo: string;
    ordem: number;
}