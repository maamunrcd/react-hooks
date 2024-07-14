import { useTransition } from 'react';
import Button from '@mui/material/Button';
const TabButton = ({ onClick, ...rest }) => {
    // const [isPending, startTransition] = useTransition();
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            onClick?.();
        });
    };

    if (isPending) {
        return <p>Loading...</p>;
    }

    return <Button {...rest} onClick={handleClick}>{rest.title}</Button>;
};

export default TabButton;
