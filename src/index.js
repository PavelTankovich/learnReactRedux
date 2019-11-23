import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyPortal from './components/portal';


class Lesson extends Component {

    state = {
        counter: 0
    }

    onClick = () => {
        this.setState( ({ counter }) => ({
            counter: counter + 1
        }) );
    }

    render () {
        const { counter } = this.state;
        
        return (
            <div onClick={ this.onClick }>
                <span>{ counter }</span>
                <MyPortal>
                    <div>TEST PORTAL</div>
                    <button>Click</button>
                </MyPortal>
            </div>
        );
    };
};

ReactDOM.render(<Lesson />, document.querySelector('#root'));
 