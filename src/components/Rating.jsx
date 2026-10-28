import { useState } from "react";
import Star from "./Star";

const Rating = ({ heading = 'Rate your Experience?', feedbackMessage, color='gold'}) => {
	const stars = Array.from({length: 5}, (_, i) => i + 1);

	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	
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
		</div>
 	)
}

export default Rating