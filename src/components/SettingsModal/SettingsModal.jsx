import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Modal, Button, Form, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { applySettings } from '../../actions/settingsActions';

class SettingsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props,
            showModal: false
        };

        this.buttonStyles = [
            'PS',
            'XB',
            'ARCADE'
        ];

        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleApplyClick = this.handleApplyClick.bind(this);
    }

    handleSwitchChange(event) {
        this.setState({ 
            [event.target.id]: event.target.checked
        });
    }

    handleStyleClick(buttonStyle){
        this.setState({ buttonStyle })
    }

    handleShowModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleApplyClick() {
        this.props.applySettings({
            displayButtonInput: this.state.displayButtonInput,
            displayNotationInput: this.state.displayNotationInput,
            buttonStyle: this.state.buttonStyle
        });
        this.setState({ showModal: false });
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.handleShowModal}>
                    <FontAwesomeIcon icon={faCog} />
                </Button>
                <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Command Display</Form.Label>
                                            <Form.Check
                                                id="displayButtonInput"
                                                type="switch"
                                                label="Display Button Inputs"
                                                checked={this.state.displayButtonInput}
                                                onChange={this.handleSwitchChange}
                                            />
                                            <Form.Check
                                                id="displayNotationInput"
                                                type="switch"
                                                label="Display Notation"
                                                checked={this.state.displayNotationInput}
                                                onChange={this.handleSwitchChange}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Button Display Style</Form.Label>
                                            <Dropdown disabled>
                                                <Dropdown.Toggle disabled>
                                                    {this.state.buttonStyle}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {this.buttonStyles.map(style => 
                                                        <Dropdown.Item
                                                            key={`dropdown-item-${style}`}
                                                            onClick={() => {this.handleStyleClick(style)}}
                                                        >
                                                            {style}
                                                        </Dropdown.Item>
                                                    )}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleApplyClick}>
                            Apply
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

SettingsModal.propTypes = {
    displayButtonInput: PropTypes.bool.isRequired,
    displayNotationInput: PropTypes.bool.isRequired,
    buttonStyle: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    displayButtonInput: state.settings.displayButtonInput,
    displayNotationInput: state.settings.displayNotationInput,
    buttonStyle: state.settings.buttonStyle
});

export default connect(mapStateToProps, { applySettings })(SettingsModal);