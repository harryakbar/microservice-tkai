import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      addressList: [],
      activeItem: {
        name: "",
        phone: "",
        address: "",
        zip_code: ""
      }
    };
  }

  componentDidMount() {
    this.refreshList();
  };

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/addresses/")
      .then(res => this.setState({ addressList: res.data }))
      .catch(err => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/addresses/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/addresses/", item)
      .then(res => this.refreshList());
  };

  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/addresses/${item.id}`)
      .then(res => this.refreshList());
  };

  createItem = () => {
    const item = { name: "", phone: "", address: "", zip_code: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const newItems = this.state.addressList;

    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span className="addressbook-name">
          {item.name}
        </span>
        <span className="addressbook-name">
          {item.phone}
        </span>
        <span className="addressbook-name">
          {item.address}
        </span>
        <span className="addressbook-name">
          {item.zip_code}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)} 
            className="btn btn-secondary mr-2"
          > 
            {" "}
            Edit{" "} 
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  }

  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Address Book</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button 
                  onClick={this.createItem}
                  className="btn btn-primary"
                >
                  Add Contact
                </button>
              </div>
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
