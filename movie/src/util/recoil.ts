import {
    atom,
} from 'recoil';
import { AppView, dailyBoxOfficeItem, movieGradeData, movieListResult, reservationData } from '../types';
import { APP_VIEW } from '../constants';
import Storage from './storage';

export const appViewAtom = atom<AppView>({
    key: 'appView',
    default: APP_VIEW.movieList,
});

export const selectedMovieInfo = atom<movieListResult | null>({
    key: 'selectedMovieInfo',
    default: null
});

export const reservationList = atom<reservationData>({
    key : 'reservationData',
    default: {}
});

export const gradeList = atom<movieGradeData>({
    key : 'gradeData',
    default: Storage.getGradeData()
})

export const keyPadInput = atom({
    key : 'keyPad',
    default: ""
})