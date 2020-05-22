import React, {Component} from 'react';
import Phonebook from "./components/Phonebook";
import List from "./components/List/List";
import {connect} from 'react-redux';
import {getFilterValue, addContact,deleteItem} from './components/redux/contactActions'

class App extends Component {

    // state = {
    //     contacts: [ ],
    //     filter: '',
    // }


    componentDidMount() {

        this.setState({
            contacts: JSON.parse(localStorage.getItem('contacts')) || []
        });
    }


    filterList = () => {
            return this.props.contacts.filter(contact =>
                contact.contact.toLowerCase().includes(this.props.filter)
            );
    }

    // getFilterValue = (e) => {
    //     this.setState({filter: e.target.value})
    // }

    // getContactInfo = (newContact) => {
    //     this.props.addContact(newContact)
    // }

    // deleteItem = (e) => {
    //     const id = e.target.id;
    //     this.props.deleteItem(id);
        // this.deleteFromLocalStorage(e)
    // }

    // deleteFromLocalStorage(e) {
    //     const id = e.target.id;
    //     const LocalStorageArray = (JSON.parse(localStorage.getItem('contacts')));
    //     let FilterArray = LocalStorageArray.filter(item => item.id !== id);
    //     contacts: localStorage.setItem('contacts', JSON.stringify(FilterArray))
    //
    // }

    render() {
        return (
            <>
                <Phonebook
                    addContact={this.props.addContact}
                    getFilterValue={this.props.getFilterValue}
                    contacts={this.filterList()}

                />
                <List
                    contacts={this.filterList()}
                    // filterList={this.filterList()}
                    filter={this.props.filter}
                    getFilterValue={this.props.getFilterValue}
                    deleteItem={this.props.deleteItem}
                />
            </>
        );
    }

}

const mapStateProps = state => (
    {
        contacts: state.contacts,
        filter: state.filter
    })




export default connect(mapStateProps, {getFilterValue, addContact, deleteItem})(App);

