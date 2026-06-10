// =========================
// ELEMENTS
// =========================

const result = document.getElementById("result");

let completed = 0;

// =========================
// THEME
// =========================

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");

    document.getElementById("themeBtn").innerHTML = "☀️ Light Mode";
  }
};

function toggleTheme() {
  document.body.classList.toggle("dark");

  const themeBtn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");

    themeBtn.innerHTML = "☀️ Light Mode";

    showToast("Dark Mode Enabled 🌙");
  } else {
    localStorage.setItem("theme", "light");

    themeBtn.innerHTML = "🌙 Dark Mode";

    showToast("Light Mode Enabled ☀️");
  }
}

// =========================
// TOAST
// =========================

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.innerText = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// =========================
// PROGRESS BAR
// =========================

function updateProgress() {
  if (completed < 7) {
    completed++;

    document.getElementById("counter").innerText = completed;

    const percentage = (completed / 7) * 100;

    document.getElementById("fill").style.width = percentage + "%";
  }
}

// =========================
// RESULT WITH TYPING EFFECT
// =========================

function showResult(content) {
  result.innerHTML = "";

  let index = 0;

  const text = content.replace(/<[^>]*>/g, "");

  const typing = setInterval(() => {
    result.innerHTML += text[index];

    index++;

    if (index >= text.length) {
      clearInterval(typing);
    }
  }, 15);
}

// =========================
// COPY RESULT
// =========================

function copyResult() {
  navigator.clipboard.writeText(result.innerText);

  showToast("Result Copied Successfully 📋");
}

// =========================
// CLEAR RESULT
// =========================

function clearResult() {
  result.innerHTML = "Results Cleared.";

  showToast("Result Cleared 🗑");
}

// =========================
// MODAL
// =========================

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// =========================
// QUESTION 1
// =========================

function showQ1() {
  let emptyArray = [[], [], []];

  showResult(
    `Empty Multidimensional Array:

${JSON.stringify(emptyArray)}`,
  );

  updateProgress();

  showToast("Question 1 Executed ✅");
}

// =========================
// QUESTION 2
// =========================

function showQ2() {
  const matrix = [
    [0, 1, 2, 3],

    [1, 0, 1, 2],

    [2, 1, 0, 1],
  ];

  let output = "Matrix:\n\n";

  matrix.forEach((row) => {
    output += row.join(" ") + "\n";
  });

  showResult(output);

  updateProgress();

  showToast("Question 2 Executed ✅");
}

// =========================
// QUESTION 3
// =========================

function showQ3() {
  let output = "Counting:\n\n";

  for (let i = 1; i <= 10; i++) {
    output += i + " ";
  }

  showResult(output);

  updateProgress();

  showToast("Question 3 Executed ✅");
}

// =========================
// QUESTION 4
// =========================

function generateTable() {
  const number = Number(document.getElementById("number").value);

  const length = Number(document.getElementById("length").value);

  if (!number || !length) {
    showToast("Please Fill Both Inputs ⚠️");

    return;
  }

  let output = `Table of ${number}\n\n`;

  for (let i = 1; i <= length; i++) {
    output += `${number} x ${i} = ${number * i}\n`;
  }

  showResult(output);

  closeModal();

  updateProgress();

  showToast("Table Generated 🔥");
}

// =========================
// QUESTION 5
// =========================

function showQ5() {
  let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

  let output = "Fruits List:\n\n";

  for (let i = 0; i < fruits.length; i++) {
    output += `Element at index ${i} is ${fruits[i]}\n`;
  }

  showResult(output);

  updateProgress();

  showToast("Question 5 Executed ✅");
}

// =========================
// QUESTION 9
// =========================

function showQ9() {
  const arr = [24, 53, 78, 91, 12];

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  showResult(`Smallest Number:\n\n${smallest}`);

  updateProgress();

  showToast("Question 9 Executed ✅");
}

// =========================
// QUESTION 10
// =========================

function showQ10() {
  let output = "Multiples of 5:\n\n";

  for (let i = 5; i <= 100; i += 5) {
    output += i + ", ";
  }

  showResult(output);

  updateProgress();

  showToast("Question 10 Executed ✅");
}

// =========================
// CLOSE MODAL ON OUTSIDE CLICK
// =========================

window.onclick = function (event) {
  const modal = document.getElementById("modal");

  if (event.target === modal) {
    closeModal();
  }
};
