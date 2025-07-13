// surprise.html → prompt for code and reveal content
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('unlock-btn');
  const secret = document.getElementById('secret-itinerary');
  btn.addEventListener('click', () => {
    const code = prompt('Enter our code:');
    if (code === '090724') {
      secret.style.display = 'block';
      btn.style.display = 'none';
    } else {
      alert('Hmm, that doesn’t look right. Try again!');
    }
  });
});
