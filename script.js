var audio = document.getElementById("song");
var playPauseLogo = document.getElementById("playPauseLogo");

playPauseLogo.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playPauseLogo.src = "css/img/pause.png";
  } else {
    audio.pause();
    playPauseLogo.src = "css/img/play.png";
  }
});

function openLightbox(media) {
    var lightbox = document.querySelector('.lightbox');
    var lightboxContent = lightbox.querySelector('img, video');
    if (media.tagName === 'VIDEO') {
        lightboxContent.src = media.querySelector('source').src;
    } else {
        lightboxContent.src = media.src;
    }
    lightbox.style.display = 'block';
}

function closeLightbox() {
    var lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
}

function changeBackgroundColor(title) {
    var body = document.querySelector('body');
    var backgroundColors = {
        'Image 1': '#ff9999',
        'Image 2': '#99ff99',
        'Image 3': '#9999ff',
        'Image 4': '#ffff99',
        'Video 1': '#ffcc00',
        'Video 2': '#ff6600', 
    };
    body.style.backgroundColor = backgroundColors[title];
}

function resetBackgroundColor() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#171616';
}