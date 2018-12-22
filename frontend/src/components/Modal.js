import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
    super(props);
    this.state = {
        activeItem: this.props.activeItem
    };
    }
    handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
        value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
    };
    render() {
    const { toggle, onSave } = this.props;
    return (
        <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Todo Item </ModalHeader>
        <ModalBody>
            <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                type="text"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Contact Name"
                />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone number</Label>
                <Input
                type="number"
                name="phone"
                value={this.state.activeItem.phone}
                onChange={this.handleChange}
                placeholder="Enter Phone Number"
                />
            </FormGroup>
            <FormGroup>
                <Label for="address">Address</Label>
                <Input
                type="text"
                name="address"
                value={this.state.activeItem.address}
                onChange={this.handleChange}
                placeholder="Enter Address"
                />
            </FormGroup>
            <FormGroup>
                <Label for="zip_code">Zip Code</Label>
                <Input
                type="number"
                name="zip_code"
                value={this.state.activeItem.zip_code}
                onChange={this.handleChange}
                placeholder="Enter Zip Code"
                />
            </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
            </Button>
        </ModalFooter>
        </Modal>
    );
    }
}