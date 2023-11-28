import React, { useState } from 'react';
import Button from '../buttons/Button';
import { Loader } from '.';

const Page = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {setIsLoading(false)}, 3000)
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-bgWarningLight">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className='mb-m'>Some Content</div>
                    <Button
                        text="Call Loader"
                        onClick={handleClick}
                    />
                </>
            )}
        </div>
    );
};

export default Page;
