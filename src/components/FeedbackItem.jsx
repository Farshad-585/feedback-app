import PropTypes from 'prop-types'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ feedback }) {
  const { deleteFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
}

export default FeedbackItem
