export default [
  {
    question: "Teu pai ou tua mãe?",
    answers: [
        { option: "Teu pai", correct: true },
        { option: "Tua mãe", correct: true },
        { option: "Teu teu irmão", correct: true }
    ],
  },
  {
    question: "Pai?",
    answers: [
        { option: "Teu pai", correct: true },
        { option: "Tua mãe", correct: false },
        { option: "Teu teu irmão", correct: false }
    ],
  },
  {
    question: "Mãe?",
    answers: [
        { option: "Teu pai", correct: false },
        { option: "Tua mãe", correct: true },
        { option: "Teu teu irmão", correct: false }
    ],
  },
];
