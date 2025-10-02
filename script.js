// Música de Fundo
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
  if (isPlaying) {
    backgroundMusic.pause();
    musicToggle.classList.remove('playing');
    musicToggle.querySelector('.music-text').textContent = 'Tocar Música';
  } else {
    backgroundMusic.play();
    musicToggle.classList.add('playing');
    musicToggle.querySelector('.music-text').textContent = 'Pausar Música';
  }
  isPlaying = !isPlaying;
});

// Desafio Secreto
const challenges = [
  "Mande uma foto sua com a minha blusa 👕🔥",
  "Grave um vídeo dizendo o que mais sente falta de mim 👂❤️",
  "Poste um story só com uma palavra misteriosa que só eu vou entender 👀✨",
  "Me mande uma foto do que você está vestindo agora... sem mostrar o rosto 🔥",
  "Grave um vídeo de 5 segundos fazendo um biquinho para mim 😘",
  "Me conte em áudio qual foi o momento mais quente que tivemos juntos 🔥💭",
  "Tire uma foto da parte do seu corpo que você acha mais bonita 📸✨",
  "Qual parte do meu corpo você mais gosta em mim?✨",
  "Poste uma foto sua de vermelho ou preto (você escolhe) 🔥👗"
];

const challengeBtn = document.getElementById('challengeBtn');
const challengeResult = document.getElementById('challengeResult');

challengeBtn.addEventListener('click', () => {
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  challengeResult.textContent = randomChallenge;
  challengeResult.classList.add('show');
  
  // Scroll suave até o resultado
  setTimeout(() => {
    challengeResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
});

// Roleta Picante
const rouletteOptions = [
  { text: "Fazer um biquinho", icon: "😘" },
  { text: "Mandar um olhar sexy", icon: "😏" },
  { text: "Momento mais marcante (ou mais quente) nosso?", icon: "💭💋" },
  { text: "Dançar uma música", icon: "💃🔥" },
  { text: "Me contar um desejo", icon: "✨🔥" },
  { text: "Mandar uma foto diferente", icon: "📸🔥" },
  { text: "Primeira coisa que vem na sua cabeça ao me olhar", icon: "💭" },
  { text: "Me dizer onde você mais gosta que eu beije", icon: "💋" }
];

const rouletteBtn = document.getElementById('rouletteBtn');
const rouletteResult = document.getElementById('rouletteResult');
const rouletteCanvas = document.getElementById('rouletteCanvas');
const ctx = rouletteCanvas.getContext('2d');

let currentRotation = 0;

function drawRoulette() {
  const centerX = rouletteCanvas.width / 2;
  const centerY = rouletteCanvas.height / 2;
  const radius = rouletteCanvas.width / 2 - 10;
  const sliceAngle = (2 * Math.PI) / rouletteOptions.length;

  rouletteOptions.forEach((option, index) => {
    const startAngle = index * sliceAngle;
    const endAngle = startAngle + sliceAngle;

    // Desenhar fatia
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    
    // Cores alternadas
    ctx.fillStyle = index % 2 === 0 ? '#fda4af' : '#fecdd3';
    ctx.fill();
    ctx.strokeStyle = '#e11d48';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Adicionar texto
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(startAngle + sliceAngle / 2);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#262626';
    ctx.font = 'bold 14px Quicksand';
    
    // Ícone
    ctx.fillText(option.icon, radius / 2, -10);
    
    ctx.restore();
  });
}

drawRoulette();

rouletteBtn.addEventListener('click', () => {
  rouletteBtn.disabled = true;
  rouletteResult.classList.remove('show');
  
  const randomSpins = 5 + Math.random() * 3;
  const randomIndex = Math.floor(Math.random() * rouletteOptions.length);
  const sliceAngle = 360 / rouletteOptions.length;
  const targetRotation = (randomSpins * 360) + (randomIndex * sliceAngle);
  
  currentRotation += targetRotation;
  rouletteCanvas.style.transform = `rotate(${currentRotation}deg)`;
  
  setTimeout(() => {
    const selectedOption = rouletteOptions[randomIndex];
    rouletteResult.innerHTML = `<strong>${selectedOption.icon}</strong><br>${selectedOption.text}`;
    rouletteResult.classList.add('show');
    rouletteBtn.disabled = false;
    
    setTimeout(() => {
      rouletteResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }, 4000);
});

// Quiz Apimentado
const quizQuestions = [
  {
    question: "O que você faria primeiro comigo?",
    options: ["Beijo apaixonado 💋", "Abraço apertado 🤗", "Pular nos meus braços 😏", "Beijinhos no pescoço 💋"],
    answer: "Hmmm... essa resposta me deixou com vontade de te ver agora mesmo... 🔥"
  },
  {
    question: "Qual parte do meu corpo você mais gosta?",
    options: ["Olhos 👀", "Boca 👄", "Mãos ✋", "Todo ele 😏"],
    answer: "Você acabou de me deixar ainda mais curioso... 🔥❤️"
  },
  {
    question: "Se tivesse apenas 5 minutos comigo agora... o que faria?",
    options: ["Te beijar sem parar 💋", "Te abraçar forte ❤️", "Pular no seu colo 🔥", "Deixar você adivinhar 😏"],
    answer: "Mal posso esperar para transformar essa resposta em realidade... 🔥💭"
  },
  {
    question: "Onde você mais gosta de ser tocada?",
    options: ["Pescoço 💋", "Cintura 🔥", "Costas ✨", "Em todo lugar 😏"],
    answer: "Anotado... vou lembrar disso no nosso próximo encontro 🔥👀"
  },
  {
    question: "Qual é sua fantasia secreta comigo?",
    options: ["Um encontro à noite 🌙", "Um passeio a tarde 🏖️", "Um momento intenso 🔥", "Surpresa 😏"],
    answer: "Essa resposta está gravada na minha mente... e no meu coração 🔥❤️"
  }
];

let currentQuizIndex = 0;

function loadQuiz() {
  if (currentQuizIndex < quizQuestions.length) {
    const quiz = quizQuestions[currentQuizIndex];
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.getElementById('quizOptions');
    const quizAnswer = document.getElementById('quizAnswer');
    
    quizQuestion.textContent = quiz.question;
    quizOptions.innerHTML = '';
    quizAnswer.classList.remove('show');
    
    quiz.options.forEach((option) => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'quiz-option';
      optionDiv.textContent = option;
      optionDiv.addEventListener('click', () => {
        quizAnswer.textContent = quiz.answer;
        quizAnswer.classList.add('show');
        
        setTimeout(() => {
          currentQuizIndex++;
          if (currentQuizIndex < quizQuestions.length) {
            setTimeout(() => loadQuiz(), 2000);
          } else {
            setTimeout(() => {
              quizAnswer.innerHTML = "Você completou o quiz! Agora eu sei ainda mais sobre seus desejos... 🔥❤️<br><br><em>Reiniciando em 3 segundos...</em>";
              setTimeout(() => {
                currentQuizIndex = 0;
                loadQuiz();
              }, 3000);
            }, 2000);
          }
        }, 100);
        
        setTimeout(() => {
          quizAnswer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
      });
      quizOptions.appendChild(optionDiv);
    });
  }
}

loadQuiz();

// Fotos e Recompensas
const photoChallenges = [
  { text: "Foto com algo vermelho 🔴🔥", icon: "📸" },
  { text: "Foto com algo preto (roupa, acessório...) ⚫✨", icon: "📸" },
  { text: "Foto mostrando só uma parte (ombro, pescoço, etc) 🔥", icon: "📸" },
  { text: "Foto na sua melhor posição 💋", icon: "📸" },
  { text: "Foto com a luz baixa, clima de mistério 🌙", icon: "📸" }
];

const photoChallengesContainer = document.getElementById('photoChallenges');

photoChallenges.forEach(challenge => {
  const div = document.createElement('div');
  div.className = 'photo-challenge-item';
  div.innerHTML = `
    <span class="photo-challenge-text">${challenge.text}</span>
    <span class="photo-challenge-icon">${challenge.icon}</span>
  `;
  photoChallengesContainer.appendChild(div);
});

// Mensagem Codificada
const unlockBtn = document.getElementById('unlockBtn');
const codedMessage = document.getElementById('codedMessage');
const unlockChallenge = document.getElementById('unlockChallenge');

let unlocked = false;

unlockBtn.addEventListener('click', () => {
  if (!unlocked) {
    unlockChallenge.innerHTML = `
      <p><strong>Complete o desafio para desbloquear:</strong></p>
      <p>Me mande uma mensagem dizendo "Estou com saudade" ❤️</p>
      <p style="margin-top: 20px; font-size: 0.95rem; opacity: 0.8;">Depois, digite a palavra secreta: <strong>EU TE AMO</strong></p>
      <input type="text" class="unlock-input" id="unlockInput" placeholder="Digite a palavra secreta...">
      <button class="unlock-submit" id="unlockSubmit">Desbloquear</button>
    `;
    unlockChallenge.classList.add('show');
    
    document.getElementById('unlockSubmit').addEventListener('click', () => {
      const input = document.getElementById('unlockInput').value.toUpperCase();
      if (input === 'EU TE AMO') {
        codedMessage.classList.remove('blurred');
        unlockChallenge.innerHTML = '<p style="color: #e11d48; font-weight: 600;">✓ Mensagem desbloqueada com sucesso! 🔥❤️</p>';
        unlocked = true;
        unlockBtn.style.display = 'none';
        
        setTimeout(() => {
          codedMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      } else {
        alert('Palavra incorreta! Tente novamente 😏');
      }
    });
  }
});

// Mapa do Corpo
const bodyParts = document.querySelectorAll('.body-part');
const bodyMapMessage = document.getElementById('bodyMapMessage');

const bodyMessages = {
  face: "Seu rosto é a primeira coisa que penso quando acordo... e a última antes de dormir 😍",
  lips: "Eu sou louco pela sua boca, seu beijo me desmonta por inteiro 💋🔥",
  neck: "Não vejo a hora de te beijar inteira... principalmente aqui 😏",
  shoulders: "Seus ombros foram feitos para minhas mãos descansarem... e explorarem 🔥",
  arms: "Seus braços me fazem sentir em casa, seguro e desejado ❤️",
  hands: "Eu fico maluco quando voce me toca... independente de lugar 🔥",
  torso: "Cada curva sua me deixa louco... não consigo parar de pensar 🔥",
  waist: "Sua cintura é perfeita, eu fico bobinho toda vez que pego. 😏❤️",
  hips: "Nunca vi nada mais lindo do que aqui... nao preciso nem comentar muito 🔥🔥",
  legs: "Eu sou apaixonado nas suas pernas... teria elas so para mim 👀",
  feet: "Até seus pés são perfeitos... porque fazem parte de você ✨"
};

bodyMapMessage.textContent = "Clique em qualquer parte para descobrir o que penso sobre você... 👀🔥";

bodyParts.forEach(part => {
  part.addEventListener('click', () => {
    const partName = part.getAttribute('data-part');
    bodyMapMessage.textContent = bodyMessages[partName];
    
    // Animação de pulso
    part.style.transform = 'scale(1.1)';
    setTimeout(() => {
      part.style.transform = '';
    }, 300);
  });
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
// Playlist Interativa
const playlistItems = document.querySelectorAll('.playlist-item');
let currentlyPlaying = null;

playlistItems.forEach(item => {
  const playIcon = item.querySelector('.play-icon');
  const audio = item.querySelector('.song-audio');
  
  item.addEventListener('click', (e) => {
    // Prevenir que clique no link do Spotify dispare a música
    if (e.target.tagName === 'A') return;
    
    // Se houver outra música tocando, pausar ela
    if (currentlyPlaying && currentlyPlaying !== audio) {
      currentlyPlaying.pause();
      currentlyPlaying.currentTime = 0;
      const otherIcon = currentlyPlaying.parentElement.querySelector('.play-icon');
      otherIcon.textContent = '▶️';
      currentlyPlaying.parentElement.classList.remove('playing');
    }
    
    // Tocar ou pausar a música clicada
    if (audio.paused) {
      audio.play();
      playIcon.textContent = '⏸️';
      item.classList.add('playing');
      currentlyPlaying = audio;
    } else {
      audio.pause();
      playIcon.textContent = '▶️';
      item.classList.remove('playing');
      currentlyPlaying = null;
    }
  });
  
  // Quando a música terminar
  audio.addEventListener('ended', () => {
    playIcon.textContent = '▶️';
    item.classList.remove('playing');
    currentlyPlaying = null;
  });
});
