import React from 'react'
import Tour from './Tour'

const Tours = (props) => {
	// take out tours from props
	const { tours, removeTour } = props

	return (
		<section>
			<div className="title">
				<h2>All Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{tours.map((tour) => {
					return <Tour key={tour.id} removeTour={removeTour} {...tour} />
				})}
			</div>
		</section>
	)
}

export default Tours
