import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Planning.css';

class BudgetTool extends Component {
    constructor(props) {
        super(props)

        this.state = {
            remainder: '',
            isNegative: false,
            budget: '',
            cpu: '',
            motherboard: '',
            gpu: '',
            psu: '',
            memory: '',
            storage: '',
            addStorage: 0,
            case: '',
            cooler: 0,
            other: 0
        }
    }

    //calculates what is left in budget, if value is negative, sets that in state
    updateRemainder = () => {
        let remainder = this.state.budget - (
            this.state.cpu + 
            this.state.motherboard + 
            this.state.gpu + 
            this.state.psu + 
            this.state.memory + 
            this.state.storage + 
            this.state.case + 
            this.state.cooler + 
            this.state.addStorage + 
            this.state.other
        )
        let isNegative
        if (remainder < 0){
            isNegative = true
        }
        this.setState({
            remainder,
            isNegative
        })
    }


    //sets recommended values in budget form
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
                    <p>The breakdowns shown are only recommended. Feel free to change the budget to better serve your needs. To avoid potential bottlenecking stay as close to these breakdowns as possible.</p>
                    <p>The cooler component will not automatically populate. For your first build we suggest purchasing a CPU that comes with a stock cooler. This will get you by for a while, depending on your build you may never need to upgrade. We have provided a slot for this component in case you want to plan to purchase one.</p>
                    <p>We have also provided slots for additional storage and an "Other" slot to catch all other components you may want to budget for but we missed. This will not populate when your budget is entered, but will update the remainder when entered.</p>
                    <p>Understand prices can change. Watch for sales and do your best to stay on budget for each item. Going even slightly over on each component can quickly increase the total cost of your build.</p>
                    <p>Component (Recommended/As Shown)</p>
                    <div className='budgetInputWrapper'>
                        <div className='budgetInputContainer'>
                            <p>CPU - (25% / {this.state.cpu ? <span>{parseInt((this.state.cpu/this.state.budget)*100)}%)</span> : <span>0%)</span>}</p>
                            <input type = 'number' name='cpu' value={this.state.cpu} onChange={this.onChange}/>    
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Cooler - (0% / {this.state.cooler ? <span>{parseInt((this.state.cooler/this.state.budget)*100)}%)</span> : <span>0%)</span>}</p>
                            <input type = 'number' name='cooler' value={this.state.cooler} onChange={this.onChange}/>    
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Motherboard - (12% /{this.state.motherboard ? <span>{parseInt((this.state.motherboard/this.state.budget)*100)}%)</span> : <span>0%)</span>}</p>  
                            <input type = 'number' name='motherboard' value={this.state.motherboard} onChange={this.onChange}/>    
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Graphics Card - (35% / {this.state.gpu ? <span>{parseInt((this.state.gpu/this.state.budget)*100)}%)</span> : <span>0%)</span>}</p>                      
                            <input type = 'number' name='gpu' value={this.state.gpu} onChange={this.onChange}/>                           
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Power Supply - (7% /{this.state.psu ? <span>{parseInt((this.state.psu/this.state.budget)*100)}%)</span> : <span>0%)</span>}</p>                                                     
                            <input type = 'number' name='psu' value={this.state.psu} onChange={this.onChange}/>    
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Memory - (7% /{this.state.memory ? <span>{parseInt((this.state.memory/this.state.budget)*100)}%)</span> : <span>0%)</span>}</p>
                            <input type = 'number' name='memory' value={this.state.memory} onChange={this.onChange}/>                       
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Storage - (7% /{this.state.storage ? <span>{parseInt((this.state.storage/this.state.budget)*100)}%)</span> : <span>0%)</span>}</p>
                            <input type = 'number' name='storage' value={this.state.storage} onChange={this.onChange}/>                         
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Extras Storage - (0% /{this.state.addStorage ? <span>{parseInt((this.state.addStorage/this.state.budget)*100)}%)</span> : <span>0%)</span>}</p>
                            <input type = 'number' name='addStorage' value={this.state.addStorage} onChange={this.onChange}/>                         
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Case - (7% / {this.state.case ? <span>{parseInt((this.state.case/this.state.budget)*100)}%)</span> : <span>0%)</span>}</p> 
                            <input type = 'number' name='case' value={this.state.case} onChange={this.onChange}/>                       
                        </div>
                        <div className='budgetInputContainer'>
                            <p>Other - (0% /{this.state.other ? <span>{parseInt((this.state.other/this.state.budget)*100)}%)</span> : <span>0%)</span>}</p>
                            <input type = 'number' name='other' value={this.state.other} onChange={this.onChange}/>                         
                        </div>
                    </div>
                </form>
                {this.state.isNegative ? <h3 className ='overBudget'>Over budget: ${this.state.remainder * -1}</h3>: <h3>Budget Left: ${this.state.remainder}</h3>}
                {this.state.budget && <button onClick={()=>this.updateRemainder()}>Update Remainder</button>}
            </div>
        )    
    }
    
}

export default BudgetTool;