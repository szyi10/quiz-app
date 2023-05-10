import React from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"

import classes from "./BuildFinished.module.css"

const BuildFinished = () => {
  const params = useParams()

  return (
    <section className={classes.finish}>
      <motion.div
        className={classes.content}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
      >
        <div className={classes.header}>
          <Link to="/create-intro" className={classes.back}>
            <i className="bx bx-arrow-back"></i> Back
          </Link>
        </div>
        <h1>Quiz Finished</h1>
        <div className={classes.id}>
          <p>Quiz ID</p>
          <span>{params.finishedId}</span>
        </div>
        <div className={classes.buttons}>
          <Link to={`/quiz/${params.finishedId}`}>
            <button>Play</button>
          </Link>
          <Link to="/">
            <button>Back to Start</button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default BuildFinished
