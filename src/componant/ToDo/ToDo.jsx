
import React, { Component } from 'react'
import {Container, Form ,Row,Col,InputGroup ,FormControl,Button,ListGroup } from 'react-bootstrap';
import "./ToDo.css"
import { AiFillEdit } from "react-icons/ai";
import { FaTrash} from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi"

export default class ToDo extends Component {
    constructor(props){
        super(props)

        this.state = {
            inputTodo: '',
            todoItems: ["want to rivise Dsa",
            "started front end as well","want to study backend ", 
            "studing sql queries",
            "there are so many topic array"
        ],
        isEditing : false,
        }
    }
    addorUpdateTodo = () => {
        const {isEditing} = this.state;
        isEditing = !isEditing;
    
        this.setState({

        })
    }
    delete = (i) => {
        const {todoItems} = this.state;
        let updatedtodoItems = todoItems.filter((todoText, index) => i !== index)
        this.setState( {
            todoItems: updatedtodoItems,
        });


    }
    edit = (i) => {
        this.setState((prevState) => ({
            inputTodo: prevState.todoItems[i],
            isEditing: true,
        }));
        

    }
  render() {
    const {inputTodo,todoItems,isEditing} = this.state
    return (
        <>
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <InputGroup className="mb-3">
                        <FormControl size="lg"
                        placeholder="Enter your Todo Here!!!"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={inputTodo}
                        onChange = {(e) => this.setState({inputTodo: e.target.value})}
                        />
                        <Button variant="outline-primary" id="button-addon2" onClick={() => {
                        //      const {isEditing} = this.state;
                        //    if(isEditing == true){
                        //      isEditing = false;
                        //    }
                        //    else{
                        //     isEditing = true;
                        //    }
                        // //    console.log()
                           if(inputTodo !== ""){
                               this.setState(prevState => ({
                                   todoItems : [...prevState.todoItems,inputTodo],
                                   inputTodo: ''
                               }))

                           }
                           else{
                             alert("please Entere todo TEXT!!!")
                           }

                        }}>
                        {isEditing ? <AiFillEdit/> :<BiPlusMedical/>}
                        </Button>
                    </InputGroup>
                </Col>
                <Col md = {{  span: 6, offset: 3}}>
                    <ListGroup>
                    {todoItems.map((item ,index)=>{
                        return(<Row key = {index} >
                            <Col className='todoitems' >
                                <ListGroup.Item className='listitem'>{item}</ListGroup.Item>
                                <div>
                                <Button className='button' variant="warning" onClick={() => this.edit(index)} ><AiFillEdit/></Button>{' '}
                                <Button  className='button' variant="danger" onClick={() => this.delete(index)}><FaTrash/></Button>{' '}
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
