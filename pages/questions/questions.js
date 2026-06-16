import {
  loadLanguage
} from '/i18n/i18n';

const app = getApp();

Page({
  data: {
    isLoading: false,
    questionCount: 1,
    countdown: 10,
    progressPercent: 10,
    bundles: [
      {
        id: 'A',
        name: 'M10 Daily Data Bundle',
        bgColor: 'bg-blue-100'
      },
      {
        id: 'B',
        name: 'M2 Social Media Ticket',
        bgColor: 'bg-green-100'
      },
      {
        id: 'C',
        name: 'M50 Monthly Integrated',
        bgColor: 'bg-purple-100'
      },
      {
        id: 'D',
        name: 'M5 WhatsApp 3-Day Pass',
        bgColor: 'bg-orange-100'
      }
    ]

  },
  onLoad() {
    loadLanguage(app.languageCode);

    this.setData({
      i18n: app.i18n,
      isLoading: false
    });


  }

   
});
