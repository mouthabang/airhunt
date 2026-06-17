

import {
  loadLanguage
} from '/i18n/i18n';
import { airhuntAPI } from '/services/api';
const app = getApp();

Page({
  data: {
    isLoading: false,
    tAndCs: false,
    step1: true,
    step2: false,
    choice: 0,
    storage: false
  },
  async onLoad() {
    loadLanguage(app.languageCode);
    
    this.setData({
      i18n: app.i18n,
      isLoading: false
    });

/*
    const response =  await airhuntAPI.checkCustomerExists();

    console.log(response);


    if(response.success == false) {
        const createResponse = await airhuntAPI.createCustomer();

        console.log(createResponse);
    }
*/

    const result = await  app.getStorageData("airhunt");
    console.log
    if(result.data != null) {
      this.setData({
        tAndCs: false,
        isLoading: false,
        storage: true,
        step1: true,
        step2: false
      });
    }else {
      this.onLoad();
    }

  
  },

  onGetStarted() {
    loadLanguage("en");

    this.setData({
      i18n: app.i18n
    });
    
  },


  acceptTermsAndCondition() {

    
    my.setStorage({
      key: 'airhunt',
      data: true
    });

    if(this.data.choice == 1) {
      my.navigateTo({
        url: '/pages/daily-hunt/daily-hunt'
      });
    }else if(this.data.choice == 2) {
      my.navigateTo({
        url: '/pages/big-hunt/big-hunt'
      });
    }

    this.setData({
      step1:true,
      step2: false
    });
  },

  ondailyHunt() {

    console.log("We are here");

    if(this.data.storage == true) {
      my.navigateTo({
        url: '/pages/daily-hunt/daily-hunt'
      });
      return;
    }

    this.setData({
      step1: false,
      step2: true,
      choice: 1
    });
    /*
    
    */
  },

  onbigHunt() {

    if(this.data.storage == true) {
      
      my.navigateTo({
        url: '/pages/big-hunt/big-hunt'
      });
      
      return;
    }


    this.setData({
      step1: false,
      step2: true,
      choice: 2
    });

  /*
 
     */
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
