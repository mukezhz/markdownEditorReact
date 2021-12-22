import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Remarkable } from 'remarkable';    

const MarkdownEditor = (props) => {
   const [text, setText] = useState({
     value: 'Type some *markdown* here!'
   });


    const handleChange = (e) => {
        setText({...text,  
            value: e.target.value
        });
    }

    const getRawMarkup = () => {
        const md = new Remarkable();
        return {__html: md.render(text.value)};
    }

        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                <textarea
                    className="input-text"
                    onChange={handleChange}
                    defaultValue={text.value}
                />
                </div>
                <div className="output">
                    <h3>Markdown</h3>
                <div 
                    dangerouslySetInnerHTML={getRawMarkup()}
                    className="output-text"
                >
                </div>
                </div>                
            </div>
        )
}

// ========================================

ReactDOM.render(
    <MarkdownEditor />,
    document.getElementById('root')
);
