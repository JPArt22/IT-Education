// Función para generar el contenido de los ejercicios
        function generateExerciseContent(exercise) {
            var exerciseContent = '<div class="exercise" data-id="' + exercise.id + '">' +
                                    '<h2>' + exercise.title + '</h2>' +
                                    '<p>' + exercise.problem + '</p>' +
                                    '<div class="options">';

            for (var i = 0; i < exercise.options.length; i++) {
                exerciseContent += '<button class="option">' + exercise.options[i] + '</button>';
            }

            exerciseContent += '</div></div>';

            return exerciseContent;
        }

        // Obtener el contenedor de los ejercicios
        var exercisesContainer = document.getElementById('exercises-container');

        // Generar el contenido de los ejercicios
        for (var i = 0; i < exercises.length; i++) {
            var exerciseContent = generateExerciseContent(exercises[i]);
            exercisesContainer.innerHTML += exerciseContent;
        }

        // Obtener botón de enviar respuestas
        var submitButton = document.getElementById('submit-answers');

        // Asignar evento de clic al botón de enviar respuestas
        submitButton.addEventListener('click', function() {
            var options = document.getElementsByClassName('option');
            var correctAnswers = 0;

            // Contar el número de respuestas correctas
            for (var i = 0; i < options.length; i++) {
                var option = options[i];

                if (option.classList.contains('selected') && option.parentElement.parentElement.classList.contains('exercise')) {
                    var exerciseId = option.parentElement.parentElement.dataset.id;
                    var exercise = exercises.find(function(ex) {
                        return ex.id === parseInt(exerciseId);
                    });

                    var optionIndex = Array.from(option.parentElement.children).indexOf(option);

                    if (exercise.options[optionIndex] === exercise.answer) {
                        correctAnswers++;
                    }
                }
            }

            // Calcular puntuación
            var score = (correctAnswers / exercises.length) * 10;

            // Mostrar puntuación
            alert('Tu puntuación es: ' + score.toFixed(2));
        });

        // Asignar evento de clic a las opciones
        var options = document.getElementsByClassName('option');

        for (var i = 0; i < options.length; i++) {
            options[i].addEventListener('click', function() {
                this.classList.toggle('selected');

                var exerciseId = this.parentElement.parentElement.dataset.id;
                var isAnswerCorrect = checkAnswer(this, parseInt(exerciseId));

                if (isAnswerCorrect) {
                    this.classList.add('correct');
                } else {
                    this.classList.remove('correct');
                }
            });
        }