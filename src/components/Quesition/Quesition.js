import React from 'react';
import './Quesition.css';

const Quesition = () => {
    return (
        <div className='quesition'>
            <div className="first-quesition">
                <h4>1.How React Work?</h4>
                <p>
                    React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.React DOM takes care of updating the DOM to match the React elements
                </p>
            </div>
        </div>
    );
};

export default Quesition;