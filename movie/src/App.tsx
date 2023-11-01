import './App.css'
import BoxOfficeView from './boxOffice/BoxOfficeView'
import { useRecoilValue } from "recoil";
import { appViewAtom } from './util/recoils/utilRecoil';
import { APP_VIEW } from './constants';
import MovieIntroView from './movieIntro/MovieIntroView';
import ReservationView from './reservation/ReservationView';

function App() {
  const appView = useRecoilValue(appViewAtom);

  return <>
    {
      // <Slider></Slider>
      appView === APP_VIEW.movieList
                  ? <BoxOfficeView />
                  : appView === APP_VIEW.movieIntro
                    ? <MovieIntroView />
                    : <ReservationView />
    }
  </>
}

export default App
