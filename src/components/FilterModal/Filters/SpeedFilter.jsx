import React from 'react';
import { Collapse, Form, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

class SpeedFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCustomFilters: this.props.min !== this.props.max
        }

        this.getDropdownLabel = this.getDropdownLabel.bind(this);
        this.handleOptionSelect = this.handleOptionSelect.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleShowCustomFilter = this.handleShowCustomFilter.bind(this);
    }

    getDropdownLabel() {
        const { min, max } = this.props;
        if (min !== max || this.state.showCustomFilters) {
            return 'Custom';
        }
        if (!min && !max) {
            return 'None Set'
        }
        if (min === max) {
            return `${min} Frames`;
        }
    }

    handleValueChange(event) {
        this.props.onChange(
            event.target.id,
            event.target.value
        );
    }

    handleOptionSelect(value) {
        this.props.onOptionSelect(value);
        this.setState({ showCustomFilters: false });
    }

    handleShowCustomFilter() {
        this.props.onOptionSelect('');
        this.setState({ showCustomFilters: true });
    }

    render() {
        const frameValues = [10,11,12,13,14,15];
        const options = frameValues.map(value => (
            <Dropdown.Item
                key={`speed-option-${value}`}
                onClick={() => this.handleOptionSelect(value)}
            >
                {`${value} Frames`}
            </Dropdown.Item>
        ));

        return (
            <Form.Group>
                <Form.Label className="mr-2">Speed</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle>{this.getDropdownLabel()}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => this.handleOptionSelect(null)}>
                            None
                        </Dropdown.Item>
                        {options}
                        <Dropdown.Item 
                            onClick={this.handleShowCustomFilter}
                        >
                            Custom
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Collapse in={this.state.showCustomFilters}>
                    <div className="mt-2">
                        <Form.Control
                            className="filter-input mr-2"
                            type="number"
                            id="speedMin"
                            placeholder="Min"
                            value={this.props.min}
                            onChange={this.handleValueChange}
                        />
                        <Form.Control
                            className="filter-input"
                            type="number"
                            id="speedMax"
                            placeholder="Max"
                            value={this.props.max}
                            onChange={this.handleValueChange}
                        />
                    </div>
                </Collapse>
            </Form.Group>
        )
    }
}

SpeedFilter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onOptionSelect: PropTypes.func.isRequired
}

export default SpeedFilter;