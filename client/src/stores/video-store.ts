import { defineStore } from 'pinia';
import { EMovieType, IVideo } from '../types';

const movieRaws: Omit<IVideo, 'id' | 'type'>[] = [
  {
    title: 'Твоё имя',
    desc: 'Мицуха Миямидзу — обычная девушка, уставшая от жизни в провинции. Её отец, мэр города, ведёт избирательную кампанию, а в семейном синтоистском храме ей приходится прилюдно исполнять древние ритуалы. И она мечтает перебраться из тесного провинциального мирка в большой город.Таки Татибана — увлекающийся архитектурой старшеклассник, вынужденный работать на полставки, чтобы обеспечивать свою жизнь в Токио. Изнурённый темпом большого города, Татибана мечтает о беззаботной жизни где-нибудь в горах.Однажды герои обнаруживают, что между ними существует странная и необъяснимая связь. Во сне они меняются телами и проживают жизни друг друга. Но однажды эта способность исчезает так же внезапно, как появилась. Таки решает во что бы то ни стало отыскать Мицуху, но способны ли они узнать друг друга в реальной жизни?',
    previewUrl:
      'https://animelib.me/uploads/anime/11126/cover/f70781e3-2e4a-412c-ade1-18008b946218.jpg',
    url: 'https://video1.anilib.me//uploads/converted_videos/324/324_1080.mp4',
  },
  {
    title: 'Ходячий замок',
    desc: 'Восемнадцатилетняя шляпница Софи ведёт тихую и ничем не примечательную городскую жизнь. Однако типичный её распорядок рушится, когда в окрестностях города объявляется Ходячий замок Хаула — колдуна, заключившего сделку с демоном огня Кальцифером и носящего дурную славу «похитителя» девичьих сердец.Вечером после работы очаровательный голубоглазый красавец, оказавшийся, как ни странно, самим Хаулом , спасает Софи от приставаний двух солдафонов, и девушка тут же влюбляется в своего спасителя. Однако итогом их встречи становится проклятие Ведьмы Пустоши , превратившее Софи в девяностолетнюю старуху.Теперь Софи вынуждена покинуть родной дом и отправиться на поиски ведьмы, просить ту снять проклятие. Дорога же приводит «девушку» к тому самому Ходячему замку, где у неё и появляется шанс начать новую жизнь...',
    previewUrl:
      'https://animelib.me/uploads/anime/405/cover/2585e335-7f5e-4f88-9728-2f529266c342.jpg',
    url: 'https://carbon.cloud.kodik-cdn.com/animes/a98fe566a2964ca9ebbe03451fbbf772a10eea99/8af060f5fbf514eaba48c04d451cb377:2023050818/720.mp4',
  },
  {
    title: 'Панда большая и маленькая',
    desc: 'Мимико — маленькая девочка, которая осталась без родителей, после чего её воспитанием занялась бабушка. Пока бабушка отсутствовала, во двор к Мимико забрёл маленький детёныш панды — Пан, после, в поисках сына пришёл и Папа-панда. Узнав о том, что девочка живёт одна, Папанда решает сделать Мимико своей дочерью.Так начинается история Панды большой, маленькой и девочки человеческой.',
    previewUrl:
      'https://animelib.me/uploads/anime/2399/cover/15c42776-c8bb-421f-8621-be17323e7578.jpg',
    url: 'https://flora.cloud.kodik-storage.com/useruploads/9818fe0c-4585-4c03-a8a4-51bf39b359dc/80e9528d5d71d644020e5787e26ae81d:2023050818/720.mp4',
  },
  {
    title: 'Возвращение кота',
    desc: 'Хару самая обыкновенная школьница — она не блещет неземной красотой, у неё нет особых способностей. Хару не в состоянии принимать важные решения и всегда колеблется, обычно подчиняясь решению других людей. И вот эта девочка первый раз совершила в своей жизни настоящий поступок — рискуя жизнью, она спасла кошку из-под колёс грузовика.Каково же было её удивление, когда кот встал на задние лапы и поблагодарил её! А ещё предложил стать своей женой! Хару, конечно же, отказалась и убежала от странного животного. Но тот нашёл способ перенести девочку в свою кошачью страну. Теперь Хару предстоит выбраться оттуда в человеческий мир, а в этом ей помогут хвостатые и усатые друзья: бродяга Мута и гордый Барон .',
    previewUrl:
      'https://animelib.me/uploads/anime/561/cover/9042bc93-5825-4501-bded-6609ff3ea5e3.jpg',
    url: 'https://sicarus.cloud.kodik-storage.com/useruploads/1ac3c6c6-352c-4923-ba06-300cea86f74e/bd6d820a2a08f59d6ac1b49b8dfff1f3:2023050818/720.mp4',
  },
  {
    title: 'В лес, где мерцают светлячки',
    desc: 'Шестилетняя девочка Хотару заблудилась в заколдованном лесу. Она встречает юношу в маске по имени Гин , представившегося лесным духом, который может растаять от одного прикосновения человека. С помощью нового друга Хотару выбралась из леса, но на следующий день вернулась, чтобы вновь встретиться с Гином…',
    previewUrl:
      'https://animelib.me/uploads/anime/6141/cover/ef01dac5-44de-48cc-8c66-8d30938185f4.jpg',
    url: 'https://video1.anilib.me//uploads/converted_videos/3471/3471_1080.mp4',
  },
];

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
