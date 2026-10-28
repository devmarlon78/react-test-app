import { useState } from "react";
import Star from "./Star";

const Rating = ({ heading = 'Rate your Experience?', feedbackMessage, color='gold'}) => {
	const stars = Array.from({length: 5}, (_, i) => i + 1);

	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = () => {
		if(rating > 0) {
			setSubmitted(true);
		}
	}

	const closeHandler = () => {
		setSubmitted(false);
		setRating(0);
		setHover(0);
	}
	
  	return (
		<div className="rating-container" >
			<h2  >
				{heading}
			</h2>
			<div className="stars">
				{
					stars.map((star, index) => (
						<Star
							key={star}
							star={star}
							rating={rating}
							hover={hover}
							color={color}
							ratingClick={setRating}
							hoverEnter={setHover}
							hoverLeave={setHover}
						/>
						// <span 
						// 	className={`star ${star <= (hover || rating) ? 'active' : ''}`} 
						// 	key={index} 
						// 	onClick={() => setRating(star)}
						// 	onMouseEnter={() => setHover(star)}
						// 	onMouseLeave={() => setHover(0)}
						// >
						// 	{ '\u2605' }
						// </span>
					))
				}
			</div>
			{
				rating > 0 && <div>
					<p className="feedback">
						{ feedbackMessage[rating - 1] }
					</p>
				</div>
			}
			<button 
				className="submit-btn"
				onClick={handleSubmit}
				disabled={rating === 0}
			>
				Submit
			</button>

			{
				submitted && <div className="modal-overlay">
					<div className="modal">
						<h2>Thank You!!!</h2>
						<p>You rated us {rating} { rating === 1 ? 'star' : 'stars' }</p>
						<button className="close-btn" onClick={closeHandler} >Close</button>
					</div>
				</div>
			}
		</div>
 	)
}

export default Rating