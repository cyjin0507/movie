import './App.css'
import BoxOfficeView from './boxOffice/BoxOfficeView'
import { useRecoilValue } from "recoil";
import { appViewAtom } from './util/recoils/utilRecoil';

function App() {
  const appView = useRecoilValue(appViewAtom);

  return <>
    <BoxOfficeView />
  </>
}

export default App
