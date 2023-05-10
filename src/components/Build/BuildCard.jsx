import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addQuiz } from "../../lib/api"

import classes from "./BuildCard.module.css"

let questions = []

const BuildCard = ({ updateCurrent }) => {
  const [current, setCurrent] = useState(1)
  const [question, setQuestion] = useState("")
  const [answer0, setAnswer0] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [correct, setCorrect] = useState(null)

  const navigate = useNavigate()

  const questionChangeHandler = (e) => {
    setQuestion(e.target.value)
  }

  const setCorrectAnswer = (e) => {
    setCorrect(e.currentTarget.parentNode.id)
  }

  const answer0Handler = (e) => setAnswer0(e.target.value)
  const answer1Handler = (e) => setAnswer1(e.target.value)
  const answer2Handler = (e) => setAnswer2(e.target.value)
  const answer3Handler = (e) => setAnswer3(e.target.value)

  const resetInputs = () => {
    setQuestion("")
    setCorrect(null)
    setAnswer0("")
    setAnswer1("")
    setAnswer2("")
    setAnswer3("")

    document.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.checked = false
    })
  }

  const checkValidity = () => {
    if (question.length === 0) return false
    if (correct === null) return false

    if (answer0.length === 0) return false
    if (answer1.length === 0) return false
    if (answer2.length === 0) return false
    if (answer3.length === 0) return false

    return true
  }

  const nextQuestionHandler = () => {
    const validity = checkValidity()
    if (!validity) return

    const questionObj = {
      question: question,
      answers: [answer0, answer1, answer2, answer3],
      correct: correct,
    }

    questions.push(questionObj)

    setCurrent((prevState) => (prevState += 1))
    updateCurrent(current)
    resetInputs()
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const validity = checkValidity()
    if (!validity) return
    nextQuestionHandler()

    addQuiz({ questions }).then((data) => {
      navigate(`/create/${data.name}`)
    })

    questions = []
  }

  return (
    <form onSubmit={submitHandler} className={classes.card}>
      <textarea
        type="text"
        className={classes.question}
        placeholder="Enter question here..."
        value={question}
        onChange={questionChangeHandler}
      />
      <div className={classes.divider} />
      <div className={classes.answers}>
        <div className={classes.answer} id="0">
          <div className={classes.content}>
            <span>1.</span>
            <input
              type="text"
              placeholder="Answer 1..."
              value={answer0}
              onChange={answer0Handler}
            />
          </div>
          <input type="radio" name="correct" onClick={setCorrectAnswer} />
        </div>

        <div className={classes.answer} id="1">
          <div className={classes.content}>
            <span>2.</span>
            <input
              type="text"
              placeholder="Answer 2..."
              value={answer1}
              onChange={answer1Handler}
            />
          </div>
          <input type="radio" name="correct" onClick={setCorrectAnswer} />
        </div>

        <div className={classes.answer} id="2">
          <div className={classes.content}>
            <span>3.</span>
            <input
              type="text"
              placeholder="Answer 3..."
              value={answer2}
              onChange={answer2Handler}
            />
          </div>
          <input type="radio" name="correct" onClick={setCorrectAnswer} />
        </div>

        <div className={classes.answer} id="3">
          <div className={classes.content}>
            <span>4.</span>
            <input
              type="text"
              placeholder="Answer 4..."
              value={answer3}
              onChange={answer3Handler}
            />
          </div>
          <input type="radio" name="correct" onClick={setCorrectAnswer} />
        </div>
      </div>
      <div>
        <button
          className={classes.next}
          type="button"
          onClick={nextQuestionHandler}
        >
          Next Question
        </button>
        <button className={classes.next} type="submit">
          Finish
        </button>
      </div>
    </form>
  )
}

export default BuildCard
