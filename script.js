let questionsPerPage = 5;
let currentPage = 0;
let shuffledQuestions = shuffleQuestions();
let userAnswers = [];

function renderPage(page) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  const start = page * questionsPerPage;
  const end = Math.min(start + questionsPerPage, shuffledQuestions.length);

  for (let i = start; i < end; i++) {
    const q = shuffledQuestions[i];
    const div = document.createElement("div");
    div.className = "question";

    const questionText = document.createElement("p");
    questionText.textContent = `${i + 1}. ${q.question}`;
    div.appendChild(questionText);

    // Tipo de pregunta
    const typeInfo = document.createElement("small");
    typeInfo.style.display = "block";
    typeInfo.style.fontStyle = "italic";
    typeInfo.style.color = "#555";
    if (q.type === "single") {
      typeInfo.textContent = "Tipo: Selección única";
    } else if (q.type === "multiple") {
      typeInfo.textContent = "Tipo: Selección múltiple";
    } else if (q.type === "text") {
      typeInfo.textContent = "Tipo: Respuesta escrita";
    }
    div.appendChild(typeInfo);

    const optionsList = document.createElement("ul");
    optionsList.className = "option-list";

    if (q.type === "single" || q.type === "multiple") {
      q.options.forEach((opt, idx) => {
        const li = document.createElement("li");
        const label = document.createElement("label");
        const input = document.createElement("input");

        input.type = q.type === "single" ? "radio" : "checkbox";
        input.name = `q${i}`;
        input.value = idx;

        // Restaurar selección previa
        if (userAnswers[i] !== undefined) {
          if (q.type === "single" && userAnswers[i] === idx) input.checked = true;
          if (q.type === "multiple" && Array.isArray(userAnswers[i]) && userAnswers[i].includes(idx)) input.checked = true;
        }

        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        li.appendChild(label);
        optionsList.appendChild(li);
      });
      div.appendChild(optionsList);
    } else if (q.type === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.name = `q${i}`;
      if (userAnswers[i] !== undefined) input.value = userAnswers[i];
      div.appendChild(input);
    }

    const button = document.createElement("button");
    button.textContent = "Validar";
    button.onclick = () => validateAnswer(i);
    div.appendChild(button);

    const feedback = document.createElement("div");
    feedback.id = `feedback${i}`;
    if (userAnswers[i] !== undefined) validateAnswer(i); // Mostrar validación si ya respondió
    div.appendChild(feedback);

    container.appendChild(div);
  }

  document.getElementById("prev-button").disabled = page === 0;
  document.getElementById("next-button").disabled = end >= shuffledQuestions.length;
}
function validateAnswer(index) {
  const q = shuffledQuestions[index];
  let userInput;
  if (q.type === "single") {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    userInput = selected ? parseInt(selected.value) : null;
    userAnswers[index] = userInput;
    if (userInput === q.answer) {
      document.getElementById(`feedback${index}`).textContent = "✔ Correcto";
    } else {
      document.getElementById(`feedback${index}`).textContent = `✘ Incorrecto. Respuesta correcta: ${q.options[q.answer]}`;
    }
  } else if (q.type === "text") {
    const input = document.querySelector(`input[name="q${index}"]`);
    userInput = input.value.trim().toLowerCase();
    userAnswers[index] = userInput;
    if (userInput === q.answer.toLowerCase()) {
      document.getElementById(`feedback${index}`).textContent = "✔ Correcto";
    } else {
      document.getElementById(`feedback${index}`).textContent = `✘ Incorrecto. Respuesta correcta: ${q.answer}`;
    }
  } else if (q.type === "multiple") {
    const selected = Array.from(document.querySelectorAll(`input[name="q${index}"]:checked`)).map(e => parseInt(e.value));
    userAnswers[index] = selected;
    const correctSet = new Set(q.answer);
    const selectedSet = new Set(selected);
    const isCorrect = correctSet.size === selectedSet.size && [...correctSet].every(v => selectedSet.has(v));
    if (isCorrect) {
      document.getElementById(`feedback${index}`).textContent = "✔ Correcto";
    } else {
      const correctLabels = q.answer.map(a => q.options[a]).join(", ");
      document.getElementById(`feedback${index}`).textContent = `✘ Incorrecto. Respuesta correcta: ${correctLabels}`;
    }
  }
}

document.getElementById("next-button").onclick = () => {
  currentPage++;
  renderPage(currentPage);
};

document.getElementById("prev-button").onclick = () => {
  currentPage--;
  renderPage(currentPage);
};

document.getElementById("finish-button").onclick = () => {
  let score = 0;
  shuffledQuestions.forEach((q, i) => {
    if (q.type === "single" && userAnswers[i] === q.answer) score++;
    if (q.type === "text" && userAnswers[i] && userAnswers[i].toLowerCase() === q.answer.toLowerCase()) score++;
    if (q.type === "multiple" && userAnswers[i]) {
      const correctSet = new Set(q.answer);
      const selectedSet = new Set(userAnswers[i]);
      const isCorrect = correctSet.size === selectedSet.size && [...correctSet].every(v => selectedSet.has(v));
      if (isCorrect) score++;
    }
  });
  const passed = score >= shuffledQuestions.length * 0.6;
  const result = document.getElementById("result-container");
  result.style.display = "block";
  result.textContent = `Has sacado ${score} de ${shuffledQuestions.length}. ${passed ? "¡Aprobado!" : "No aprobado"}`;
  document.getElementById("restart-button").style.display = "inline-block";
};

document.getElementById("restart-button").onclick = () => {
  currentPage = 0;
  shuffledQuestions = shuffleQuestions();
  userAnswers = [];
  document.getElementById("result-container").style.display = "none";
  document.getElementById("restart-button").style.display = "none";
  renderPage(currentPage);
};

renderPage(currentPage);
