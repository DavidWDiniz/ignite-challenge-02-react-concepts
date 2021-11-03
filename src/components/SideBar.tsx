import {Button} from "./Button";
import {GenreResponseProps} from "../App";
import {useCallback} from "react";

interface SideBarProps {
    setSelectedGenreId: (id: number) => void;
    selectedGenreId: number;
    genres: GenreResponseProps[]
}

export function SideBar({setSelectedGenreId, selectedGenreId, genres}: SideBarProps) {
    const handleClickButton = useCallback((id: number) => {
        setSelectedGenreId(id);
    }, [setSelectedGenreId])

    return (
        <nav className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
                {genres.map(genre => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => handleClickButton(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>
        </nav>
    )
}
