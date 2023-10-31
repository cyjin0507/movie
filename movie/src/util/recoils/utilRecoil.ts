import {
    atom,
} from 'recoil';
import { AppView, dailyBoxOfficeItem, reservationData } from '../../types';
import { APP_VIEW } from '../../constants';

export const appViewAtom = atom<AppView>({
    key: 'appView',
    default: APP_VIEW.movieList,
});

export const selectedMovieInfo = atom<dailyBoxOfficeItem | null>({
    key: 'selectedMovieInfo',
    default: null
});

export const reservationList = atom<reservationData>({
    key : 'reservationData',
    default: {}
});