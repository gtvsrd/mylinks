var songs = [
  "Snoh Aalegra - I Want You Around.mp3",
  "Foster The People - Static Space Lover.mp3",
  "Drake - Fire & Desire.mp3",
] // Substitua pelos nomes dos seus arquivos MP3
var currentIndex = Math.floor(Math.random() * songs.length)
var audioPlayer = document.getElementById("audio-player")
var playPauseButton = document.getElementById("play-pause")
var playPauseIcon = document.getElementById("play-pause-icon")
var songNameElement = document.getElementById("song-name")
var songNameDuplicate = document.getElementById("song-name-duplicate")
var songNameWrapper = document.getElementById("song-name-wrapper")

function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  html.classList.toggle("light")
}

// Função para carregar e preparar uma música específica
function loadAndPlaySong(index) {
  currentIndex = index
  var songName = songs[currentIndex].replace(".mp3", "")
  songNameElement.innerHTML = songName
  songNameDuplicate.innerHTML = songName

  // Calcula a largura do texto original e o espaço total a ser movido
  const textWidth = songNameElement.scrollWidth // Largura do texto original
  const containerWidth = 300 // Largura do contêiner visível (e espaço após o original)
  const totalDistance = textWidth + containerWidth // Texto + espaço único

  // Define a velocidade (pixels por segundo) e calcula a duração
  const speed = 50 // 50px por segundo, ajuste conforme desejado
  const duration = totalDistance / speed // Tempo para o texto sumir e o duplicado entrar

  // Aplica a animação com a duração calculada
  songNameWrapper.style.animation = `slide-left ${duration}s linear infinite`

  audioPlayer.src = "music/" + songs[currentIndex]
}

// Listener global para iniciar a reprodução quando o arquivo estiver pronto
audioPlayer.addEventListener("canplay", function () {
  audioPlayer.play()
  playPauseIcon.className = "play"
})

// Listener para quando uma música termina
audioPlayer.addEventListener("ended", function () {
  currentIndex = (currentIndex + 1) % songs.length
  loadAndPlaySong(currentIndex)
})

// Handler para o botão play/pause
playPauseButton.addEventListener("click", function () {
  if (audioPlayer.paused) {
    audioPlayer.play()
    playPauseIcon.className = "pause"
  } else {
    audioPlayer.pause()
    playPauseIcon.className = "play"
  }
})

// Carrega uma música aleatória inicialmente
loadAndPlaySong(currentIndex);
