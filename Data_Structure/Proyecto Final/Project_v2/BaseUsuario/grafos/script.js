// Problemas Matemáticos
const problems = [
    { question: "<b>Problema 1</b><br>En una caja hay 3 manzanas y 2 naranjas. ¿Cuántas frutas hay en total?<br>Opción 1: 4<br>Opción 2: 5<br>Opción 3: 6<br>", answer: 2 },
    { question: "<b>Problema 2</b><br>Si Juan tiene 5 lápices y le regalan 3 más, ¿cuántos lápices tiene ahora?<br>Opción 1: 7<br>Opción 2: 9<br>Opción 3: 8", answer: 3 },
    { question: "<b>Problema 3</b><br>Calcula el área de un triángulo rectángulo con base 8 cm y altura 6 cm.<br>Opción 1: 12 cm²<br>Opción 2: 24 cm²<br>Opción 3: 48 cm²", answer: 2 },
    { question: "<b>Problema 4</b><br>Resuelve la siguiente ecuación: 2x + 5 = 17.<br>Opción 1: x = 6<br>Opción 2: x = 8<br>Opción 3: x = 10", answer: 1 },
    { question: "<b>Problema 5</b><br>¿Cuál es la probabilidad de lanzar un dado justo y obtener un número mayor a 4?<br>Opción 1: 1/6<br>Opción 2: 1/3<br>Opción 3: 1/2", answer: 2 }
  ];
  
  const options = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ];
  
  let currentProblemIndex = 0;
  let score = 0;
  
  // Función para obtener opciones de respuesta aleatorias
  function getRandomOptions() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  // Función para mostrar la pregunta actual y las opciones de respuesta
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    questionElement.innerHTML = problems[currentProblemIndex].question;
    optionsElement.innerHTML = "";
  
    const randomOptions = getRandomOptions();
    randomOptions.forEach((option) => {
      const button = document.createElement("button");
      button.innerHTML = "Opción " + option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
    });
  }
  
  // Función para verificar la respuesta seleccionada
  function checkAnswer(selectedAnswer) {
    const correctAnswer = problems[currentProblemIndex].answer;
    if (selectedAnswer === correctAnswer) {
      score += 20;
    }
  
    currentProblemIndex++;
  
    if (currentProblemIndex < problems.length) {
      displayQuestion();
    } else {
      showScore();
    }
  }
  
  // Función para mostrar la puntuación final
  function showScore() {
    const containerElement = document.getElementById("container");
    containerElement.innerHTML = "";
    const scoreElement = document.createElement("div");
    scoreElement.setAttribute("id", "score");
    scoreElement.innerHTML = "Puntuación: " + score + "/100";
    containerElement.appendChild(scoreElement);
  }
  
  // Inicializar la página con la primera pregunta
  displayQuestion();
  