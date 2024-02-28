import { useCreateUser } from "@/api/UserApi";
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const { user } = useAuth0();
    const { createUser } = useCreateUser();
    const navigate = useNavigate();

    const isUserCreated = useRef<boolean>(false);

    useEffect(() => {
        if (user?.sub && user?.email && !isUserCreated.current) {
            createUser({
                auth0Id: user.sub,
                email: user.email
            });
            isUserCreated.current = true;
        };
        navigate("/");
    }, [createUser, navigate, user]);

};

export default AuthCallbackPage;