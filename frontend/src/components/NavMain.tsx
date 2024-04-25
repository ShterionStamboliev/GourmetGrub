import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';
import UserNavMenu from './UserNavMenu';

const NavMain = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const loginRedirect = async () => {
        await loginWithRedirect();
    };

    return (
        <span className='flex space-x-2 items-center'>
            {isAuthenticated ? (
                <UserNavMenu />
                
            ) : (
                <Button
                    onClick={loginRedirect}
                    variant="ghost"
                    className='font-bold text-orange-400 hover:text-orange-600 hover:bg-white text-lg'>
                    Log In
                </Button>
            )}
        </span>
    )
};

export default NavMain