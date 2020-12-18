import React, { Component } from 'react';
import TabBar from './TabBar'
import TabView from './TabView';
import All from './All'
import Active from './Active'
import Completed from './Completed'

class Tab extends Component {

    constructor(props){
        super(props);
        this.state = {
            active : 0
        }
    }

    onCurrentTabChanged = (index) => {
        this.setState({
            active : index
        })
    }

    render() {
        return (
            <>
              <TabBar active={this.state.active} onChanged={this.onCurrentTabChanged} />
              <TabView active={this.state.active}>
                  <All />
                  <Active />
                  <Completed />
              </TabView>
            </>
        );
    }
}

export default Tab;
