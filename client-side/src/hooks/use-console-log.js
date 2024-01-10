import { useEffect, useState } from 'react';

const consoleLog = () => console.log('console.log');

export const useConsoleLog = () => {
	const [state, setState] = useState('');

	useEffect(() => {
		console.log('applying listener with mounting..');
		window.addEventListener('click', consoleLog); //done with
		return () => {
			window.removeEventListener('click', consoleLog);
			console.log('removing listener with unmount');
		};
	}, []);
};
