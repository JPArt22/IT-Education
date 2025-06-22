// Definir la estructura de un nodo en la lista enlazada
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Implementar la lista enlazada
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    addNode(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.length++;
    }
  }
  
  // Crear una instancia de la lista enlazada
  const exerciseList = new LinkedList();
  
  // Agregar ejercicios a la lista
  exerciseList.addNode({
    question: "Si un pulpo tiene tres corazones, ¿cuántos corazones tienen dos pulpos?",
    options: ["3", "6", "5"],
    answer: 2
  });
  
  exerciseList.addNode({
    question: "Si un árbol crece 3 centímetros cada año, ¿cuánto crecerá en 5 años?",
    options: ["12 cm", "13 cm", "15 cm"],
    answer: 3
  });
  
  exerciseList.addNode({
    question: "Si un autobús tiene 10 pasajeros y se bajan 2, ¿cuántos pasajeros quedan en el autobús?",
    options: ["7", "8", "9"],
    answer: 2
  });
  
  exerciseList.addNode({
    question: "Si una jirafa tiene un cuello de 3 metros de largo y se come 2 metros de hojas, ¿cuánto mide su cuello ahora?",
    options: ["1 metro", "2 metros", "3 metros"],
    answer: 3
  });
  
  exerciseList.addNode({
    question: "Si un perro corre a una velocidad de 20 kilómetros por hora, ¿cuántos kilómetros recorrerá en 4 horas?",
    options: ["40 km", "60 km", "80 km"],
    answer: 3
  });
  
  // Variables globales
  let currentExercise = exerciseList.head;
  let score = 0;
  
  // Función para mostrar el ejercicio actual y las opciones de respuesta
  function displayExercise() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
    const submitBtn = document.getElementById("submit-btn");
  
    questionElement.innerHTML = currentExercise.data.question;
    optionsElement.innerHTML = "";
    resultElement.innerHTML = "";
  
    currentExercise.data.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.innerHTML = option;
      button.onclick = () => checkAnswer(index + 1);
      optionsElement.appendChild(button);
    });
  
    submitBtn.disabled = true;
  }
  
  // Función para verificar la respuesta seleccionada
  function checkAnswer(selectedAnswer) {
    const correctAnswer = currentExercise.data.answer;
    const resultElement = document.getElementById("result");
    const submitBtn = document.getElementById("submit-btn");
  
    if (selectedAnswer === correctAnswer) {
      resultElement.innerHTML = "¡Respuesta correcta!";
      resultElement.style.color = "green";
      score++;
    } else {
      resultElement.innerHTML = "Respuesta incorrecta";
      resultElement.style.color = "red";
    }
  
    submitBtn.disabled = false;
  
    // Pasar al siguiente ejercicio
    if (currentExercise.next !== null) {
      currentExercise = currentExercise.next;
      displayExercise();
    } else {
      showScore();
    }
  }
  
  // Función para mostrar la puntuación final
  function showScore() {
    const exerciseContainer = document.getElementById("exercise-container");
    exerciseContainer.innerHTML = "";
    const scoreElement = document.createElement("div");
    scoreElement.innerHTML = "Puntuación: " + score + "/" + exerciseList.length;
    exerciseContainer.appendChild(scoreElement);
  }
  
  // Iniciar la página mostrando el primer ejercicio
  displayExercise();