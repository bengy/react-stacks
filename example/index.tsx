import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { HStack } from '@domir/react-stacks';

const App = () => {
	return (
		<div>
			<HStack />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
