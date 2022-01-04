import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This feedback item 1',
      rating: 5,
    },
    {
      id: 2,
      text: 'This feedback item 2',
      rating: 4,
    },
    {
      id: 3,
      text: 'This feedback item 3',
      rating: 3,
    },
  ])

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
