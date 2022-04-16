// "counters" works as a Father Class - meanwhile counter is the child

import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
    render() {
        console.log('Counters - Rendered');
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter =>
                    <Counter 
                    key={counter.id} 
                    onDelete={onDelete} /*value={counter.value} id={counter.id} same as==*/ 
                    onIncrement={onIncrement}
                    counter={counter}>
                        {/*<h4>Counter #{counter.id}</h4> Children h4*/}
                    </Counter>)}
            </div>
        )
    };
}

export default Counters;