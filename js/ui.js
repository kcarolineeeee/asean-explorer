function navigatePole(delta) {
  playRetroClick();
  let idx = COUNTRY_KEYS.indexOf(currentKey);
  idx = (idx + delta + COUNTRY_KEYS.length) % COUNTRY_KEYS.length;
  selectCountry(COUNTRY_KEYS[idx]);
}

function playRandomNation() {
  playRetroClick();
  const randKey = COUNTRY_KEYS[Math.floor(Math.random() * COUNTRY_KEYS.length)];
  selectCountry(randKey);
  showToast(`Selected ${ASEAN_11[randKey].name}!`);
}

function toggleSfx() {
  sfxEnabled = !sfxEnabled;
  document.getElementById('sfxIcon').textContent = sfxEnabled ? '🔊' : '🔇';
  showToast(sfxEnabled ? "Sound FX Enabled" : "Sound FX Muted");
}

function selectCountry(key) {
  playRetroClick();
  currentKey = key;
  const data = ASEAN_11[key];
  if (!data) return;

  document.querySelectorAll('.pole-unit').forEach(el => el.classList.remove('pole-active'));
  const targetRig = document.getElementById(`rig-${key}`);
  if (targetRig) targetRig.classList.add('pole-active');

  document.getElementById('centralHeroBlock').classList.add('hidden');
  document.getElementById('centralQuizCard').classList.add('hidden');
  const dossier = document.getElementById('centralDossierCard');
  dossier.classList.remove('hidden');

  document.getElementById('dossierIso').textContent = key.toUpperCase();
  document.getElementById('dossierTitle').textContent = data.name;
  document.getElementById('dossierCapital').textContent = `Capital: ${data.capital}`;
  document.getElementById('dossierPop').textContent = data.pop;
  document.getElementById('dossierCurrency').textContent = data.currency;
  document.getElementById('dossierAnimal').textContent = data.animal;
  document.getElementById('dossierJoined').textContent = data.joined;
  document.getElementById('dossierFact').textContent = data.fact;
  document.getElementById('dossierAnthem').textContent = `🎵 ${data.anthem}`;

  playCountryAudio(key);
}

function resetToCenter() {
  playRetroClick();
  document.getElementById('centralDossierCard').classList.add('hidden');
  document.getElementById('centralQuizCard').classList.add('hidden');
  document.getElementById('centralHeroBlock').classList.remove('hidden');
  document.querySelectorAll('.pole-unit').forEach(el => el.classList.remove('pole-active'));
}

function updateUI() {
  const data = ASEAN_11[currentKey];
  if (!data) return;

  document.getElementById('mediaPlayerFlag').src = `https://flagcdn.com/${currentKey}.svg`;
  document.getElementById('mediaPlayerCountry').textContent = `[${currentKey.toUpperCase()}] ${data.name.toUpperCase()}`;
  document.getElementById('mediaPlayerTitle').textContent = `${data.anthem} (Traditional Music)`;

  const playIcon = document.getElementById('playIcon');
  const playLabel = document.getElementById('playLabel');
  const btn = document.getElementById('masterPlayBtn');
  const dossierBtn = document.getElementById('dossierPlayBtn');

  if (isPlaying) {
    playIcon.textContent = '⏸';
    playLabel.textContent = 'PAUSE';
    btn.classList.add('from-amber-400', 'to-yellow-500');
    btn.classList.remove('from-lime-400', 'to-green-600');
    if (dossierBtn) dossierBtn.innerHTML = `<span>⏸</span> <span>Pause</span>`;
  } else {
    playIcon.textContent = '▶';
    playLabel.textContent = 'PLAY';
    btn.classList.remove('from-amber-400', 'to-yellow-500');
    btn.classList.add('from-lime-400', 'to-green-600');
    if (dossierBtn) dossierBtn.innerHTML = `<span>▶</span> <span>Play Music</span>`;
  }
}

function highlightSearchedNation(val) {
  const clean = val.toLowerCase().trim();
  if (!clean) return;

  const foundKey = COUNTRY_KEYS.find(k => {
    const d = ASEAN_11[k];
    return d.name.toLowerCase().includes(clean) || d.capital.toLowerCase().includes(clean) || k.toLowerCase() === clean;
  });

  if (foundKey) {
    selectCountry(foundKey);
  }
}

function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
  t.classList.add('opacity-100', 'translate-y-0');
  setTimeout(() => {
    t.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
    t.classList.remove('opacity-100', 'translate-y-0');
  }, 2500);
}