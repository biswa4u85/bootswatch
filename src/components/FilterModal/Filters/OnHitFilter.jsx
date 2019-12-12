import React from 'react';
import { Collapse, Form, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

class OnHitFilter extends React.Component {
    constructor(props) {
        super(props);

        this.defaultValues = [
            { 
                label: 'None Set',
                min: null,
                max: null
            },
            {
                label: 'Plus on hit', 
                min: 1, 
                max: Number.MAX_SAFE_INTEGER 
            },
            {
                label: 'Neutral on hit',
                min: 0,
                max: 0
            },
            {
                label: 'Minus on hit',
                min: Number.MIN_SAFE_INTEGER,
                max: -1
            }
        ];

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
        const selectedValue = this.defaultValues.find(value => 
            value.min === min && value.max === max);
        
        if (selectedValue) {
            return selectedValue.label;
        }
        return 'Custom';
    }

    handleValueChange(event) {
        this.props.onChange(
            event.target.id,
            event.target.value
        );
    }

    handleOptionSelect(value) {
        this.props.onOptionSelect(value.min, value.max);
        this.setState({ showCustomFilters: false });
    }

    handleShowCustomFilter() {
        this.props.onOptionSelect('', '');
        this.setState({ showCustomFilters: true });
    }

    render() {
        const options = this.defaultValues.map((value, index) => (
            <Dropdown.Item
                key={`onhit-option-${index}`}
                onClick={() => this.handleOptionSelect(value)}
            >
                {value.label}
            </Dropdown.Item>
        ));

        return (
            <Form.Group>
                <Form.Label className="mr-2">On Hit</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle>{this.getDropdownLabel()}</Dropdown.Toggle>
                    <Dropdown.Menu>
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
                            id="onHitMin"
                            placeholder="Min"
                            value={this.props.min}
                            onChange={this.handleValueChange}
                        />
                        <Form.Control
                            className="filter-input"
                            type="number"
                            id="onHitMax"
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

OnHitFilter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onOptionSelect: PropTypes.func.isRequired
}

export default OnHitFilter;