export interface Integracao{
    id: number;
    nomeProjeto: string;
    descricao: string;
    tecnologias: string[];
    equipe?:{
        backend: number;
        frontend: number;
        design: number;
        total: number;
    }
    contribuicao: string[];
    funcionalidades: string[];
    repositorio: string;
    video: string;
}

export const integracao : Integracao[] = [
    
]