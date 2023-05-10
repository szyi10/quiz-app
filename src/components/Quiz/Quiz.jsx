import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getSinglePost } from "../../lib/api"
import { motion } from "framer-motion"

import classes from "./Quiz.module.css"
import QuizCard from "./QuizCard"
import QuizFinish from "./QuizFinish"

const Quiz = () => {
  const params = useParams()

  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    getSinglePost(params.quizId).then((data) => {
      setQuestions(data)
    })
    resetScore()

    return () => setQuestions([])
  }, [])

  const addScore = () => setScore((prevState) => (prevState += 1))
  const resetScore = () => setScore(0)

  const nextQuestion = () => {
    if (current <= questions.length) {
      setCurrent((prevState) => (prevState += 1))
    }
  }

  if (current > questions.length) {
    return <QuizFinish score={score} questions={questions.length} />
  }

  return (
    <section className={classes.quiz}>
      <motion.div
        className={classes.content}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
      >
        <div className={classes.header}>
          <Link to="/play" className={classes.back}>
            <i className="bx bx-arrow-back"></i> Back
          </Link>
          <p className={classes.current}>
            {current}/{questions.length}
          </p>
        </div>
        <QuizCard
          data={questions[current - 1]}
          nextQuestion={nextQuestion}
          addScore={addScore}
        />
      </motion.div>
    </section>
  )
}

export default Quiz
