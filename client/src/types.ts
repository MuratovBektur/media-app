export enum EMovieType {
  Movie = 1,
  Shows,
}

export interface IVideo {
  id: number;
  title: string;
  desc: string;
  previewUrl: string;
  url: string;
  type: EMovieType;
}
