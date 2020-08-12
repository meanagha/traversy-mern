
import React, { Component } from 'react';
import {
    Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, insertItem } from '../actions/itemAction';
// import uuid from 'react-uuid';//

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }
    handleChangeName = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleOnSubmit = e => {
        e.preventDefault();

        const newItem = {
            //  id: uuid(),
            name: this.state.name
        };

        // Add item via addItem action
        this.props.insertItem(newItem);
        // Close modal
        //handleToggle();
    };
    render() {


        const { items } = this.props.item;
        //  OR
        // const items = this.props.item.items;
        return (
            <Container>
                <Form onSubmit={this.handleOnSubmit}>
                    <FormGroup>
                        <Label for="item">Item</Label>
                        <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add shopping item"
                            onChange={this.handleChangeName}
                        />
                        <Button color="dark" style={{ marginTop: '2rem' }} block>
                            Add Item
              </Button>
                    </FormGroup>
                </Form>
                {/* <Button color="dark" style={{ marginTop: '2em' }} onClick={() => this.props.insertItem()}>Add Item</Button> */}
                <ListGroup style={{ marginTop: '2em' }}>
                    <TransitionGroup>
                        {
                            items.map((myvar, index) =>
                                <CSSTransition key={myvar._id} timeout={500} classNames='fade'>
                                    <ListGroupItem>
                                        <Button
                                            className='remove-btn'
                                            color='danger'
                                            size='sm'
                                            onClick={() => this.props.deleteItem(myvar._id)}>Delete</Button>
                                        {myvar.name}</ListGroupItem>
                                </CSSTransition>
                            )

                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }

}
const mapStateToProps = (state) => ({
    item: state.item //"item" in "state.item" is nothing but name of itemReducer from 'rootReducer'
})
export default connect(mapStateToProps, { getItems, deleteItem, insertItem })(ShoppingList);