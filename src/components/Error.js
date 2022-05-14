import React from 'react';

function Error({message}) {
    return (
        <div className="font-weight-bold  alert alert-danger  text-center mt-3">
            {message}
        </div>
    );
}

export default Error;