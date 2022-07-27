import React from 'react';

interface ErrorMassageProps {
    error: string;
}

const ErrorMassage = ({ error }: ErrorMassageProps) => {

    return (
        <p className='text-center text-red-600'>{error}</p>
    );
}

export default ErrorMassage;