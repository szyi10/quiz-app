const FIREBASE_URL =
  "https://quiz-app-d8711-default-rtdb.europe-west1.firebasedatabase.app/quizes.json"

export const getAllQuizes = async () => {
  const res = await fetch(FIREBASE_URL)
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || "Could not fetch quizes.")
  }

  const transformedQuizes = []

  for (const key in data) {
    const quizObj = {
      id: key,
      ...data[key],
    }

    transformedQuizes.push(quizObj)
  }

  return transformedQuizes
}

export const getSinglePost = async (quizId) => {
  const res = await fetch(FIREBASE_URL)
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || "Could not fetch quiz.")
  }

  const questions = []

  const loadedQuiz = {
    id: quizId,
    ...data,
  }

  for (const key in loadedQuiz) {
    const questionObj = {
      id: key,
      ...data[key],
    }

    questions.push(questionObj)
  }

  for (const question of questions) {
    if (question.id === quizId) {
      return question.questions
    }
  }
}

export const addQuiz = async (quizData) => {
  const res = await fetch(FIREBASE_URL, {
    method: "POST",
    body: JSON.stringify(quizData),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || "Could not create post.")
  }

  return data
}
