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

  onIntro() {
    console.log("We are hereeee");
    my.navigateTo({
      url: '/pages/daily-hunt/intro-video/intro-video'
    });
  },

  onInviteFriends() {
    console.log("We are hereeee");
    my.navigateTo({
      url: '/pages/daily-hunt/intro-video/intro-video'
    });
  }
});
