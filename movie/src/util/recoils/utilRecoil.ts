import {
    atom,
} from 'recoil';
import { AppView } from '../../types';
import { APP_VIEW } from '../../constants';

export const appViewAtom = atom<AppView>({
    key: 'appView',
    default: APP_VIEW.movieList,
});