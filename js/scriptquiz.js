let currentQuestion = 0;
let score = 0;

// Array com as perguntas e respostas
const questions = [
  {
    country: "Brasil",
    flag: "img/brasil.jpg",
    correctAnswer: 1,
    options: ["Brasil", "França", "Argentina", "Japão"]
  },
  {
    country: "França",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    correctAnswer: 2,
    options: ["Brasil", "França", "Argentina", "Japão"]
  },
  {
    country: "Argentina",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    correctAnswer: 3,
    options: ["Brasil", "França", "Argentina", "Japão"]
  },
  {
    country: "Japão",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
    correctAnswer: 4,
    options: ["Brasil", "França", "Argentina", "Japão"]
  },
  {
    country: "Alemanha",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    correctAnswer: 1,
    options: ["Alemanha", "Itália", "Espanha", "Portugal"]
  },
  {
    country: "Estados Unidos",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    correctAnswer: 2,
    options: ["Brasil", "Estados Unidos", "México", "Canadá"]
  },
  {
    country: "Itália",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
    correctAnswer: 3,
    options: ["Alemanha", "França", "Itália", "Espanha"]
  },
  {
    country: "Reino Unido",
    flag: "img/reinounido.jpg",
    correctAnswer: 1,
    options: ["Reino Unido", "França", "Cuba", "Estados Unidos "]
  },
  {
    country: "Canadá",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    correctAnswer: 2,
    options: ["México", "Canadá", "Brasil", "Espanha"]
  },
  {
    country: "China",
    flag: "img/china.jpg",
    correctAnswer: 3,
    options: ["Japão", "Índia", "China", "Coreia do Sul"]
  },
  {
    country: "México",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    correctAnswer: 2,
    options: ["Brasil", "México", "Espanha", "Portugal"]
  },
  {
    country: "Egito",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
    correctAnswer: 1,
    options: ["Egito", "Arábia Saudita", "Irã", "Turquia"]
  },
  {
    country: "Rússia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
    correctAnswer: 3,
    options: ["Bielorrússia", "Ucrânia", "Rússia", "Cazaquistão"]
  },
  {
    country: "Austrália",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
    correctAnswer: 2,
    options: ["Nova Zelândia", "Austrália", "Índia", "Fiji"]
  },
  {
    country: "Escocia",
    flag: "img/escocia.jpg",
    correctAnswer: 4,
    options: ["Brasil", "Argentina", "Uruguai", "Escócia"]
  }
];

// Função para embaralhar as perguntas aleatoriamente
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
  }
}

// Embaralha as perguntas no início do quiz
shuffleArray(questions);

// Função para verificar a resposta
function checkAnswer(selected) {
  const current = questions[currentQuestion];
  if (selected === current.correctAnswer) {
    document.getElementById("result").innerHTML = "Correto! ✅";
    score++;
  } else {
    document.getElementById("result").innerHTML = "Errado! ❌";
  }

  // Desabilita as opções após a resposta ser dada
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.disabled = true);
}

// Função para ir para a próxima pergunta
function nextQuestion() {
  currentQuestion++;

  // Se houver mais perguntas, carregue a próxima
  if (currentQuestion < questions.length) {
    loadQuestion(currentQuestion);
    document.getElementById("result").innerHTML = "";
    resetOptions();
  } else {
    document.querySelector('.question').innerText = "Fim do Quiz! Sua pontuação: " + score + " de " + questions.length + ".";
    document.getElementById("flag-container").style.display = 'none'; // Esconde a bandeira no final
    document.querySelector('.next-btn').style.display = 'none'; // Esconde o botão "Próxima Pergunta" no final
  }
}

// Função para carregar a pergunta
function loadQuestion(index) {
  const question = questions[index];
  document.querySelector('.question').innerText = `Qual país é essa bandeira?`;
  document.getElementById("flag-container").innerHTML = `<img src="${question.flag}" alt="Bandeira" class="flag" />`;

  const options = document.querySelectorAll('.option');
  options[0].innerText = question.options[0];
  options[1].innerText = question.options[1];
  options[2].innerText = question.options[2];
  options[3].innerText = question.options[3];
}

// Função para resetar as opções para habilitá-las novamente
function resetOptions() {
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.disabled = false;
  });
}

// Carrega a primeira pergunta ao abrir a página
loadQuestion(currentQuestion);