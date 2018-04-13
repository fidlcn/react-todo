import React, { Component } from 'react';
import './common.css';
import '../App.css';
import 'antd/dist/antd.css';

class Content extends Component{
    constructor(props){
        super(props);
        this.state = { set:[this.props.states.set[0]]};
        this.handleBtnStatusChange = this.handleBtnStatusChange.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if( nextProps.states.set[0].title !== undefined){
            if(this.state.set[0] === undefined){
                this.setState({set:[nextProps.states.set[0]]});
            }else{
                this.setState({set:this.state.set.concat(nextProps.states.set[0])});
            }
        }
    }
    handleBtnStatusChange(e){
       console.log(e.target)
    }
    render(){
        let items = {};
        if(this.state.set[0] === undefined){
            items = {set:[{title:'请在左侧添加事项',content:'请在左侧添加内容',isOn:false}]};
        }else{
            items = this.state;
        }
        return(
            <div  className='content'>
                <ul className='ulList'>
                {
                    items.set.map((item,i)=>{
                        let isOn = item.isOn;
                        return (
                            <li key={i} >
                                <span>{i+1}</span>
                                <div className='ulDiv'>
                                    <h3>{item.title}</h3>
                                    {item.content}
                                </div>
                                <div className='ulBtn'>
                                    {isOn ? (
                                        <input type="button" value="Y" />):(
                                        <input type="button" value="Y" disabled />
                                    )}
                                    <input type='button'  value="N" onClick={this.handleBtnStatusChange} />
                                </div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Content;