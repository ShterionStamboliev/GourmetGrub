import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Auth0ProviderService from './auth/Auth0Provider';
import { QueryClient, QueryClientProvider } from 'react-query';

const query = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<QueryClientProvider client={query}>
				<Auth0ProviderService>
					<AppRoutes />
				</Auth0ProviderService>
			</QueryClientProvider>
		</Router>
	</React.StrictMode>,
)
