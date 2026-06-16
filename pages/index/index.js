import {
  loadLanguage
} from '/i18n/i18n';
const app = getApp();

Page({

  data: {
    isLoading: false,

  },
  onLoad() {
    console.log(app);
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

  onEnglishanguage() {
    loadLanguage("en");

    this.setData({
      i18n: app.i18n
    });
  },

  onSesothoLanguage() {

    loadLanguage("st");

    this.setData({
      i18n: app.i18n
    });
  }
  
});
