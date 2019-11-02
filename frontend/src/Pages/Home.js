import React from 'react';
import NavBar from '../Components/navbar';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';

function Home() {
  const content = [
{
	Title: 'Fortnite',
	description: 'hi',
	image: '../Images/fortnitebackground.jpg'
},
{
	Title: 'Overwatch',
	description: 'hi',
	image: '../Images/owbackground.jpg'
},
{
	Title: 'League of Legends',
	description: 'hi',
	image: '../Images/lolbackground.jpg'
},
{
	Title: 'Teamfight Tactics',
	description: 'hi',
	image: '../Images/tftbackground.jpg'
},
{
	Title: 'CSGO',
	description: 'hi',
	image: '../Images/csgobackground.jpg'
},
{
	Title: 'Osu!',
	description: 'hi',
	image: '../Images/osubackground.png'
},
{
	Title: 'Rainbow 6 Seige',
	description: 'hi',
	image: '../Images/r6background.jpg'
},
];
  return (
  	<div>
  	  <NavBar/>
      <Slider className="slider-wrapper">
      	{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.Title}</h1>
						<p>{item.description}</p>
					</div>
				</div>
			))}
      </Slider>
    </div>
  );
}

export default Home;