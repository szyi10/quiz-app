import React, { useRef } from "react"
import { getAllQuizes } from "../../lib/api"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import classes from "./Play.module.css"

const Play = () => {
  const navigate = useNavigate()
  const ref = useRef()

  const startRandomQuiz = () => {
    getAllQuizes().then((data) => {
      const randomQuiz = Math.floor(Math.random() * data.length)
      navigate(`/quiz/${data[randomQuiz].id}`)
    })
  }

  const startSelectedQuiz = (e) => {
    e.preventDefault()

    const enteredId = ref.current.value
    navigate(`/quiz/${enteredId}`)
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
        <h1>Choose Quiz</h1>
        <div className={classes.controls}>
          <button onClick={startRandomQuiz}>
            <i className="bx bxs-dice-3"></i> Random
          </button>
          <div className={classes.divider} />
          <form className={classes.input} onSubmit={startSelectedQuiz}>
            <i className="bx bx-link"></i>
            <input ref={ref} type="text" placeholder="Enter quiz ID here..." />
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Play
