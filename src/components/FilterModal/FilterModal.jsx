import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import SpeedFilter from './Filters/SpeedFilter';
import OnBlockFilter from './Filters/OnBlockFilter';
import OnHitFilter from './Filters/OnHitFilter';
import OnCounterFilter from './Filters/OnCounterFilter';
import NotesFilter from './Filters/NotesFilter';
import { applyFilters } from '../../actions/filterActions';
import './FilterModal.scss';

class FilterModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showFilterModal: false,
            filters: this.props.filters //spread props?
        };

        this.handleShowFilterModal = this.handleShowFilterModal.bind(this);
        this.handleCloseFilterModal = this.handleCloseFilterModal.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSpeedSelect = this.handleSpeedSelect.bind(this);
        this.handleOnBlockSelect = this.handleOnBlockSelect.bind(this);
        this.handleOnHitSelect = this.handleOnHitSelect.bind(this);
        this.handleOnCounterSelect = this.handleOnCounterSelect.bind(this);
        this.handleNotesSelect = this.handleNotesSelect.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
        this.handleApplyClick = this.handleApplyClick.bind(this);
    }

    handleShowFilterModal() {
        this.setState({
            showFilterModal: true,
            filters: this.props.filters
        });
    }

    handleCloseFilterModal() {
        this.setState({ showFilterModal: false });
    }

    handleValueChange(key, value) {
        this.setState({
            filters: {
                ...this.state.filters,
                [key]: value
            }
        });
    }

    handleSpeedSelect(value) {
        this.setState({
            filters: {
                ...this.state.filters,
                speedMin: value,
                speedMax: value
            }
        });
    }

    handleOnBlockSelect(min, max) {
        this.setState({
            filters: {
                ...this.state.filters,
                onBlockMin: min,
                onBlockMax: max
            }
        });
    }

    handleOnHitSelect(min, max) {
        this.setState({
            filters: {
                ...this.state.filters,
                onHitMin: min,
                onHitMax: max
            }
        });
    }

    handleOnCounterSelect(value) {
        this.setState({
            filters: {
                ...this.state.filters,
                onCounterValue: value
            }
        });
    }

    handleNotesSelect(value) {
        this.setState({
            filters: {
                ...this.state.filters,
                notesValue: value
            }
        });
    }

    handleClearClick() {
        this.setState({
            showFilterModal: false
        });
        this.props.applyFilters({
            speedMin: null,
            speedMax: null,
            onBlockMin: null,
            onBlockMax: null,
            onHitMin: null,
            onHitMax: null,
            onCounterValue: null,
            notesValue: null
        });
    }

    handleApplyClick() {
        this.setState({
            showFilterModal: false
        });
        this.props.applyFilters(this.state.filters);
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.handleShowFilterModal}>
                    <FontAwesomeIcon icon={faFilter} />
                </Button>
                <Modal show={this.state.showFilterModal} onHide={this.handleCloseFilterModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Filter</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="mb-2">
                            <SpeedFilter
                                min={this.state.filters.speedMin}
                                max={this.state.filters.speedMax}
                                onChange={this.handleValueChange}
                                onOptionSelect={this.handleSpeedSelect}
                            />
                            <OnBlockFilter
                                min={this.state.filters.onBlockMin}
                                max={this.state.filters.onBlockMax}
                                onChange={this.handleValueChange}
                                onOptionSelect={this.handleOnBlockSelect}
                            />
                            <OnHitFilter
                                min={this.state.filters.onHitMin}
                                max={this.state.filters.onHitMax}
                                onChange={this.handleValueChange}
                                onOptionSelect={this.handleOnHitSelect}
                            />
                            <OnCounterFilter 
                                value={this.state.filters.onCounterValue}
                                onOptionSelect={this.handleOnCounterSelect}
                            />
                            <NotesFilter
                                value={this.state.filters.notesValue}
                                onOptionSelect={this.handleNotesSelect}
                            />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseFilterModal}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={this.handleClearClick}>
                            Clear
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

FilterModal.propTypes = {
    filters: PropTypes.shape({
        commandFilterValue: PropTypes.string,
        speedMin: PropTypes.number, // fix types
        speedMax: PropTypes.number,
        onBlockMin: PropTypes.number,
        onBlockMax: PropTypes.number,
        onHitMin: PropTypes.number,
        onHitMax: PropTypes.number,
        onCounterValue: PropTypes.string,
        notesValue: PropTypes.string
    }).isRequired
    // apply filters func in props?
}

const mapStateToProps = state => ({
    filters: state.filters,
});

export default connect(mapStateToProps, { applyFilters })(FilterModal);