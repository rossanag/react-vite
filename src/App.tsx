import { useState } from 'react';
import Button from './components/Button';

import './App.css';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<Button contenido={'Hello there!'}/>	
			</div>
			<h1>Vite + React 18 + Typescript + Tailwindcss</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
				</button>
				<p>
		Edit <code>src/App.tsx</code> and save to test automatic changes
				</p>
			</div>		
		</div>
	);
};

export default App;
