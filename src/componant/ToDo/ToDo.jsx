
import React, { Component } from 'react'
import {Container, Form ,Row,Col,InputGroup ,FormControl,Button,ListGroup } from 'react-bootstrap';

export default class ToDo extends Component {
    constructor(props){
        super(props)

        this.state = {
            todoItems: ["want to rivise Dsa",
            "started front end as well","want to study backend ", 
            "studing sql queries",
            "there are so many topic array"
        ],
        }
    }
  render() {
    const {todoItems} = this.state
    return (
        <>
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <InputGroup className="mb-3">
                        <FormControl size="lg"
                        placeholder="Enter your Todo Here!!!"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-primary" id="button-addon2">
                        Add
                        </Button>
                    </InputGroup>
                </Col>
                <Col md = {{  span: 6, offset: 3}}>
                    <ListGroup>
                    {todoItems.map(item =>{
                        return(<Row>
                            <Col className='todoitems' >
                                <ListGroup.Item className='listitem'>{item}</ListGroup.Item>
                                <div>
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger">Del</Button>{' '}
                                </div>
                            </Col>
                        </Row>)

                        
                        
                    })}
                          {/* <ListGroup.Item>vish</ListGroup.Item>
                          <ListGroup.Item>vish</ListGroup.Item>
                          <ListGroup.Item>vishd</ListGroup.Item>
                          <ListGroup.Item>vishd</ListGroup.Item> */}
                    </ListGroup>
                    
                        
                        
                    

                </Col>
            </Container>
        </>
    )
  }
}
