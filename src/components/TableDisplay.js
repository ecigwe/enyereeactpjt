import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd'

export default class TableDisplay extends Component {
    constructor(props){
        super(props);
        

    }

    
    render() {

        const { Column, ColumnGroup } = Table;

            const data = [
            {
                key: '1',
                firstName: 'John',
                lastName: 'Brown',
                birthday: 32,
                age: 'New York No. 1 Lake Park',
                hobby: 'New York No. 1 Lake Park'
                
            },
            {
                key: '2',
                firstName: 'John',
                lastName: 'Brown',
                birthday: 32,
                age: 'New York No. 1 Lake Park',
                hobby: 'New York No. 1 Lake Park'
               
            },
            {
                key: '3',
                firstName: 'John',
                lastName: 'Brown',
                birthday: 32,
                age: 'New York No. 1 Lake Park',
                hobby: 'New York No. 1 Lake Park'
               
            },
            ];
        return (
            <div>

                <Table dataSource={data}>
                    
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    <Column title="Birthday" dataIndex="birthday" key="birthday" />
                    
                    <Column title="Age" dataIndex="age" key="age" />
                    <Column title="Hobby" dataIndex="hobby" key="hobby" />
                   
                   
                </Table>
                                
            
            </div>
        )
    }}



