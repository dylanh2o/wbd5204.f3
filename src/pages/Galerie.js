import React from 'react';
import Page from "./page";
import {Carousel} from 'antd';
import './Galerie.css';
import Image1 from '../images/1.jpg';
import Image2 from '../images/2.jpg';
import Image3 from '../images/3.jpg';
import Image4 from '../images/4.jpg';

function onChange(a, b, c) {
	console.log(a, b, c);
}

const Galerie = () => (
	<Page>
		<h1>Galerie</h1>
		<div class="Galerie">
			<Carousel afterChange={onChange}>
				<div>
					<h3>Image 1</h3>
					<img src={Image1} alt="Image1"/>

				</div>
				<div>
					<h3>Image 2</h3>
					<img src={Image2} alt="Image2"/>

				</div>
				<div>
					<h3>Image 3</h3>
					<img src={Image3} alt="Image3"/>

				</div>
				<div>
					<h3>Image 4</h3>
					<img src={Image4} alt="Image4"/>

				</div>
			</Carousel>
		</div>
	</Page>
);

export default Galerie;