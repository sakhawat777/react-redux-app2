import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

function App() {
	const reducer = (state = {}, action) => {
		if (action.type === 'A') {
			return {
				...state,
				A: 'I am A',
			};
		}
		if (action.type === 'B') {
			return {
				...state,
				B: 'I am B',
			};
		}
		return state;
	};
	const store = createStore(reducer);
	store.subscribe(() => {
		console.log(store.getState());
	});
	store.dispatch({ type: 'A' });
	store.dispatch({ type: 'Something' });
	store.dispatch({ type: 'B' });
	store.dispatch({ type: 'Something' });

	return (
		<div className='App'>
			<h2>Hello</h2>
		</div>
	);
}

export default App;
