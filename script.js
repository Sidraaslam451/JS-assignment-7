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
  const now = new Date().toLocaleString();

  result.innerHTML = `
    <div class="output-box">
      <h3>📋 Assignment Report</h3>
      <p><strong>Generated:</strong> ${now}</p>
      <hr>
      <pre>${content}</pre>
    </div>
  `;
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

  let output = `
QUESTION:
Declare and initialize an empty multidimensional array.

LOGIC:
Create an array containing three empty arrays.

OUTPUT:

${JSON.stringify(emptyArray)}
`;

  showResult(output);

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

  let output = `
QUESTION:
Declare and initialize a multidimensional array representing a matrix.

LOGIC:
Store rows inside nested arrays and display them using a loop.

OUTPUT:

`;

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
  let output = `
QUESTION:
Print numeric counting from 1 to 10.

LOGIC:
Use a for loop starting from 1 and ending at 10.

OUTPUT:

`;

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

  let output = `
QUESTION:
Generate multiplication table of any number.

LOGIC:
Take number and length from user and use a loop.

OUTPUT:

Multiplication Table of ${number}

`;

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

  let output = `
QUESTION:
Print all items of an array using a for loop.

LOGIC:
Loop through each fruit and display its index and value.

OUTPUT:

`;

  for (let i = 0; i < fruits.length; i++) {
    output += `Element at index ${i} is ${fruits[i]}\n`;
  }

  showResult(output);

  updateProgress();

  showToast("Question 5 Executed ✅");
} // =========================
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

  let output = `
QUESTION:
Find the smallest number in the given array.

LOGIC:
Compare each element with the current smallest value.

OUTPUT:

Array: ${arr.join(", ")}

Smallest Number: ${smallest}
`;

  showResult(output);

  updateProgress();

  showToast("Question 9 Executed ✅");
}
// =========================
// QUESTION 10
// =========================

function showQ10() {
  let output = `
QUESTION:
Print multiples of 5 ranging from 1 to 100.

LOGIC:
Use a loop and increase by 5 each iteration.

OUTPUT:

`;

  for (let i = 5; i <= 100; i += 5) {
    output += i + " ";
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
