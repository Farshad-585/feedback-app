import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedbacks }) {
  if (!feedbacks || !feedbacks.length === 0) {
    return <p>No feedbacks yet.</p>
  }
  return <div className='feedback-list'>
    {feedbacks.map(feedback => <FeedbackItem key={feedback.id} feedback={feedback} />)}
  </div>
}

export default FeedbackList
