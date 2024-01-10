export const debounce = (fn, delay) => {
	let timeoutId;

	return (...args) => {
		clearTimeout(timeoutId);
		// setTimeout(() => fn(...args), delay);
		timeoutId = setTimeout(fn, delay, ...args);
	};
};
