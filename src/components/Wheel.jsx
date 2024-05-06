import React, { useState, useEffect } from 'react';

const Brand = () => {
    const fullText = 'PHP * Python * design * world * Development ';
    const [currentText, setCurrentText] = useState(fullText.slice(0, 30)); 
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText((prevText) => {
                const nextText = prevText.slice(1) + prevText[0];
                return nextText;
            });
        }, 150 ); 

        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className='teker'>
            <div className="tekerim">
                {currentText}
            </div>
        </section>
    );
};

export default Brand;