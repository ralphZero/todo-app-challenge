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
            active : 0,
            data : []
        }
    }

    componentDidMount(){
        this.setState({
            data : this.props.data
        })
    }

    componentDidUpdate(oldProp){
        if(oldProp.data !== this.props.data){
            this.setState({
                data : this.props.data
            })
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
                  <All data={this.state.data} />
                  <Active data={this.state.data} />
                  <Completed data={this.state.data} />
              </TabView>
            </>
        );
    }
}

export default Tab;
