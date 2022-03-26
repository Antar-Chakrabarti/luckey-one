import React from 'react';
import './Quesition.css';

const Quesition = () => {
    return (
        <div className='quesition'>
            <div className="first-quesition">
                <h4>1.How React Work?</h4>
                <p>
                    React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.React DOM takes care of updating the DOM to match the React elements.
                </p>
            </div>
            <div className="second-quesition">
                <h4>2. Props vs state</h4>
                <p>
                    <b>Props</b>
                    <li>Props are read-only.</li>
                    <li>Props are immutable.</li>
                    <li>Props allow you to pass data from one component to other components as an argument.</li>
                    <li>Props can be accessed by the child component.</li>
                    <li>Props are used to communicate between components.</li>
                    <li>Props are external and controlled by whatever renders the component.</li>
                </p>
                <p>
                    <b>State</b>
                    <li>State changes can be asynchronous.</li>
                    <li>State is mutable.</li>
                    <li>State holds information about the components.</li>
                    <li>State cannot be accessed by child components.</li>
                    <li>States can be used for rendering dynamic changes with the component.</li>
                    <li>Stateless components cannot have State.</li>
                </p>
            </div>
        </div>
    );
};

export default Quesition;