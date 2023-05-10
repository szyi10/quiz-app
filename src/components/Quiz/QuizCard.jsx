import React from "react"

import classes from "./QuizCard.module.css"

const QuizCard = ({ data, nextQuestion, addScore }) => {
  if (!data) return

  // const button0 = document.getElementById("0")
  // const button1 = document.getElementById("1")
  // const button2 = document.getElementById("2")
  // const button3 = document.getElementById("3")

  const resetStylings = () => {
    document.getElementById("0").style.backgroundColor = ""
    document.getElementById("0").disabled = false

    document.getElementById("1").style.backgroundColor = ""
    document.getElementById("1").disabled = false

    document.getElementById("2").style.backgroundColor = ""
    document.getElementById("2").disabled = false

    document.getElementById("3").style.backgroundColor = ""
    document.getElementById("3").disabled = false
  }

  const submitAnswer = (e) => {
    const answerId = e.target.id

    document.getElementById("0").disabled = true
    document.getElementById("1").disabled = true
    document.getElementById("2").disabled = true
    document.getElementById("3").disabled = true

    if (answerId == data.correct) {
      addScore()
      document.getElementById(data.correct).style.backgroundColor =
        "var(--c-success)"
    }

    if (answerId != data.correct) {
      document.getElementById(answerId).style.backgroundColor = "var(--c-error)"
      document.getElementById(data.correct).style.backgroundColor =
        "var(--c-success)"
    }
  }

  const nextQuestionHandler = () => {
    resetStylings()
    nextQuestion()
  }

  return (
    <div className={classes.card}>
      <h3>{data.question}</h3>
      <div className={classes.divider} />
      <div className={classes.answers}>
        {data.answers.map((answer, idx) => (
          <button
            key={idx}
            id={idx}
            className={classes.answer}
            onClick={submitAnswer}
            disabled={false}
          >
            <span>{idx + 1}.</span> {answer}
          </button>
        ))}
      </div>
      <button className={classes.next} onClick={nextQuestionHandler}>
        Next Question
      </button>
    </div>
  )
}

export default QuizCard
