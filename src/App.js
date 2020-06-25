import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes/Routes';

function App(props) {
	return (
		<Fragment>
			<Router>
				<Route component={Routes} />
			</Router>
		</Fragment>
	);
}

export default App;
