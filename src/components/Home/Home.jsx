import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import classes from "./Home.module.css"

const Home = () => {
  return (
    <section className={classes.section}>
      <div className={classes.left}>
        <motion.img
          src="quiz.svg"
          className={classes.img}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
        />
        <div className={classes.socials}>
          <a href="#" target="_blank" className={classes.social}>
            <i className="bx bxl-github"></i>
          </a>
          <a href="#" target="_blank" className={classes.social}>
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#" target="_blank" className={classes.social}>
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
      <motion.div
        className={classes.content}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
      >
        <h1>Welcome in Quiz App</h1>
        <p>
          Welcome to our quiz app! We are thrilled to have you here and can't
          wait for you to start testing your knowledge with our fun and
          challenging quizzes. Whether you're a trivia buff, a pop culture
          aficionado, or just looking for a fun way to pass the time. Thank you
          for choosing our quiz app and we hope you enjoy your experience!
        </p>
        <div className={classes.divider} />
        <div className={classes.controls}>
          <Link to="/play">
            <button>Play</button>
          </Link>
          <Link to="/create-intro">
            <button>Create</button>
          </Link>
        </div>
        <div className={classes.feedback}>
          <a>
            <i className="bx bx-error"></i> Give Feedback
          </a>
          <a>
            <i className="bx bx-bug"></i> Report bug
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Home
