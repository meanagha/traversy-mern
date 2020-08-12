
import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, insertItem } from '../actions/itemAction';
import uuid from 'react-uuid';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }
    render() {
        const { items } = this.props.item;
        //  OR
        // const items = this.props.item.items;
        return (
            <Container>
                {/* {
                    const name = prompt("Enter Name")
                    if (name) {
                    this.setState({
                        items: [...this.state.items, { id: uuid(), name: name }]
                    })
                }

                } */}
                <Button color="dark" style={{ marginTop: '2em' }} onClick={() => this.props.insertItem()}>Add Item</Button>
                <ListGroup style={{ marginTop: '2em' }}>
                    <TransitionGroup>
                        {
                            items.map((myvar, index) =>
                                <CSSTransition key={myvar.id} timeout={500} classNames='fade'>
                                    <ListGroupItem>
                                        <Button
                                            className='remove-btn'
                                            color='danger'
                                            size='sm'
                                            onClick={() => this.props.deleteItem(myvar.id)}>Delete</Button>
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