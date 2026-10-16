// Flag Quiz logic
let quizScore = 0;
const QUIZ_QUESTIONS = [
  { q: "Which country has the iconic Angkor Wat temple on its flag?", correct: "kh", opts: ["kh", "la", "th", "mm"] },
  { q: "Which nation's flag has a yellow crescent moon and 14 stripes?", correct: "my", opts: ["my", "sg", "id", "ph"] },
  { q: "Which red and white bi-color flag belongs to Southeast Asia's largest archipelago?", correct: "id", opts: ["id", "vn", "sg", "bn"] },
  { q: "Which 11th member's flag features a yellow triangle, black triangle, and white star?", correct: "tl", opts: ["tl", "ph", "vn", "la"] },
  { q: "Which flag proudly displays a golden sun with 8 primary rays representing 8 provinces?", correct: "ph", opts: ["ph", "th", "my", "kh"] }
];
let currentQuizIndex = 0;

function startFlagQuiz() {
  playRetroClick();
  quizScore = 0;
  currentQuizIndex = 0;
  document.getElementById('centralHeroBlock').classList.add('hidden');
  document.getElementById('centralDossierCard').classList.add('hidden');
  document.getElementById('centralQuizCard').classList.remove('hidden');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[currentQuizIndex];
  document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
  document.getElementById('quizQuestion').textContent = `Q${currentQuizIndex + 1}: ${q.q}`;

  const optsContainer = document.getElementById('quizOptions');
  optsContainer.innerHTML = q.opts.map(k => `
    <button onclick="handleQuizAnswer('${k}')" class="p-1.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 rounded-xl border border-slate-600 flex items-center space-x-1.5 shadow">
      <img src="https://flagcdn.com/${k}.svg" class="w-5 h-3.5 object-cover border border-white/40">
      <span class="truncate text-[11px]">${ASEAN_11[k].name}</span>
    </button>
  `).join('');
}

function handleQuizAnswer(selectedKey) {
  playRetroClick();
  const q = QUIZ_QUESTIONS[currentQuizIndex];
  if (selectedKey === q.correct) {
    quizScore += 10;
    showToast("🌟 Correct! +10 Points!");
  } else {
    showToast(`Oops! Correct was ${ASEAN_11[q.correct].name}!`);
  }

  currentQuizIndex++;
  if (currentQuizIndex < QUIZ_QUESTIONS.length) {
    renderQuizQuestion();
  } else {
    document.getElementById('quizQuestion').textContent = `🎉 Quiz Completed! Final Score: ${quizScore}/50!`;
    document.getElementById('quizOptions').innerHTML = `
      <button onclick="startFlagQuiz()" class="col-span-2 p-1.5 bg-lime-500 text-slate-900 font-black rounded-xl shadow">Play Again</button>
    `;
  }
}