import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedbackList({ feedbacks }) {
  if (!feedbacks || !feedbacks.length === 0) {
    return <p>No feedbacks yet.</p>
  }
  return <div className='feedback-list'>
    {feedbacks.map(feedback => <FeedbackItem key={feedback.id} feedback={feedback} />)}
  </div>
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  )
}

export default FeedbackList
