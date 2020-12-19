import React, { Component } from 'react'
import sheet from './TabView.module.css'

class TabView extends Component {
    constructor(props){
        super(props)
        this.divRef = React.createRef();
        this.state = {
            lastActive : this.props.active
        }
    }

    componentDidMount(){
        this.handleScroll()
    }

    componentDidUpdate(oldProps){
        if(oldProps.active !== this.props.active){
            this.handleScroll()
        }
    }

    handleScroll = () => {
        const div = this.divRef.current;
        const width = parseInt(window.getComputedStyle(div).width.slice(0, -2));

        if(this.state.lastActive > this.props.active){
            //go left
            if(this.props.active === 0){
                div.scrollBy(-(width *2), 0);
            }else if(this.props.active === 1){ 
                div.scrollBy(-(width * 0.3333), 0);
            }else{
                div.scrollBy(-(width * 2), 0);
            }
        }else if(this.state.lastActive < this.props.active){
            //go right
            if(this.props.active === 0){
                div.scrollBy(0, 0);
            }else if(this.props.active === 1){ 
                div.scrollBy(width * 0.3333, 0);
            }else{
                div.scrollBy(width * 2, 0);
            }
        }else{
        }
        this.setState({
            lastActive : this.props.active
        })
    }
    
    render() {
        return (
            <div ref={this.divRef} className={sheet.slides}>
                {this.props.children}
            </div>
        )
    }
}

export default TabView