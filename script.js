document.getElementById('submitQuiz').addEventListener('click', function() {
    let correctAnswers = 0;
    const totalQuestions = 4; // Número total de preguntas

    // Contar respuestas correctas para los botones
    const answers = document.querySelectorAll('.button-85');
    answers.forEach(answer => {
        if (answer.dataset.correct === "true" && answer.classList.contains("selected")) {
            correctAnswers++;
        }
    });

    // Obtener respuestas del usuario
    const answer2 = document.getElementById('answer2').value.trim();
    const answer3 = document.getElementById('answer3').value.trim();
    if (answer2 === "28/04/2024") {
        correctAnswers++;
    }
    if (answer3 === "23/07/2024") {
        correctAnswers++;
    }

    // La última pregunta siempre se cuenta como correcta
    correctAnswers++;

    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    
    let resultMessage = `Acertaste ${correctAnswers} de ${totalQuestions} respuestas, `;
    if (correctAnswers === totalQuestions) {
        resultMessage += "te amo mi flka.";
        document.getElementById('continueButton').classList.remove('hidden'); // Mostrar botón solo si todas las respuestas son correctas
    } else {
        resultMessage += "No importa, buen intento mi niña..";
        document.getElementById('continueButton').classList.add('hidden'); // Ocultar botón si no todas las respuestas son correctas
    }
    document.getElementById('resultMessage').innerText = resultMessage;
});

document.getElementById('continueButton').addEventListener('click', function() {
    window.location.href = 'https://drive.google.com/file/d/1FPBLvbbg-vLlQKnMF0wUiABBpOkTi9Pe/view?usp=drivesdk';
});

const answerButtons = document.querySelectorAll('.button-85');
answerButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Elimina la selección previa
        const currentQuestion = button.closest('.question-container');
        const buttonsInQuestion = currentQuestion.querySelectorAll('.button-85');
        buttonsInQuestion.forEach(btn => btn.classList.remove('selected'));
        
        // Resalta la respuesta seleccionada
        button.classList.add('selected');
    });
});