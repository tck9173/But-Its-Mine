import React, {Component} from 'react';
import FeaturedBenchmark from './FeaturedBenchmark';
import FeaturedGame from './FeaturedGame';
import FeaturedNews from './FeaturedNews';
import FeaturedBuild from './FeaturedBuild'


class HomepageContainer extends Component {
    constructor(props){
        super(props);

        this.state={
            renderComponent : 2,
            minRender: 1,
            maxRender: 4
        }
    }
    changePage=(direction)=> {
        let renderComponent = this.state.renderComponent;
        if( renderComponent === this.state.maxRender && direction === 1) {
            renderComponent = this.state.minRender;
            this.setState({
                renderComponent: renderComponent
            })
        } else if (renderComponent === this.state.minRender && direction === -1) {
            renderComponent = this.state.maxRender;
            this.setState({
                renderComponent: renderComponent
            })
        } else {
            this.setState({
                renderComponent: renderComponent + direction
            })
        }
    }

    render() {
        return (
            <div className = 'main'>
                <div className='homepageButtons'>
                    <button onClick={()=> this.changePage(-1)}>&#10094;</button> 
                    <p>Select Page</p>
                    <button onClick={()=> this.changePage(1)}>&#10095;</button>
                </div>
                
                {this.state.renderComponent === 1 && <FeaturedBenchmark/>}
                {this.state.renderComponent === 2 && <FeaturedBuild/>}
                {this.state.renderComponent === 3 &&<FeaturedNews/>}
                {this.state.renderComponent === 4 &&<FeaturedGame/>}
                
            </div>
        )
    }
}

export default HomepageContainer;