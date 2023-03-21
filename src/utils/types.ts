export interface Todo {
    cid: number | null;
    t: string | null;
    de: string | null;
    p: "BAIXA" | "MEDIA" | "ALTA" | null
    d: string | null;
    dd: string | null;
    don: boolean | null;
    id: number;
}

export interface Category {
    id: number;
    nome: string;
    cor: string;
}