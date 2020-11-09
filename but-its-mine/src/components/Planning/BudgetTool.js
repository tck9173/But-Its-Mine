import React, {Component} from 'react';

class BudgetTool extends Component {
    constructor(props) {
        super(props)

        this.state = {
            remainder: 0,
            budget: 0,
            cpu: 0,
            motherboard: 0,
            gpu: 0,
            psu: 0,
            memory: 0,
            storage: 0,
            case: 0
        }
    }

    updateRemainder = (e) => {
        e.preventDefault();
        let remainder = this.state.budget - (this.state.cpu + this.state.motherboard + this.state.gpu + this.state.psu + this.state.memory + this.state.storage + this.state.case)
        this.setState({
            remainder
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value),
        })
    }
    render() {
        return(
            <div>
                <h2>Budget Tool</h2>
                <form onSubmit={(e) => this.updateRemainder(e)}>
                    <span>Enter your budget:</span>
                    <input type = 'number' name='budget' onChange={this.onChange}/>
                    <br/>
                    <h3>Enter Costs Below</h3>
                    <span>CPU:</span>
                    <input type = 'number' name='cpu' onChange={this.onChange}/>
                    <br/>
                    <span>Motherboard:</span>
                    <input type = 'number' name='motherboard' onChange={this.onChange}/>
                    <br/>
                    <span>Graphics Card:</span>
                    <input type = 'number' name='gpu' onChange={this.onChange}/>
                    <br/>
                    <span>Power Supply:</span>
                    <input type = 'number' name='psu' onChange={this.onChange}/>
                    <br/>
                    <span>Memory:</span>
                    <input type = 'number' name='memory' onChange={this.onChange}/>
                    <br/>
                    <span>Storage:</span>
                    <input type = 'number' name='storage' onChange={this.onChange}/>
                    <br/>
                    <span>Case:</span>
                    <input type = 'number' name='case' onChange={this.onChange}/>
                    <br/>
                    <input type = "submit"/>
                </form>
                <h3>Budget Left: ${this.state.remainder}</h3>
            </div>
        )    
    }
    
}

export default BudgetTool;