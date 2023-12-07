let timer;
  let timeLeft = 600;

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  function updateTimer() {
    document.getElementById('timer').innerText = formatTime(timeLeft);
  }

  function startTimer() {
    if (!timer) {
      timer = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateTimer();
        } else {
          clearInterval(timer);
          timer = null;
          alert("Timer is up!");
        }
      }, 1000);
    }
  }

  function pauseTimer() {
    clearInterval(timer);
    timer = null;
  }

  function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 600;
    updateTimer();
  }

  function changeTimer() {
    const inputTime = document.getElementById('newTime').value;
    const timeArray = inputTime.split(':');
    
    if (timeArray.length === 2) {
      const minutes = parseInt(timeArray[0], 10);
      const seconds = parseInt(timeArray[1], 10);

      if (!isNaN(minutes) && !isNaN(seconds) && minutes >= 0 && seconds >= 0) {
        timeLeft = minutes * 60 + seconds;
        updateTimer();
      } else {
        alert("Please enter valid minutes and seconds.");
      }
    } else {
      alert("Please enter the time in the format mm:ss.");
    }
  }

  updateTimer();
// let timer;
// let timeLeft = 300; 

// function formatTime(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
//   }

// function updateTimer() {
//   document.getElementById('timer').innerText = formatTime(timeLeft);
//   }

// function startTimer() {
//   if (!timer) {
//     timer = setInterval(() => {
//   if (timeLeft > 0) {
//     timeLeft--;
//     updateTimer();
//     } 
//     else {
//       clearInterval(timer);
//       timer = null;
//       alert("Timer is up!");
//       }
//       }, 1000);
//       }
//       }

// function pauseTimer() {
//   clearInterval(timer);
//   timer = null;
//   }

// function resetTimer() {
//   clearInterval(timer);
//   timer = null;
//   timeLeft = 300;
//   updateTimer();
//   }

// updateTimer();