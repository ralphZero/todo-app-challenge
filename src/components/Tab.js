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

    handleNewTodo = (todo) => {
        this.props.onAddData(todo)
    }

    handleItemCheck = (key, value) => {
        this.props.onChangedData(key, value)
    }

    handleDelete = (id) => {
        this.props.onDeleteData(id)
    }

    render() {
        return (
            <>
              <TabBar active={this.state.active} onChanged={this.onCurrentTabChanged} />
              <TabView active={this.state.active}>
                  <All data={this.state.data} sender={this.handleNewTodo} onChecked={this.handleItemCheck}/>
                  <Active data={this.state.data} sender={this.handleNewTodo} onChecked={this.handleItemCheck}/>
                  <Completed data={this.state.data} onChecked={this.handleItemCheck} onDeleted={this.handleDelete}/>
              </TabView>
            </>
        );
    }
}

export default Tab;
