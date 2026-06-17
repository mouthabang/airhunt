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
      isLoading: true,
      i18n: app.i18n
    });

    setTimeout(() => {

      this.setData({
        isLoading: false
      });

    }, 2000);

  },
  goToQuestions() {
    console.log("We are hereeee");
    my.navigateTo({
      url: '/pages/questions/questions'
    });
  }


});
