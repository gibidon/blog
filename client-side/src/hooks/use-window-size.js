import { useEffect, useState } from 'react';

// const getSizes = () => ({
// 	width:window.innerWidth, height: window.innerHeight;
// })
function getSizes() {
	return { width: window.innerWidth, height: window.innerHeight };
}

export const useWindowSize = () => {
	const [sizes, setSizes] = useState({ width: 0, height: 0 });

	function applySizes() {
		setSizes(getSizes());
	}

	useEffect(() => {
		window.addEventListener('resize', applySizes);
		return () => window.removeEventListener('resize', applySizes);
	}, []);

	// return sizes;
};
