import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

export default function AnimalTile( { name, img, id } ) {
	return (
		<div>
			<section>
				<Link to={ `details/${id}`} >
				<h3>{name}</h3>
				</Link>
			</section>
			<section>
				<img alt={ `${ name } img` } src={img}/>
			</section>
		</div>
	);
}