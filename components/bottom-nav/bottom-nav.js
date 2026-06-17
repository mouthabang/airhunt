// components/bottom-nav/bottom-nav.js
import {
  loadLanguage
} from '/i18n/i18n';

const app = getApp();


Component({
  data: {
    currentPage: '',
    i18n: ''
  },
  props: {
    currentPage: {
      type: String,
      value: '', // Default value
    },
    
    onChange: () => {},

  },

  deriveDataFromProps(nextProps) {
    
    // Update currentPage when prop changes
    if (nextProps.currentPage !== this.data.currentPage) {
      this.setData({
        currentPage: nextProps.currentPage
      });
    }
  },

  didMount() {
    loadLanguage(app.languageCode); // or app.languageCode
    this.setData({
      i18n: app.i18n,
      currentPage: this.props.currentPage
    });
  },
  methods: {
    navigateToHome() {
      my.reLaunch({ url: `/pages/available-events/available-events` });
    },
    navigateToHistory() {
      my.navigateTo({ url: `/pages/my-events/my-events` });
    }
  },
});