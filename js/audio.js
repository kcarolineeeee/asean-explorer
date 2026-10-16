let currentKey = "id";
let isPlaying = false;
let sfxEnabled = true;
let volumeLevel = 0.75;
let isMuted = false;
let audioCtx = null;
let masterGain = null;

const audioEl = document.getElementById('anthemAudio');

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(volumeLevel, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playRetroClick() {
  if (!sfxEnabled) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(700, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch (e) {}
}

function playCountryAudio(key) {
  getAudioContext();
  currentKey = key;
  const data = ASEAN_11[key];
  if (!data) return;

  audioEl.pause();
  audioEl.src = data.audioUrl;
  audioEl.volume = isMuted ? 0 : volumeLevel;
  document.getElementById('audioSourceBadge').textContent = "TRADITIONAL RECORDING";
  document.getElementById('mediaTimer').textContent = "00:00";

  const playPromise = audioEl.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      isPlaying = true;
      updateUI();
    }).catch(() => {
      handleAudioUnavailable();
    });
  }
}

// No fake synth melody: if the recording can't load, say so instead.
function handleAudioUnavailable() {
  isPlaying = false;
  document.getElementById('audioSourceBadge').textContent = "AUDIO FILE NOT FOUND";
  showToast(`No recording found: ${ASEAN_11[currentKey].audioUrl}`);
  updateUI();
}

audioEl.addEventListener('ended', () => {
  isPlaying = false;
  updateUI();
});

audioEl.addEventListener('timeupdate', () => {
  if (isPlaying) {
    const sec = Math.floor(audioEl.currentTime);
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    document.getElementById('mediaTimer').textContent = `${m}:${s}`;
  }
});

audioEl.addEventListener('error', () => {
  if (audioEl.getAttribute('src')) handleAudioUnavailable();
});

function stopPlayback() {
  isPlaying = false;
  audioEl.pause();
  updateUI();
}

function togglePlayPause() {
  playRetroClick();
  if (isPlaying) {
    stopPlayback();
  } else {
    playCountryAudio(currentKey);
  }
}

function changeVolume(v) {
  volumeLevel = parseFloat(v);
  audioEl.volume = isMuted ? 0 : volumeLevel;
  if (masterGain && audioCtx) {
    masterGain.gain.setValueAtTime(isMuted ? 0 : volumeLevel, audioCtx.currentTime);
  }
}

function toggleMute() {
  playRetroClick();
  isMuted = !isMuted;
  document.getElementById('muteBtn').textContent = isMuted ? '🔇' : '🔊';
  audioEl.volume = isMuted ? 0 : volumeLevel;
  if (masterGain && audioCtx) {
    masterGain.gain.setValueAtTime(isMuted ? 0 : volumeLevel, audioCtx.currentTime);
  }
}