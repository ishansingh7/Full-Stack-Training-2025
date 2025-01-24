import { useRef, useState, useEffect } from 'react';

const Useref = () => {
    const [text, setText] = useState("");
    const prevRender = useRef();

    useEffect(() => {
        console.log(prevRender.current);
        prevRender.current = text;
    }, [text]); 

    return (
        <div>
            <h2>This is the page of the USEREF hooks</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <h4>The text is {text}</h4>
            <h5>The previous Render text is {prevRender.current}</h5>
        </div>
    );
};

export default Useref;
