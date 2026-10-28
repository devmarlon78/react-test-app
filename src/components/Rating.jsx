import { useState } from "react";

const Rating = () => {
	const stars = Array.from({length: 5}, (_, i) => i + 1);

	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	
  	return (
		<div className="rating-container" >
			<h2  >
				Rate your Experience
			</h2>
			<div className="stars">
				{
					stars.map((star, index) => (
						<span 
							className="star active" 
							key={index} 
							onClick={() => setRating(star)}
							onMouseEnter={() => setHover(star)}
							onMouseLeave={() => setHover(0)}
						>
							{ '\u2605' }
						</span>
					))
				}
			</div>
		</div>
 	)
}

export default Rating