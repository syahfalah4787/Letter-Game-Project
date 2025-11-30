let wordList = [];
let usedWords = new Set();
let currentWord = "";
let round = 1;
let playerScore = 0;
let computerScore = 0;
let isPlayerTurn = true;
let timer;
let timeLeft = 30;

const currentWordElement = document.getElementById('current-word');
const wordInput = document.getElementById('word-input');
const submitBtn = document.getElementById('submit-btn');
const messageElement = document.getElementById('message');
const historyList = document.getElementById('history-list');
const roundElement = document.getElementById('round');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const timerElement = document.getElementById('timer');

async function loadWordList() {
  try {
    const response = await fetch('wordlist.json');
    if (!response.ok) {
      throw new Error('Network response was not good');
    }
    const data = await response.json();
    wordList = data.words;
    console.log('Wordlist loaded successfully', wordList.length, 'words');
  } catch (error) {
    console.error('Error loading wordlist: ', error);
    wordList = ["apel", "nanas", "semangka", "jeruk", "ayam", "anjing"];
    showMessage("Error loading wordlist. Using fallback list", "error");
  }
}


async function startGame() {
    if (wordList.length === 0) {
      await loadWordList();
    }
  
    const randomIndex = Math.floor(Math.random() * wordList.length);
    currentWord = wordList[randomIndex];
    usedWords.add(currentWord);
    
    currentWordElement.textContent = currentWord;
    addToHistory("Sistem", currentWord);
    updateGameInfo();
    
    showMessage("Permainan dimulai! Giliran Anda. Kata harus dimulai dengan huruf: " + getLastLetter(currentWord), "success");
    
    wordInput.focus();
    
    startTimer();
}

function getLastLetter(word) {
    return word.charAt(word.length - 1).toUpperCase();
}

function validatePlayerWord(word) {
    const lastLetter = getLastLetter(currentWord);
    if (word.charAt(0).toUpperCase() !== lastLetter) {
        return { isValid: false, message: `Kata harus dimulai dengan huruf "${lastLetter}"` };
    }
    
    if (usedWords.has(word.toLowerCase())) {
        return { isValid: false, message: "Kata ini sudah digunakan sebelumnya" };
    }
    
    if (!wordList.includes(word.toLowerCase())) {
        return { isValid: false, message: "Kata tidak valid atau tidak dikenal" };
    }
    
    return { isValid: true, message: "Kata valid!" };
}

function handlePlayerSubmit() {
    const playerWord = wordInput.value.trim().toLowerCase();
    
    if (playerWord === "") {
        showMessage("Masukkan kata terlebih dahulu!", "error");
        return;
    }
    
    const validation = validatePlayerWord(playerWord);
    
    if (validation.isValid) {
        currentWord = playerWord;
        usedWords.add(playerWord);
        playerScore++;
        
        currentWordElement.textContent = currentWord;
        addToHistory("Anda", playerWord);
        updateGameInfo();
        
        showMessage(validation.message, "success");
        
        wordInput.value = "";
        
        isPlayerTurn = false;
        computerTurn();
    } else {
        showMessage(validation.message, "error");
        wordInput.focus();
    }
}

function computerTurn() {
    showMessage("Giliran komputer...", "success");
    
    timerElement.textContent = "-";
    timerElement.classList.remove("timer-warning");
    
    const lastLetter = getLastLetter(currentWord);
    const validWords = wordList.filter(word => 
        word.charAt(0).toUpperCase() === lastLetter && 
        !usedWords.has(word)
    );
    
    setTimeout(() => {
        if (validWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * validWords.length);
            const computerWord = validWords[randomIndex];
            
            currentWord = computerWord;
            usedWords.add(computerWord);
            computerScore++;
            
            currentWordElement.textContent = currentWord;
            addToHistory("Komputer", computerWord);
            updateGameInfo();
            
            showMessage(`Komputer memilih: ${computerWord}. Giliran Anda! Kata harus dimulai dengan huruf: ${getLastLetter(computerWord)}`, "success");
            
            isPlayerTurn = true;
            wordInput.focus();
            startTimer();
        } else {
            showMessage("Komputer tidak bisa menemukan kata yang valid. Anda menang!", "success");
            endGame("player");
        }
    }, 2000);
}

function addToHistory(player, word) {
    const historyItem = document.createElement('li');
    historyItem.className = 'history-item';
    
    const playerLabel = document.createElement('span');
    playerLabel.className = `player-label ${player === 'Anda' ? 'player-you' : 'player-computer'}`;
    playerLabel.textContent = player + ":";
    
    const wordSpan = document.createElement('span');
    wordSpan.textContent = word;
    
    historyItem.appendChild(playerLabel);
    historyItem.appendChild(wordSpan);
    historyList.appendChild(historyItem);
    
    historyList.scrollTop = historyList.scrollHeight;
}

function showMessage(text, type) {
    messageElement.textContent = text;
    messageElement.className = `message ${type}`;
}

function updateGameInfo() {
    roundElement.textContent = round;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            showMessage("Waktu habis! Giliran komputer.", "error");
            isPlayerTurn = false;
            computerTurn();
        }
    }, 1000);
}

function updateTimerDisplay() {
  timerElement.textContent = timeLeft;
  
  if(timeLeft <= 10) {
    timerElement.classList.add('timer-warning');
  } else {
    timerElement.classList.remove('timer-warning');
  }
}

function endGame(winner) {
    clearInterval(timer);
    
    timerElement.textContent = "SELESAI";
    timerElement.classList.remove("timer-warning");
    
    if (winner === "player") {
        showMessage("Selamat! Anda menang!", "success");
    } else {
        showMessage("Komputer menang! Coba lagi.", "error");
    }
    
    wordInput.disabled = true;
    submitBtn.disabled = true;
    
    setTimeout(() => {
        const restartBtn = document.createElement('button');
        restartBtn.textContent = "Main Lagi";
        restartBtn.style.marginTop = "20px";
        restartBtn.onclick = restartGame;
        document.querySelector('.game-area').appendChild(restartBtn);
    }, 3000);
}

function restartGame() {
    usedWords.clear();
    currentWord = "";
    round = 1;
    playerScore = 0;
    computerScore = 0;
    isPlayerTurn = true;
    
    currentWordElement.textContent = "Kata pertama akan dipilih secara acak";
    historyList.innerHTML = "";
    messageElement.textContent = "Permainan akan segera dimulai!";
    messageElement.className = "message";
    updateGameInfo();
    
    timeLeft = 30;
    updateTimerDisplay();
    timerElement.classList.remove('timer-warning');
    
    const restartBtn = document.querySelector('button[onclick="restartGame"]');
    if (restartBtn) {
        restartBtn.remove();
    }
    
    wordInput.disabled = false;
    submitBtn.disabled = false;
    
    startGame();
}

submitBtn.addEventListener('click', handlePlayerSubmit);

wordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handlePlayerSubmit();
    }
});

window.onload = startGame;