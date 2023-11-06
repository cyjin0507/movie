import { useEffect, useState } from "react"
import { movieList } from "../types"
import { getMovieList } from "../util/api";
import Loading from "../util/components/Loading";
import MovieList from "./components/MovieList";

export default function MovieListView() {
    const [movieList, setMovieList] = useState<movieList | null>(null); 

    async function getAPIMovieList() {
        const apiMovieList = await getMovieList();

        setMovieList({...apiMovieList});
    }

    useEffect(()=> {
        getAPIMovieList();
    }, [])
    
    return <>
        {
            movieList ?
                <MovieList movieListData={movieList.Data[0].Result} />
                : <Loading />
        }
    </>
}