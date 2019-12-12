import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { CommandRenderer } from '../CommandRenderer/CommandRenderer';
import { LeftInput } from './LeftInput/LeftInput';
import { RightInput } from './RightInput/RightInput';
import { applyCommandFilter } from '../../actions/filterActions';
import './SearchModal.scss';

class SearchModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showFilterModal: false,
            commandFilterValue: this.props.commandFilterValue,
            lastInputIsDirection: false,
            lastInputIsTilde: false
        };

        this.handleShowFilterModal = this.handleShowFilterModal.bind(this);
        this.handleCloseFilterModal = this.handleCloseFilterModal.bind(this);
        this.handleClearInput = this.handleClearInput.bind(this);
        this.handleClearFilter = this.handleClearFilter.bind(this);
        this.handleApplyFilter = this.handleApplyFilter.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDirectionClick = this.handleDirectionClick.bind(this);
        this.handleAttackClick = this.handleAttackClick.bind(this);
        this.handleTildeClick = this.handleTildeClick.bind(this);
    }

    handleShowFilterModal() {
        this.setState({
            showFilterModal: true,
            commandFilterValue: this.props.commandFilterValue
        });
    }

    handleCloseFilterModal() {
        this.setState({ showFilterModal: false });
    }

    handleClearInput() {
        this.setState({
            commandFilterValue: ''
        });
    }

    handleClearFilter() {
        this.setState({
            commandFilterValue: '',
            showFilterModal: false
        })
        this.props.applyCommandFilter('');
    }

    handleApplyFilter() {
        this.props.applyCommandFilter(this.state.commandFilterValue);
        this.setState({ showFilterModal: false });
    }

    handleInputChange(event) {
        this.setState({ commandFilterValue: event.target.value });
    }

    handleDirectionClick(value) {
        let currentFilterValue = this.state.commandFilterValue;

        if (currentFilterValue.length > 0) {
            currentFilterValue += ', ';
        }
        currentFilterValue += value;

        this.setState({
            commandFilterValue: currentFilterValue,
            lastInputIsDirection: true,
            lastInputIsTilde: false
        });
    }

    handleAttackClick(value) {
        let currentFilterValue = this.state.commandFilterValue;

        if (currentFilterValue.length > 0 && 
            !this.state.lastInputIsDirection &&
            !this.state.lastInputIsTilde) {
            currentFilterValue += ', ';
        } else if (currentFilterValue.length > 0 && 
            this.state.lastInputIsDirection &&
            !this.state.lastInputIsTilde) {
            currentFilterValue += '+';
        }

        currentFilterValue += value;
        this.setState({
            commandFilterValue: currentFilterValue,
            lastInputIsDirection: false,
            lastInputIsTilde: false
        });
    }

    handleTildeClick() {
        this.setState(prevState => ({
            lastInputIsTilde: true,
            commandFilterValue: `${prevState.commandFilterValue}~`
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.handleShowFilterModal}>
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
                <Modal show={this.state.showFilterModal} onHide={this.handleCloseFilterModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Search</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>
                                            <span className="mr-2">Command:</span>
                                            <CommandRenderer command={this.state.commandFilterValue} />
                                        </Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter notation here"
                                                value={this.state.commandFilterValue}
                                                onChange={this.handleInputChange}
                                                aria-describedby="inputGroupPrepend"
                                            />
                                            <InputGroup.Append>
                                                <Button 
                                                    variant="danger"
                                                    onClick={this.handleClearInput}
                                                >
                                                    Clear
                                                </Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <LeftInput
                                        handleDirectionClick={this.handleDirectionClick}
                                    />
                                </Col>
                                <Col>
                                    <RightInput 
                                        handleAttackClick={this.handleAttackClick} 
                                        handleTildeClick={this.handleTildeClick}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseFilterModal}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={this.handleClearFilter}>
                            Clear
                        </Button>
                        <Button variant="primary" onClick={this.handleApplyFilter}>
                            Apply
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

SearchModal.propTypes = {
    commandFilterValue: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    commandFilterValue: state.filters.commandFilterValue
});

export default connect(mapStateToProps, { applyCommandFilter })(SearchModal);