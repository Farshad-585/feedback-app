import PropTypes from 'prop-types'

function FeedbackStats({ feedbacks }) {
  // Calculate ratings average
  let ratingsAverage =
    feedbacks.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0) / feedbacks.length
  ratingsAverage = ratingsAverage.toFixed(1).replace(/[.,]0+$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(ratingsAverage) ? 0 : ratingsAverage}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.array.isRequired
}

export default FeedbackStats
