import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback}/>
      </div>
    </>
  )
}

export default App
