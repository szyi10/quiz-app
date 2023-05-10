import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import classes from "./BuildIntro.module.css"

const BuildIntro = () => {
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
        <h1>Create Your Quiz</h1>
        <div className={classes.controls}>
          <p>
            Here, you can create your own quiz. Whether you're a teacher looking
            to test your students' knowledge or simply a quiz enthusiast.
          </p>
          <Link to="/create">
            <button>
              <i className="bx bxs-wrench"></i> Create
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default BuildIntro
