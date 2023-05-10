import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import classes from "./Build.module.css"
import BuildCard from "./BuildCard"

const Build = () => {
  const [current, setCurrent] = useState(1)

  const updateCurrent = (number) => setCurrent(number)

  return (
    <section className={classes.quiz}>
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
          <p className={classes.current}>Question {current}</p>
        </div>
        <BuildCard updateCurrent={updateCurrent} />
      </motion.div>
    </section>
  )
}

export default Build
