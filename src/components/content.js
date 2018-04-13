import React, { Component } from 'react';
import './common.css';
import '../App.css';
import 'antd/dist/antd.css';

class Content extends Component{
    constructor(props){
        super(props);
        // this.state ={ set:[
        //                 {title:'标题1',content:'aoefjiojfoiajofjaoi',isOn:true},
        //                 {title:'title2',content:'asdfasdfasfeafadfsaf',isOn:false}
        //             ]};
        this.state = { set:[this.props.states.set[0]]};
        this.handleBtnStatusChange = this.handleBtnStatusChange.bind(this);
    }
    
    // componentDidMount(){
    //     // if(this.state.set[0] == 'undefined'){
    //     //     this.setState({set:[this.props.states.set]})
    //     // }else{
    //     //     let setData = this.state.set.concat(this.props.states.set[0]);
    //     //     this.setState({set:[setData]});
    //     // }
    //     this.setState({set:this.props.states.set[0]})
    // }
    handleBtnStatusChange(e){
        console.log(e);
        console.log(this);
    }
    render(){
        console.log(this.props.states.set)
        console.log(this.state)
        return(
            <div  className='content'>
                <ul className='ulList'>
                {
                    this.state.set.map((item,i)=>{
                        let isOn = item.isOn;
                        return (
                            <li key={i}>
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

    //把props的state绑定到state上，判断：如果为空不赋值，如果有则赋值
    //父组件只负责传递数据，数据累加放到此组件解决 push()
