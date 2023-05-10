import React, { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"
import { AnimatePresence } from "framer-motion"

const HomePage = lazy(() => import("./pages/HomePage"))
const Play = lazy(() => import("./components/Home/Play"))
const BuildIntro = lazy(() => import("./components/Build/BuildIntro"))
const Build = lazy(() => import("./components/Build/Build"))
const BuildFinished = lazy(() => import("./components/Build/BuildFinished"))
const Quiz = lazy(() => import("./components/Quiz/Quiz"))
const NotFound = lazy(() => import("./pages/NotFound"))

const App = () => {
  return (
    <div>
      <Suspense fallback="loading...">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/play" element={<Play />} />
            <Route path="/create-intro" element={<BuildIntro />} />
            <Route path="/create" element={<Build />} />
            <Route path="/create/:finishedId" element={<BuildFinished />} />
            <Route path="/quiz/:quizId" element={<Quiz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  )
}

export default App
