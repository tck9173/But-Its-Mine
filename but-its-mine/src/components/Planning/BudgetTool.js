import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Planning.css';

class BudgetTool extends Component {
    constructor(props) {
        super(props)

        this.state = {
            remainder: '',
            budget: '',
            cpu: '',
            motherboard: '',
            gpu: '',
            psu: '',
            memory: '',
            storage: '',
            case: ''
        }
    }

    updateRemainder = () => {
        let remainder = this.state.budget - (this.state.cpu + this.state.motherboard + this.state.gpu + this.state.psu + this.state.memory + this.state.storage + this.state.case)
        this.setState({
            remainder
        })
    }

    updateBudget = (e) => {
        e.preventDefault();
        const budget=this.state.budget;
        this.setState({
            cpu: parseInt(budget * 0.25),
            motherboard: parseInt(budget * 0.12),
            gpu: parseInt(budget * 0.35),
            psu: parseInt(budget * 0.07),
            memory: parseInt(budget * 0.07),
            storage: parseInt(budget * 0.07),
            case: parseInt(budget * 0.07),
            remainder: 0
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value),
        })
    }
    render() {
        return(
            <div className='main'>
                <h2>Budget Tool</h2>
                <Link to = '/planning'><button>Go back to planning</button></Link>
                <form onSubmit={(e) => this.updateBudget(e)}>
                    <div className='budgetInputContainer'>
                        <p>Enter your budget:</p>
                        <input type = 'number' required name='budget' onChange={this.onChange}/>
                    </div>
                    <input type = "submit" value='Show recommendations'/>
                    <h4>Recommended breakdown shown next to component</h4>
                    <p>The breakdowns shown are only recommended. Feel free to change the budget to better serve your needs. To avoid potential bottlenecking stay as close to these breakdowns as possible.</p>
                    <p>Understand prices can change. Watch for sales and do your best to stay on budget for each item. Going even slightly over on each component can quickly increase the total cost of your build.</p>
                    <p>Component (Recommended/As Shown)</p>
                    <div className='budgetInputWrapper'>
                        <div className='budgetInputContainer'>
                            <p>CPU - (25% / {this.state.cpu && <span>{parseInt((this.state.cpu/this.state.budget)*100)}%)</span>}</p>
                            <input type = 'number' name='cpu' value={this.state.cpu} onChange={this.onChange}/>    
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Motherboard - (12% /{this.state.motherboard && <span>{parseInt((this.state.motherboard/this.state.budget)*100)}%)</span>}</p>  
                            <input type = 'number' name='motherboard' value={this.state.motherboard} onChange={this.onChange}/>    
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Graphics Card - (35% / {this.state.gpu && <span>{parseInt((this.state.gpu/this.state.budget)*100)}%)</span>}</p>                      
                            <input type = 'number' name='gpu' value={this.state.gpu} onChange={this.onChange}/>                           
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Power Supply - (7% /{this.state.psu && <span>{parseInt((this.state.psu/this.state.budget)*100)}%)</span>}</p>                                                     
                            <input type = 'number' name='psu' value={this.state.psu} onChange={this.onChange}/>    
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Memory - (7% /{this.state.memory && <span>{parseInt((this.state.memory/this.state.budget)*100)}%)</span>}</p>
                            <input type = 'number' name='memory' value={this.state.memory} onChange={this.onChange}/>                       
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Storage - (7% /{this.state.storage && <span>{parseInt((this.state.storage/this.state.budget)*100)}%)</span>}</p>
                            <input type = 'number' name='storage' value={this.state.storage} onChange={this.onChange}/>                         
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Case - (7% / {this.state.case && <span>{parseInt((this.state.case/this.state.budget)*100)}%)</span>}</p> 
                            <input type = 'number' name='case' value={this.state.case} onChange={this.onChange}/>                       
                        </div>
                    </div>
                </form>
                {this.state.budget && <h3>Budget Left: ${this.state.remainder}</h3>}
                {this.state.budget && <button onClick={()=>this.updateRemainder()}>Update Remainder</button>}
            </div>
        )    
    }
    
}

export default BudgetTool;