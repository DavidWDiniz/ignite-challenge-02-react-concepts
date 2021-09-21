import {useState} from 'react';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import {SideBar} from "./components/SideBar";
import {Content} from "./components/Content";

export interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

export function App() {
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <SideBar
                setSelectedGenreId={setSelectedGenreId}
                selectedGenreId={selectedGenreId}
            />
            <Content
                selectedGenreId={selectedGenreId}
            />
        </div>
    )
}