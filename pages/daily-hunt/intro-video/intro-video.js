import {
  loadLanguage
} from '/i18n/i18n';


const app = getApp();


Page({
  data: {
    playerVars: {
      'autoplay': 1, 
      'modestbranding': 1,
      isLoading: false


    }
  },
  onLoad() {
    loadLanguage(app.languageCode);


    this.setData({
      i18n: app.i18n,
      isLoading: false
    });

  },
});
