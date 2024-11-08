import { Outlet } from 'react-router-dom';

export default function SecureLayout() {
    return (
        <>
            <Outlet />
        </>
    );
}