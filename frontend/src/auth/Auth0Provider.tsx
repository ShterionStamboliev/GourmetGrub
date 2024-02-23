import { AppState, User, Auth0Provider } from "@auth0/auth0-react";

type AuthProviderProps = {
    children: React.ReactNode
}

const Auth0ProviderService = ({ children }: AuthProviderProps)  => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK;

    if (!domain || !clientId || !redirectUrl) {
        throw new Error("Auth initialization failed. Try again.");
    }

    const onRedirectCallback = (appState?: AppState, user?: User) => {
        
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_url: redirectUrl
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderService