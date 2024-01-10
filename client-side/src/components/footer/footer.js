import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'http://api.openweathermap.org/data/2.5/weather?q=Krasnoyarsk&units=metric&appid=7854e749499ad8fda3e07f01282e7154',
		)
			.then((response) => response.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>
					{city}{' '}
					{new Date().toLocaleString('ru', {
						day: 'numeric',
						month: 'long',
					})}
				</div>
				<div>
					{temperature} градусов, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	aligh-items: center;
	height: 120px;
	width: 1000px;
	background-color: white;
	box-shadow: rgb(0, 0, 0) 0px 2px 17px;
	font-weight: bold;
`;
