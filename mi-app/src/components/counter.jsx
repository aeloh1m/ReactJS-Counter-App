// "counter" works as a Child Class - meanwhile counters is the Father

import React, { Component } from 'react';

// AJAX calls are one method to load personalized content 
// separately from the rest of the HTML document, 
// which allows for the full HTML document to be cached, 
// improving back end load time.


class Counter extends Component { // Counter-Class
    // state = {
    //     value: this.props.counter.value
    // };

    // "btn btn-primary m-2"
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = product => {
    //     console.log(product);
    //     this.setState({ value: this.state.value + 1 });

    // };

    doHandleIncrement = () => {

        this.handleIncrement({ id: 1 })

    }; // This gets obsolete with the inline arrow function which is easier and better.

    

    // renderTags() {
    //     if (this.state.tags.lenght === 0) return <p>There are no tags!</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;

    // };

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps)
        console.log("prevState", prevState)
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
        } 

    };

    componentWillUnmount() {
        console.log('Counter - Unmount');
    };


    render() { // Where the buttons and stuff are
        console.log('Counter - Rendered');

        return (
            <div>
                
                <span style={{ fontSize: 30 }} type="button" className={this.getButtonClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)} //Inline arrow function should be used: onClick={ () => this.handleIncrement(product)} // Product as the object.
                    className='badge bg-secondary btn-sm'>
                    Increment</button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>


            </div>
        );
    }

    getButtonClasses() {
        let classes = "btn m-2 btn-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;

    }
}

export default Counter;