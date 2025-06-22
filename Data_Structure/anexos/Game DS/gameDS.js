// Definición del grafo con los ejercicios y su dificultad
const graph = {
  1: { difficulty: 1 },
  2: { difficulty: 2 },
  3: { difficulty: 3 },
  4: { difficulty: 4 },
  5: { difficulty: 5 },
};

// Función para obtener un ejercicio aleatorio de acuerdo a la dificultad
function getRandomExercise(difficulty) {
  const exercises = Object.entries(graph).filter(([_, exercise]) => exercise.difficulty === difficulty);
  const randomIndex = Math.floor(Math.random() * exercises.length);
  return exercises[randomIndex];
}

// Función para calcular el resultado de una operación matemática
function calculate(operation, number1, number2) {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    default:
      return null;
  }
}

// Variables globales
let currentLevel = 1;
let score = 0;

// Elementos del DOM
const exerciseTextElement = document.getElementById('exerciseText');
const userAnswerElement = document.getElementById('userAnswer');
const submitAnswerButton = document.getElementById('submitAnswer');
const scoreValueElement = document.getElementById('scoreValue');

// Función para mostrar un nuevo ejercicio
function showExercise() {
  const [exercise, exerciseData] = getRandomExercise(currentLevel);
  const
