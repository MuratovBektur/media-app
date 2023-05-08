import { defineStore } from 'pinia';
import { EMovieType, IVideo } from '../types';
import { movieRaws } from '../data/data';

const videoList: IVideo[] = movieRaws.map((movie, idx) => ({
  ...movie,
  id: idx + 1,
  type: EMovieType.Movie,
}));

export const useVideoStore = defineStore('video', {
  state: () => ({
    videoList: videoList as IVideo[],
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  // actions: {
  //   increment() {
  //     this.counter++;
  //   },
  // },
});
