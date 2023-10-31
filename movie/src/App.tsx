import './App.css'
import BoxOfficeView from './boxOffice/BoxOfficeView'
import { useRecoilValue } from "recoil";
import { appViewAtom } from './util/recoils/utilRecoil';
import { APP_VIEW } from './constants';
import MovieIntroView from './movieIntro/MovieIntroView';

function App() {
  const appView = useRecoilValue(appViewAtom);

  return <>
    {
      appView === APP_VIEW.movieList 
                  ? <BoxOfficeView />
                  : <MovieIntroView />
    }
  </>
}

export default App
