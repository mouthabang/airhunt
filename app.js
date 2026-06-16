App({
  languageCode: '',
  i18n: null,

  
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },

  // Method
  setLanguage(languageCode, i18n) {
    this.languageCode = languageCode;
    this.i18n = i18n;
  }
});
