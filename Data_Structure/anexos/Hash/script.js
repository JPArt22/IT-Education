const exercises = [
    {
      id: 1,
      difficulty: 3,
      image: "ruta_imagen_1",
      title: "Suma de números enteros",
      problem: "Realiza la suma de los siguientes números enteros: 5 + (-3).",
      options: ["2", "8", "3"],
      answer: "2"
    },
    {
      id: 2,
      difficulty: 7,
      image: "ruta_imagen_2",
      title: "Cálculo de áreas de figuras geométricas",
      problem: "Calcula el área de un círculo de radio 5 cm.",
      options: ["78.54 cm²", "25 cm²", "50 cm²"],
      answer: "78.54 cm²"
    },
    {
      id: 3,
      difficulty: 2,
      image: "ruta_imagen_3",
      title: "Operaciones básicas de fracciones",
      problem: "Realiza la siguiente operación con fracciones: 1/2 + 3/4.",
      options: ["7/4", "5/6", "5/4"],
      answer: "5/4"
    },
    {
      id: 4,
      difficulty: 9,
      image: "ruta_imagen_4",
      title: "Resolución de ecuaciones cuadráticas",
      problem: "Encuentra las soluciones de la ecuación cuadrática 2x^2 - 5x + 2 = 0.",
      options: ["x = 1/2, x = 2", "x = 1, x = 2", "x = 1/2, x = 1/4"],
      answer: "x = 1/2, x = 2"
    },
    {
      id: 5,
      difficulty: 6,
      image: "ruta_imagen_5",
      title: "Conversiones entre unidades de medida",
      problem: "Convierte 2 metros a pies.",
      options: ["6.56 ft", "3.28 ft", "0.62 ft"],
      answer: "6.56 ft"
    },
    {
      id: 6,
      difficulty: 2,
      image: "ruta_imagen_6",
      title: "Identificación de patrones numéricos",
      problem: "Completa la siguiente secuencia numérica: 2, 4, 6, __, 10, 12.",
      options: ["8", "9", "7"],
      answer: "8"
    },
    {
      id: 7,
      difficulty: 5,
      image: "ruta_imagen_7",
      title: "Cálculo de probabilidades",
      problem: "Si se lanza un dado de 6 caras, ¿cuál es la probabilidad de obtener un número par?",
      options: ["1/2", "1/3", "2/3"],
      answer: "1/2"
    },
    {
      id: 8,
      difficulty: 8,
      image: "ruta_imagen_8",
      title: "Geometría analítica: ecuaciones de rectas",
      problem: "Encuentra la ecuación de la recta que pasa por los puntos (2, 3) y (5, 7).",
      options: ["y = (4/3)x + (1/3)", "y = (3/4)x + (1/2)", "y = (3/2)x + (1/4)"],
      answer: "y = (4/3)x + (1/3)"
    },
    {
      id: 9,
      difficulty: 4,
      image: "ruta_imagen_9",
      title: "Trigonometría básica",
      problem: "Calcula el valor de la tangente del ángulo de 45 grados.",
      options: ["1", "0", "√2"],
      answer: "1"
    },
    {
      id: 10,
      difficulty: 6,
      image: "ruta_imagen_10",
      title: "Descomposición en factores primos",
      problem: "Identifica todos los factores primos del número 24.",
      options: ["2, 3", "4, 6", "1, 24"],
      answer: "2, 3"
    }
];


function checkAnswer(option, exerciseId) {
    var exercise = exercises.find(function(ex) {
        return ex.id === exerciseId;
    });

    var optionIndex = Array.from(option.parentElement.children).indexOf(option);

    // Deseleccionar opciones previamente seleccionadas
    var selectedOptions = option.parentElement.getElementsByClassName('selected');
    Array.from(selectedOptions).forEach(function(opt) {
        opt.classList.remove('selected');
    });

    // Marcar opción actual como seleccionada
    option.classList.add('selected');

    if (exercise.options[optionIndex] === exercise.answer) {
        return true;
    }

    return false;
}