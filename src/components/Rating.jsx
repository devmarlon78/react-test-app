const Rating = () => {
	const stars = Array.from({length: 5}, (_, i) => i + 1);
	
	const clicked = () => {
		console.log('clicked');
	}
	
  	return (
		<div className="rating-container" >
			<h2  >
				Rate your Experience
			</h2>
			<div className="stars">
				{
					stars.map((star, index) => (
						<span className="star active" key={index} onClick={clicked} >{ '\u2605' }</span>
					))
				}
			</div>
		</div>
 	)
}

export default Rating