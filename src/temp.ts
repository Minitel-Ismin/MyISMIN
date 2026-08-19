import type { Post } from "./types";
import type { Author } from "./types";

const imagesInternet = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60"
];

const listesAuteurs = [
    { id: 1, name: "AREM", icon: "https://example.com/arem.png" },
    { id: 2, name: "BDA", icon: "https://example.com/bda.png" },
    { id: 3, name: "BDE", icon: "https://example.com/bde.png" },
    { id: 4, name: "BDS", icon: "https://example.com/bds.png" },
    { id: 5, name: "Tutorat", icon: "https://example.com/tutorat.png" },
    { id: 6, name: "Club Info", icon: "https://example.com/club-info.png" },
    { id: 7, name: "Brico", icon: "https://example.com/brico.png" },
    { id: 8, name: "Gala", icon: "https://example.com/gala.png" }
];
const listesTags = ["Hackathon", "Jeux", "Compétition", "ISMIN", "Soirée", "Sport", "Tech", "Découverte"];

const getRandomAuthors = (arr: Author[], maxElements: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * maxElements) + 1);
};

const getRandomTags = (arr: string[], maxElements: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * maxElements) + 1);
};

export const fauxPost: Post[] = Array.from({ length: 100 }, (_, index) => {
    return {
        id: index + 1,
        title: `Post généré numéro ${index + 1}`,
        autors: getRandomAuthors(listesAuteurs, 3),
        likes: Math.floor(Math.random() * 150),
        resume: `Ceci est le résumé automatique du post ${index + 1}. Il permet de tester le rendu des textes longs sur l'interface.`,
        tags: getRandomTags(listesTags, 4),
        banner: (index % 4 === 0) ? imagesInternet[index % imagesInternet.length] : undefined
    };
});

