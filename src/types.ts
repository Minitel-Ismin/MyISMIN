export interface Post {
    id: number;
    banner?: string; // url ?
    title: string;
    autors: Author[];
    likes: number;
    resume?: string;
    tags: string[];
}

export interface Author {
    id: number;
    name: string;
    icon?: string; // url ?
}

