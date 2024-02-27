import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_URL;

export const useGetUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getUserRequest = async (): Promise<User> => {
        const accessToken: string = await getAccessTokenSilently();

        const response = await fetch(`${API_URL}/api/my/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user")
        }

        return response.json();
    }

    const { data: currentUser, isLoading, error } = useQuery("fetchCurrentUser", getUserRequest);

    if (error) {
        toast.error(error.toString());
    }

    return {
        currentUser,
        isLoading
    };
}

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

        return response.json();
    };

    const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(createUserRequest);

    return {
        createUser,
        isLoading,
        isError,
        isSuccess
    };
};

type UpdateUserFormData = {
    name: string;
    address: string;
    country: string;
    city: string;
}

export const useUpdateUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateUserProfile = async (formData: UpdateUserFormData) => {
        const accessToken: string = await getAccessTokenSilently();

        const response = await fetch(`${API_URL}/api/my/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error("Failed to update profile");
        }

        return response.json();
    };

    const { mutateAsync: updateUser, isLoading, isSuccess, error, reset } = useMutation(updateUserProfile);

    if (isSuccess) {
        toast.success("Profile update successful.");
    }

    if (error) {
        toast.error(error.toString());
        reset();
    }

    return {
        updateUser,
        isLoading,
        isSuccess,
        error,
        reset
    };
};