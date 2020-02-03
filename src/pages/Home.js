import React from 'react';
import Page from "./page";
import {Player} from 'video-react';
import './Home.css'

const Home = () => (
	<Page>
		<h1>Home</h1>
		Bienvenu sur cette page qui met en relation des relation relationnelle grâce a nos relation relative.
		<div class="Video">
			<Player
				playsInline
				poster="https://static.mmzstatic.com/wp-content/uploads/2019/01/madmoizelle-putaclic-clickbait.jpg"
				src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
			/>
		</div>
	</Page>
);

export default Home;