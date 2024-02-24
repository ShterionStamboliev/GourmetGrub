import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_URL = import.meta.env.VITE_API_URL;

type CreateUserProps = {
    auth0Id: string;
    email: string;
};

export const useCreateUser = () => {
    const { getAccessTokenSilently } = useAuth0();
    
    const createUserRequest = async (user: CreateUserProps) => {
        const accessToken: string = await getAccessTokenSilently();
        const response = await fetch(`${API_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error("Failed to create new user");
        }
    };

    const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(createUserRequest);

    return {
        createUser,
        isLoading,
        isError,
        isSuccess
    };
}