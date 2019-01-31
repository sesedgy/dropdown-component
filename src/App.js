import React, { Component } from 'react';
import DropdownMenu from './components/DropdownMenu'

import './App.css';


class App extends Component {
    state = {value: null};

    render() {
        const {value} = this.state;

        return (
            <div style={{padding: '40px'}}>
                <DropdownMenu
                    value={value}
                    onChange={(value) => {this.setState({value: value})}}
                    options={[
                        {
                            label: 'Label 1',
                            value: 'Value 1'
                        },
                        {
                            label: 'Label 2',
                            value: 'Value 2'
                        },
                        {
                            label: 'Label 3',
                            value: 'Value 3'
                        }
                    ]}
                />
            </div>);
    }
}

export default App;
