

import {
  loadLanguage
} from '/i18n/i18n';
const app = getApp();

Page({
  data: {
    isLoading: false

  },
  onLoad() {
    loadLanguage(app.languageCode);
    
    this.setData({
      i18n: app.i18n,
      isLoading: false
    });
  },

  onGetStarted() {
    loadLanguage("en");

    this.setData({
      i18n: app.i18n
    });
    
  },

  ondailyHunt() {
    my.navigateTo({
      url: '/pages/daily-hunt/daily-hunt'
    });
  },

  onbigHunt() {
    my.navigateTo({
      url: '/pages/big-hunt/big-hunt'
    });
  },

  onEnglishanguage() {

    this.setData({
      isLoading: true
    });

    setTimeout(() => {

      loadLanguage("en");

      this.setData({
        i18n: app.i18n,
        isLoading: false

      });

    }, 2000);
    
  },

  onSesothoLanguage() {
    this.setData({
      isLoading: true
    });

    setTimeout(() => {

      loadLanguage("st");

      this.setData({
        i18n: app.i18n,
        isLoading: false
      });

    }, 2000);
  }
  
});
