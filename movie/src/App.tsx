import './App.css'
// import BoxOfficeView from './boxOffice/BoxOfficeView'
import { useRecoilValue } from "recoil";
import { appViewAtom } from './util/recoil';
import { APP_VIEW } from './constants';
import MovieIntroView from './movieIntro/MovieIntroView';
import ReservationView from './reservation/ReservationView';
import GradeView from './grade/GradeView';
import MovieListView from './movieList/MovieListView';

function App() {
  const appView = useRecoilValue(appViewAtom);

  return <>
    {
      appView === APP_VIEW.movieList
                  ? <>
                    <MovieListView />
                    {/* <BoxOfficeView /> */}
                  </>
                  : appView === APP_VIEW.movieIntro
                    ? <MovieIntroView />
                      : appView === APP_VIEW.movieReservation ?
                        <ReservationView />
                        : <GradeView />
    }
  </>
}

export default App
