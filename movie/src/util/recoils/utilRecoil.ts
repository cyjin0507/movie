import {
    atom,
} from 'recoil';
import { AppView, dailyBoxOfficeItem, movieCommentData, reservationData } from '../../types';
import { APP_VIEW } from '../../constants';
import Storage from '../storage';

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

export const commentList = atom<movieCommentData>({
    key : 'commentData',
    default: Storage.getCommentData()
})