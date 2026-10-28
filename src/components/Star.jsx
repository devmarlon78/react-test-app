const Star = ({ star, rating, hover, color, ratingClick, hoverEnter, hoverLeave}) => {
  return (
	<span
		className="star"
		style={{color : star <= (hover || rating) ? color : '#ccc'}}
		onClick={() => ratingClick(star)}
		onMouseEnter={() => hoverEnter(star)}
		onMouseLeave={() => hoverLeave(0)}
	>
		{ '\u2605' }
	</span>
  )
}

export default Star