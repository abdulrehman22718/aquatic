import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setShow(false);
        };
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (!show) return null;
    return (
        <>
            <div className="preloader">
                <div className="preloader-inner">
                    <span className="loader"></span>
                </div>
            </div>
        </>
    );
};

export default Preloader;
