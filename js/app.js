// SVG 아이콘 정의
const icons = {
  record: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/></svg>`,
  travel: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>`,
  energy: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>`,
  life: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/></svg>`,
  sparkle: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>`,
  light: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg>`
};

// 카테고리-아이콘 매핑
const categoryIcons = {
  '기록': 'record',
  '여행': 'travel',
  '에너지': 'energy',
  '생활': 'life'
};

// 테스트 앱 메인 로직 (SPA)
const App = {
  currentTest: null,
  currentQuestionIndex: 0,
  answers: [],
  currentView: 'hub',

  init() {
    this.showHub();
  },

  showHub() {
    this.currentView = 'hub';
    this.currentTest = null;
    this.answers = [];
    this.currentQuestionIndex = 0;

    const app = document.getElementById('app');
    const categories = [...new Set(tests.map(t => t.category))];

    let cardsHtml = '';
    categories.forEach(category => {
      const categoryTests = tests.filter(t => t.category === category);
      const iconKey = categoryIcons[category] || 'life';

      cardsHtml += `
        <section class="category-section">
          <h2 class="category-title">${category}</h2>
          <div class="cards-grid">
            ${categoryTests.map(test => `
              <div class="test-card">
                <div class="card-header">
                  <div class="card-icon ${iconKey}">${icons[iconKey]}</div>
                  <div class="card-content">
                    <h3 class="card-title">${test.title}</h3>
                    <p class="card-description">${test.description}</p>
                  </div>
                </div>
                <div class="card-footer">
                  <span class="card-duration">${icons.clock} ${test.duration}</span>
                  <button class="btn-start" data-test-id="${test.id}">시작하기</button>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    });

    app.innerHTML = `
      <header class="site-header">
        <h1 class="site-title">Test Hub</h1>
        <p class="site-description">정답을 알려주는 테스트가 아니라,<br>지금의 나를 가볍게 정리해보는 테스트 모음</p>
      </header>

      <main class="container">
        <div id="test-cards">${cardsHtml}</div>
      </main>

      <footer class="site-footer">
        Personal side project · No ads · No tracking
      </footer>
    `;

    document.querySelectorAll('.btn-start').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const testId = e.target.dataset.testId;
        this.startTest(testId);
      });
    });
  },

  startTest(testId) {
    this.currentTest = tests.find(t => t.id === testId);
    if (!this.currentTest) return;

    this.currentQuestionIndex = 0;
    this.answers = [];
    this.showIntro();
  },

  showIntro() {
    this.currentView = 'intro';
    const app = document.getElementById('app');
    const iconKey = categoryIcons[this.currentTest.category] || 'life';

    app.innerHTML = `
      <div class="test-page">
        <div class="intro-screen">
          <div class="intro-icon">${icons[iconKey]}</div>
          <h1 class="test-title">${this.currentTest.title}</h1>
          <p class="test-description">${this.currentTest.description}</p>
          <div class="test-info">
            <span>${icons.clock} ${this.currentTest.questions.length}개 질문</span>
            <span>·</span>
            <span>${this.currentTest.duration}</span>
          </div>
          <button class="btn-primary" id="btn-start-questions">시작하기</button>
          <button class="btn-link" id="btn-back-hub">${icons.arrow} 돌아가기</button>
        </div>
      </div>
    `;

    document.getElementById('btn-start-questions').addEventListener('click', () => {
      this.showQuestion();
    });

    document.getElementById('btn-back-hub').addEventListener('click', () => {
      this.showHub();
    });
  },

  showQuestion() {
    this.currentView = 'question';
    const question = this.currentTest.questions[this.currentQuestionIndex];
    const total = this.currentTest.questions.length;
    const progress = ((this.currentQuestionIndex + 1) / total) * 100;

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="test-page">
        <div class="question-screen">
          <div class="progress-container">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <p class="question-count">${this.currentQuestionIndex + 1} / ${total}</p>
          </div>

          <div class="question-card">
            <p class="question-text">${question.text}</p>
          </div>

          <div class="answer-buttons">
            <button class="btn-answer" data-value="2">예</button>
            <button class="btn-answer" data-value="1">조금</button>
            <button class="btn-answer" data-value="0">아니오</button>
          </div>

          <div class="nav-buttons">
            ${this.currentQuestionIndex > 0 ?
              `<button class="btn-nav" id="btn-prev">${icons.arrow} 이전</button>` :
              '<span></span>'}
          </div>
        </div>
      </div>
    `;

    document.querySelectorAll('.btn-answer').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const value = parseInt(e.target.dataset.value);
        this.answer(value);
      });
    });

    const prevBtn = document.getElementById('btn-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.prevQuestion());
    }
  },

  answer(value) {
    this.answers[this.currentQuestionIndex] = value;

    if (this.currentQuestionIndex < this.currentTest.questions.length - 1) {
      this.currentQuestionIndex++;
      this.showQuestion();
    } else {
      this.showResult();
    }
  },

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.showQuestion();
    }
  },

  showResult() {
    this.currentView = 'result';
    const scores = {};

    this.currentTest.questions.forEach((question, index) => {
      const answerValue = this.answers[index] || 0;
      Object.entries(question.scores).forEach(([key, baseScore]) => {
        if (!scores[key]) scores[key] = 0;
        scores[key] += baseScore * answerValue;
      });
    });

    const resultType = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])[0][0];

    const result = this.currentTest.results[resultType];

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="test-page">
        <div class="result-screen">
          <div class="result-header">
            <div class="result-badge">${icons.check}</div>
            <h1 class="result-title">${result.title}</h1>
            <p class="result-description">${result.description}</p>
          </div>

          <div class="result-section">
            <h3>${icons.user} 이런 경향이 보이는 사람의 특징</h3>
            <ul>
              ${result.traits.map(trait => `<li>${trait}</li>`).join('')}
            </ul>
          </div>

          <div class="result-section">
            <h3>${icons.light} 요즘 이렇게 해보면 좋은 점</h3>
            <ul>
              ${result.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
          </div>

          <p class="disclaimer">${icons.info} 이 결과는 참고용입니다</p>

          <div class="result-actions">
            <button class="btn-retry" id="btn-retry">다시 하기</button>
            <button class="btn-link" id="btn-hub">${icons.arrow} Hub로 돌아가기</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-retry').addEventListener('click', () => {
      this.startTest(this.currentTest.id);
    });

    document.getElementById('btn-hub').addEventListener('click', () => {
      this.showHub();
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
