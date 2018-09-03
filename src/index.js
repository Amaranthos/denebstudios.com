import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store } from './store';
import { App } from './components/App';
import { Themer } from './components/Themer';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
	<Provider store={store}>
		<PersistGate loading={<div />} persistor={persistStore(store)} >
			<Themer>
				<App />
			</Themer>
		</PersistGate>
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
