//Code Credit: Mindy McAdams
let toolAudio = 
  document.querySelectorAll('.toolAudio');
let albumCover = document.querySelectorAll('.albumCover');
let toolText = document.querySelectorAll('.toolText');

  function hideAll() {
    toolAudio.forEach(function(el) {
      el.style.display = 'none';
    });
  }

  hideAll();

  function hideAllText() {
    toolText.forEach(function(el) {
      el.style.display = 'none';
    });
  }

  hideAllText();
  
  albumCover.forEach(function(el) {
    el.onclick = (e) => {
        hideAll();
        hideAllText(); 

  switch (e.target.getAttribute('id')) {
      case 'lateralusAlbum':
        document.querySelector('#lateralus').style.display = 'block';
        document.querySelector('#latText').style.display = 'block';
        break;
      case 'opiateEp':
        document.querySelector('#opiate').style.display = 'block';
        document.querySelector('#opText').style.display = 'block';
        break;
      case '10000daysAlbum':
        document.querySelector('#rightInTwo').style.display = 'block';
        document.querySelector('#rightText').style.display = 'block';
        break;
      case 'aenimaAlbum':
        document.querySelector('#pushit').style.display = 'block';
        document.querySelector('#pushText').style.display = 'block';
        break;
  }
  let players = document.querySelectorAll('.toolAudio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
}
})

