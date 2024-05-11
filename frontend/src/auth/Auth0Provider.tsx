import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type AuthProviderProps = {
    children: React.ReactNode
};

const Auth0ProviderService = ({ children }: AuthProviderProps) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    const navigate = useNavigate();

    if (!domain || !clientId || !redirectUri || !audience) {
        throw new Error("Auth initialization failed. Try again.");
    }

    const onRedirectCallback = (appState?: AppState) => {
        navigate(appState?.returnTo || "/auth-callback");
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
                audience
            }}
            onRedirectCallback={onRedirectCallback}
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderService