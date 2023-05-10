import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import classes from "./QuizFinish.module.css"

const QuizFinish = ({ score, questions }) => {
  const percentageScore = Math.floor((score / questions) * 100)

  const resetHandler = () => {
    location.reload()
  }

  return (
    <section className={classes.section}>
      <motion.div
        className={classes.content}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
      >
        <Link to="/" className={classes.back}>
          <i className="bx bx-arrow-back"></i> Back
        </Link>
        <h1>Quiz Summary</h1>
        <div className={classes.controls}>
          <p>
            Your score: {score}/{questions} ({percentageScore}%)
          </p>
          <div className={classes.divider} />
          <button onClick={resetHandler}>
            <i className="bx bx-refresh"></i> Try Again
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default QuizFinish
