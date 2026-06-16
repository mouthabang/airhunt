import {
  loadLanguage
} from '/i18n/i18n';

const app = getApp();

Page({
  data: {
    isLoading: false,
    referralLink: 'airhunt.win/ref/USER123',
    contacts: [
      {
        id: 1,
        name: 'Thabo Mokoena',
        phone: '+266 5812 3456',
        initials: 'TM',
        status: 'pending',
        color: 'from-red-600 to-red-500'
      },
      {
        id: 2,
        name: 'Lerato Lekanya',
        phone: '+266 5922 1122',
        initials: 'LL',
        status: 'invited',
        color: 'from-green-600 to-green-500'
      },
      {
        id: 3,
        name: 'Khotso Molefe',
        phone: '+266 6201 9988',
        initials: 'KM',
        status: 'pending',
        color: 'from-purple-600 to-purple-500'
      },
      {
        id: 4,
        name: 'Mpho Ramatla',
        phone: '+266 5788 4433',
        initials: 'MR',
        status: 'pending',
        color: 'from-yellow-600 to-yellow-500'
      }
    ],
    referralProgress: 60, // 3/5 = 60%
    referralCount: '3 / 5',
    remainingInvites: 2
  },
  
  onLoad() {
    loadLanguage(app.languageCode);
    this.setData({
      i18n: app.i18n || {},
      isLoading: false
    });
  },

  // Navigate to questions page
  goToQuestions() {
    my.navigateTo({
      url: '/pages/quiz/quiz'
    });
  },

  // Refer Friends button
  onReferFriends() {
    my.showToast({
      content: 'Opening referral options...',
      duration: 2000,
    });
  },

  // Mission Status button
  onMissionStatus() {
    my.showToast({
      content: 'Mission: 3/5 friends invited',
      duration: 2000,
    });
  },

  // Search contacts
  onSearchContacts(e) {
    const searchTerm = e.detail.value.toLowerCase();
    // Filter contacts logic here
    console.log('Searching for:', searchTerm);
  },

  // See All contacts
  onSeeAll() {
    my.showToast({
      content: 'Showing all contacts',
      duration: 2000,
    });
  },

  // Invite a contact
  onInviteContact(e) {
    const contactName = e.currentTarget.dataset.contact;
    my.showToast({
      content: `Invitation sent to ${contactName}`,
      duration: 2000,
    });
    
    // Update the contact status to "invited"
    // You would typically update your data here
  },

  // Copy referral link
  onCopyLink() {
    // Copy to clipboard
    my.setClipboard({
      text: this.data.referralLink,
      success: () => {
        my.showToast({
          content: 'Link copied to clipboard!',
          duration: 2000,
        });
      }
    });
  },

  // Share on WhatsApp
  onShareWhatsApp() {
    const message = `Join me on AirHunt! Use my referral link: ${this.data.referralLink}`;
    // Share logic for WhatsApp
    my.showToast({
      content: 'Opening WhatsApp...',
      duration: 2000,
    });
  },

  // Share on Social Media
  onShareSocial() {
    const message = `Join me on AirHunt! Use my referral link: ${this.data.referralLink}`;
    // Share logic for social media
    my.showToast({
      content: 'Opening share options...',
      duration: 2000,
    });
  }
});