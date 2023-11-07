import { ChangeEvent, useEffect, useState } from "react"
import { movieList } from "../types"
import Loading from "../util/components/Loading";
import MovieList from "./components/MovieList";
import { getGenreMovieList, getTitleMovieList } from "../util/api";
import styled from "styled-components";
import { GENRE_LIST } from "../constants";

export default function MovieListView() {
    const [genreMovieList, setGenreMovieList] = useState<movieList | null>(null);
    const [searchMovieList, setSearchMovieList] = useState<movieList | null>(null);

    const [currentGenre, setCurrentGenre] = useState(GENRE_LIST[0]);

    async function getAPIMovieList() {
        const apiMovieList = await getGenreMovieList(currentGenre);

        setGenreMovieList({ ...apiMovieList });
    }

    async function getSearchMovieList(title: string) {
        if (title === "") {
            setSearchMovieList(null);
        } else {
            const apiMovieList = await getTitleMovieList(title);

            setSearchMovieList({ ...apiMovieList });
        }
    }

    useEffect(() => {
        getAPIMovieList();
    }, [currentGenre])

    const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentGenre(e.target.value);
    }

    return <>
        {
            genreMovieList ?
                <MovieListContainer>
                    <SearchListArea>
                        <input type="text" placeholder="원하는 영화를 입력해주세요." onChange={(e) => getSearchMovieList(e.target.value)} />
                        {
                            searchMovieList ?
                                <MovieList movieListData={searchMovieList.Data[0].Result ?? []} />
                                : <p>검색한 결과가 없습니다.</p>
                        }
                    </SearchListArea>

                    <div>
                        <MovieOptions>
                            <h3>{currentGenre}영화</h3>
                            <select name="" id="" onChange={(e) => handleGenreChange(e)}>
                                {
                                    GENRE_LIST.map((genre, index) => {
                                        return <option value={genre} key={index}>{genre}</option>
                                    })
                                }
                            </select>
                        </MovieOptions>
                        <MovieList movieListData={genreMovieList.Data[0].Result} />
                    </div>

                </MovieListContainer>
                : <Loading />
        }
    </>
}

const MovieListContainer = styled.div`
    width: 1400px;
    margin: auto;
    margin-top: 50px;
`

const MovieOptions = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 80px;

    ${'h3'} {
        line-height: 0;
        margin-left: 20px;
        font-size: 25px;
    }

    > select {
        width: 100px;
        font-size: 18px;
        padding-left: 10px;
        border-radius: 5px;
    }

    
`

const SearchListArea = styled.div`

    ${'p'} {
        margin-left: 20px;
    }

    ${'input'} {
        width: 220px;
        padding-left: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        height: 55px;
        margin-left:20px;
    }
`
