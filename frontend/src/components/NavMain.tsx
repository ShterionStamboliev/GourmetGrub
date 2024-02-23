import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';

const NavMain = () => {
    const { loginWithRedirect } = useAuth0();

    const loginRedirect = async () => {
        await loginWithRedirect();
    };

    return (
        <Button
            onClick={loginRedirect}
            variant="ghost"
            className='font-bold text-orange-400 hover:text-orange-600 hover:bg-white text-lg'>
            Log In
        </Button>
    )
};

export default NavMain