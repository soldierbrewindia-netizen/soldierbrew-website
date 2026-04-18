AOS.init({ duration: 1000, once: false });

// ── HAMBURGER MENU ──
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');

function openMobileNav() {
    hamburgerBtn.classList.add('open');
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
    hamburgerBtn.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', openMobileNav);
mobileNavClose.addEventListener('click', closeMobileNav);

// Close when a nav link is clicked
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// Auto-play mission video on scroll into view
const missionVideo = document.getElementById('missionVideo');
if (missionVideo) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { missionVideo.play(); }
            else { missionVideo.pause(); }
        });
    }, { threshold: 0.3 });
    observer.observe(missionVideo);
}

// Brand video sound toggle
const brandVideo = document.getElementById('brandVideo');
let videoSoundOn = false;
function toggleVideoSound() {
    if (!brandVideo) return;
    videoSoundOn = !videoSoundOn;
    brandVideo.muted = !videoSoundOn;
    document.getElementById('videoSoundIcon').className = videoSoundOn ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    document.getElementById('videoSoundLabel').textContent = videoSoundOn ? 'Mute' : 'Unmute';
}

// Music toggle (background audio)
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;
function toggleMusic() {
    if (!bgMusic) return;
    if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
    } else {
        bgMusic.play().catch(() => {});
        musicPlaying = true;
    }
}

// Notify me
function handleNotify() {
    const input = document.getElementById('notifyEmail');
    if (!input) return;
    const val = input.value.trim();
    if (!val || !val.includes('@')) {
        input.style.borderColor = '#f55';
        setTimeout(() => input.style.borderColor = '', 1000);
        return;
    }
    input.value = '';
    input.placeholder = '✓ You\'re on the list. We\'ll be in touch.';
    input.style.borderColor = 'rgba(138,159,91,0.6)';
}

// Mobile Story Card Overlay
function openCard(index) {
    document.getElementById('mcard' + index).classList.add('open');
}
function closeCard(index) {
    document.getElementById('mcard' + index).classList.remove('open');
}
