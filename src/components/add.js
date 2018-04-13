import React from 'react';
import { Button, Input } from 'antd'
import 'antd/dist/antd.css';
import './common.css';
import '../App.css';

const { TextArea } = Input;

class Add extends React.Component{
    constructor(props){
        super(props);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSaveT = this.handleSaveT.bind(this);
        this.handleSaveC = this.handleSaveC.bind(this);
        this.state = {title:'',content:'',isOn:true};
    }
    handleSaveT(e){
        this.setState({title:e.target.value})
    }
    handleSaveC(e){
        this.setState({content:e.target.value});
        this.setState({isOn:true});
    }
    handleUpload(){
        this.props.onSave(this.state)
    }
    render(){
        return(
            <div className="Add">
                <h2>Todo内容添加</h2>
                <div className='inputArea'>
                    <Input addonBefore="标题" onChange={this.handleSaveT} />
                    <TextArea rows={18} id='titleInput' placeholder='在此输入内容' onChange={this.handleSaveC} />
                </div>
                <Button type="primary" onClick={this.handleUpload}>添加</Button>
            </div>
        )
    }
}

export default Add;