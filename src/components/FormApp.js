import React, { Component } from 'react'

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  Calendar,
  AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

function onPanelChange(value, mode) {
  console.log(value, mode);
}



class FormApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      firstname: '',
      lastname: '',
      birthday: '',
      age: '',
      hobby: ''
    };
  }
  

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(this.state)
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  // compareToFirstPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && value !== form.getFieldValue('password')) {
  //     callback('Two passwords that you enter is inconsistent!');
  //   } else {
  //     callback();
  //   }
  // };

  // validateToNextPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && this.state.confirmDirty) {
  //     form.validateFields(['confirm'], { force: true });
  //   }
  //   callback();
  // };

  // handleWebsiteChange = value => {
  //   let autoCompleteResult;
  //   if (!value) {
  //     autoCompleteResult = [];
  //   } else {
  //     autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
  //   }
  //   this.setState({ autoCompleteResult });
  // };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    

    

    return (
      
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        
          <Form.Item
          label={
            <span>
              FirstName&nbsp;
              <Tooltip title="What is your FirstName?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please input your firstname!', whitespace: true }],
          })(<Input  placeholder="firstname" name="firstname" value={this.state.firstname}/>)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              LastName&nbsp;
              <Tooltip title="What is your lastname?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please input your lastname!', whitespace: true }],
          })(<Input  placeholder="lastname" name="lastname" value={this.state.lastname}/>)}
        </Form.Item>

        <Form.Item label={
            <span>
              Date of Birth&nbsp;
              <Tooltip title="What is your Birthday?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }>
          {getFieldDecorator('Birthday', {
            rules: [{ required: true, message: 'What is your Birthday!' }],
          })(<div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>)}
        </Form.Item>
        
        <Form.Item label={
            <span>
              Age&nbsp;
              <Tooltip title="What is your age?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }>
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'What is your age!' }],
          })(<Input   placeholder="age" type='number'style={{ width: '100%' }} name="age" value={this.state.age} />)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Hobby&nbsp;
              <Tooltip title="What are your hobbies?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('hobby', {
            rules: [{ required: true, message: 'Please input your hobby!', whitespace: true }],
          })(<Input  placeholder="your hobby" name="hobby" value={this.state.hobby}/>)}
        </Form.Item>
        
        
        
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onSubmit={this.handleSubmit}>
           Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const FormAp = Form.create({ name: 'register' })(FormApp);

export default FormAp;