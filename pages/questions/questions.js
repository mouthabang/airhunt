import {
  loadLanguage
} from '/i18n/i18n';

const app = getApp();

Page({
  data: {
    isLoading: false,
    questionCount: 1,
    progressPercent: 0,
    showFeedback: false,
    feedback: {
      isCorrect: false,
      message: ''
    },
    quizCompleted: true,
    score: 0,
    currentQuestionIndex: 0,
    questions: [
      {
        id: 1,
        question: 'Which USSD code is used to check account balances?',
        correctAnswer: 'B',
        options: [
          {
            id: 'A',
            name: '*121#',
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-700'
          },
          {
            id: 'B',
            name: '*100#',
            bgColor: 'bg-green-100',
            textColor: 'text-green-700'
          },
          {
            id: 'C',
            name: '*141#',
            bgColor: 'bg-purple-100',
            textColor: 'text-purple-700'
          },
          {
            id: 'D',
            name: '*151#',
            bgColor: 'bg-orange-100',
            textColor: 'text-orange-700'
          }
        ]
      },
      {
        id: 2,
        question: 'If a customer has two data bundles active, which one will be consumed first?',
        correctAnswer: 'C',
        options: [
          {
            id: 'A',
            name: 'The bundle that was bought first.',
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-700'
          },
          {
            id: 'B',
            name: 'The bundle with the larger data allocation.',
            bgColor: 'bg-green-100',
            textColor: 'text-green-700'
          },
          {
            id: 'C',
            name: 'The bundle with the shorter validity period.',
            bgColor: 'bg-purple-100',
            textColor: 'text-purple-700'
          },
          {
            id: 'D',
            name: 'The bundle with the longer validity period.',
            bgColor: 'bg-orange-100',
            textColor: 'text-orange-700'
          }
        ]
      },
      {
        id: 3,
        question: 'What is the free customer care number to dial from a Vodacom Lesotho line?',
        correctAnswer: 'C',
        options: [
          {
            id: 'A',
            name: '111',
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-700'
          },
          {
            id: 'B',
            name: '911',
            bgColor: 'bg-green-100',
            textColor: 'text-green-700'
          },
          {
            id: 'C',
            name: '114',
            bgColor: 'bg-purple-100',
            textColor: 'text-purple-700'
          },
          {
            id: 'D',
            name: '102',
            bgColor: 'bg-orange-100',
            textColor: 'text-orange-700'
          }
        ]
      },
      {
        id: 4,
        question: 'What happens to standard daily SMS bundles at 23:59:59 on the day of purchase?',
        correctAnswer: 'C',
        options: [
          {
            id: 'A',
            name: 'They roll over to the next day.',
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-700'
          },
          {
            id: 'B',
            name: 'They are converted into airtime.',
            bgColor: 'bg-green-100',
            textColor: 'text-green-700'
          },
          {
            id: 'C',
            name: 'They expire.',
            bgColor: 'bg-purple-100',
            textColor: 'text-purple-700'
          },
          {
            id: 'D',
            name: 'They are automatically renewed.',
            bgColor: 'bg-orange-100',
            textColor: 'text-orange-700'
          }
        ]
      },
      {
        id: 5,
        question: 'Can a customer transfer an already active data bundle to a friend?',
        correctAnswer: 'C',
        options: [
          {
            id: 'A',
            name: 'Yes, by dialing *111#.',
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-700'
          },
          {
            id: 'B',
            name: 'Yes, via the My Vodacom App.',
            bgColor: 'bg-green-100',
            textColor: 'text-green-700'
          },
          {
            id: 'C',
            name: 'No, bundles are non-transferable.',
            bgColor: 'bg-purple-100',
            textColor: 'text-purple-700'
          },
          {
            id: 'D',
            name: 'Only if the friend is on a contract plan.',
            bgColor: 'bg-orange-100',
            textColor: 'text-orange-700'
          }
        ]
      }
    ]
  },
  onLoad() {
    loadLanguage(app.languageCode);
    this.setData({
      i18n: app.i18n,
      isLoading: false,
      currentQuestion: this.data.questions[0]
    });
  },
  onOptionTap(e) {
    const { option, question } = e.currentTarget.dataset;
    const isCorrect = option.id === question.correctAnswer;
    
    // Disable further interactions temporarily
    this.setData({
      showFeedback: true,
      feedback: {
        isCorrect: isCorrect,
        message: isCorrect ? 'Well done! You got it right.' : `The correct answer is ${question.correctAnswer}`
      }
    });

    // Update score if correct
    if (isCorrect) {
      this.setData({
        score: this.data.score + 1
      });
    }
  },
  closeFeedback() {
    this.setData({
      showFeedback: false
    });

    const nextIndex = this.data.currentQuestionIndex + 1;
    
    if (nextIndex < this.data.questions.length) {
      // Move to next question
      this.setData({
        currentQuestionIndex: nextIndex,
        currentQuestion: this.data.questions[nextIndex],
        questionCount: nextIndex + 1,
        progressPercent: ((nextIndex + 1) / this.data.questions.length) * 100
      });
    } else {
      // Quiz completed
      this.setData({
        quizCompleted: true
      });
    }
  },
  restartQuiz() {
    this.setData({
      currentQuestionIndex: 0,
      currentQuestion: this.data.questions[0],
      questionCount: 1,
      progressPercent: 10,
      score: 0,
      quizCompleted: false,
      showFeedback: false
    });
  }
});