import {
  loadLanguage
} from '/i18n/i18n';


const app = getApp();



Page({
  data: {
    seconds: 10,
    timerId: null,
    isRunning: false,
    isLoading: false,

    events: [
      {
        id: 1,
        title: 'Midnight Mania',
        date: 'Sat, 14 June',
        reward: '🏆 M 500 Airtime',
        rewardColor: 'text-yellow-400'
      },
      {
        id: 2,
        title: 'Data Rush Hour',
        date: 'Sun, 15 June',
        reward: '📱 2GB Data Bundle',
        rewardColor: 'text-green-400'
      },
      {
        id: 3,
        title: 'Weekend Blast',
        date: 'Mon, 16 June',
        reward: '🎁 M100 + 500MB',
        rewardColor: 'text-purple-400'
      }
    ]
  

  },
  onLoad() {
    loadLanguage(app.languageCode);

    this.setData({
      i18n: app.i18n,
      isLoading: false
    });

    this.startTimer();


  },

    onUnload() {
      this.clearTimer();

  },
  startTimer() {
    if (this.data.isRunning) return;
    
    this.setData({ 
      isRunning: true,
      seconds: 10 
    });
    
    this.timerId = setInterval(() => {
      let newSeconds = this.data.seconds - 1;
      
      if (newSeconds < 0) newSeconds = 0;
      
      this.setData({ seconds: newSeconds });
      
      if (newSeconds === 0) {
        this.clearTimer();
        this.setData({ isRunning: false });
        // Trigger any end-of-timer actions here
        console.log('Timer finished!');
      }
    }, 1000);
  },

  clearTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  },

  onTimerAction() {
    if (this.data.seconds > 0) {
      // Handle "JOIN THE HUNT" action
      console.log('Joining hunt...');
      // Add your join logic here
    }
  },

  onResetTimer() {
    this.clearTimer();
    this.setData({ 
      seconds: 10,
      isRunning: false 
    });
    this.startTimer();
  },

  onInviteFriends() {
    console.log("We are hereeee");
    my.navigateTo({
      url: '/pages/referral/referral'
    });
  },

   // Remind Me button handler
   onRemindMe(e) {
    const eventName = e.currentTarget.dataset.event;
    my.showToast({
      content: `⏰ Reminder set for ${eventName}!`,
      duration: 2000,
    });
    
    // You can also store this in local storage or send to a server
    // my.setStorage({
    //   key: 'reminders',
    //   data: {
    //     event: eventName,
    //     date: new Date().toISOString()
    //   }
    // });
  },

  // Optional: Add touch feedback
  onCardTap(e) {
    const eventName = e.currentTarget.dataset.event;
    console.log('Card tapped:', eventName);
  },

  onJoinHunt() {
    my.navigateTo({
      url: '/pages/big-hunt/intro-video/intro-video'
    });
  }
});
