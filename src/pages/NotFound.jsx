import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import classes from "./NotFound.module.css"

const NotFound = () => {
  return (
    <section className={classes.section}>
      <motion.div
        className={classes.text}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
      >
        <h1>Page 404</h1>
        <h2>Not Found</h2>
        <p>
          We're sorry, but the page you are looking for cannot be found. It may
          have been moved, deleted, or never existed in the first place. Please
          double-check the URL for any typos or errors. If you continue to have
          trouble, feel free to contact our support team for assistance. Thank
          you for your understanding.
        </p>
        <Link to="/">
          <button>Back to Homepage</button>
        </Link>
      </motion.div>
      <motion.img
        src="not-found.svg"
        alt="Not Found"
        className={classes.img}
        initial={{ opacity: 0, y: 200, x: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: 200, x: 100 }}
      />
    </section>
  )
}

export default NotFound
