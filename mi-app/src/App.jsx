import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    constructor(props) { /*The constructor iscalled once and it's the right place
     to initialize the properties in this class */
        super(props);
        console.log('App - Constructor', this.props);
        // this.state = this.props.something;
    };

    componentDidMount() {
        //Ajax Call
        //this.setState({ movies });
        console.log('App - Mounted');
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
    
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });

    };


    handleDelete = (counterId) => {

        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters })

    };

    render() {
        console.log('App - Rendered');
        return (
            <React.Fragment>
                <NavBar 
                totalCounters={this.state.counters.filter(c => c.value > 0).lenght} 
                />
                <main className="container">
                    <Counters 
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete} />

                </main>
            </React.Fragment>
        );
    }
}

export default App;