import React from 'react';

const ValidateError = ({error,className}:{error?: string,className?:string}) => {
    return (
            <>{error? <p className={`text-xl self-start text-red-600 md:ml-19.5 ring-1 ring-red-600 px-6 py-2 rounded-xl font-semibold ${className}`} >{error}</p>
            : ""   }
            </>
    );
};

export default ValidateError;
