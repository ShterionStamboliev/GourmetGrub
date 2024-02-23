import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Auth0ProviderService from './auth/Auth0Provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Auth0ProviderService>
				<AppRoutes />
			</Auth0ProviderService>
		</Router>
	</React.StrictMode>,
)
