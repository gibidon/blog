import { useEffect } from 'react';
import { useStore } from 'react-redux';

export const useResetForm = (reset) => {
	//3-6
	const store = useStore();

	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout; //this code  line is done only once when component gets mounted,so always false
		console.log('currentWasLogout once: ', currentWasLogout);
		return store.subscribe(() => {
			let previousWasLogout = currentWasLogout;
			currentWasLogout = store.getState().app.wasLogout;
			if (currentWasLogout !== previousWasLogout) {
				reset();
			}
		});
	}, [reset, store]);
};
