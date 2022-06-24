
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
        editingIndex: '',
        }
    }
    addOrUpdateToDo(){
		const { inputTodo, isEditing, editingIndex } = this.state;
		if(inputTodo){
			if(isEditing) {
				this.setState((prevState) => ({
					todoItems: prevState.todoItems.map((todo, index) => {
						if(index === editingIndex)
							todo = inputTodo
						return todo
					}),
					inputTodo: "",
					isEditing: false,
					editingIndex: ''
				}))
			} else {
				this.setState((prevState) => ({
					todoItems: [...prevState.todoItems,  inputTodo ],
					inputTodo: "",
				}))
			}
		}
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
            editingIndex : i,
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
                        <Button variant="outline-primary" id="button-addon2" onClick={ () => this.addOrUpdateToDo()}>
                        {isEditing ? <AiFillEdit/> :<BiPlusMedical/>}</Button> 
                        
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
