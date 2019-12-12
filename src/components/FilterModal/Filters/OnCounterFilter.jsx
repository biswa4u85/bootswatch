import React from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

class OnCounterFilter extends React.Component {
    constructor(props) {
        super(props);

        this.defaultValues = [
            {
                label: 'None Set',
                value: null
            },
            {
                label: 'All Special',
                value: 'all'
            },
            {
                label: 'Knock Down',
                value: 'KND'
            },
            {
                label: 'Launch',
                value: 'Launch'
            },
            {
                label: 'Juggle Starter',
                value: 'JG'
            },
            {
                label: 'Tail Spin',
                value: 'Tail spin'
            },
            {
                label: 'Crumple Stun',
                value: 'CS'
            },
            {
                label: 'Throw',
                value: 'Throw'
            }
        ];

        this.getDropdownLabel = this.getDropdownLabel.bind(this);
        this.handleOptionSelect = this.handleOptionSelect.bind(this);
    }

    getDropdownLabel() {
        const { value } = this.props;
        const selectedValue = this.defaultValues.find(defaultValue =>
            defaultValue.value === value);

        if (selectedValue) {
            return selectedValue.label;
        }
        return;
    }

    handleOptionSelect(value) {
        this.props.onOptionSelect(value.value);
    }

    render() {
        const options = this.defaultValues.map((value, index) => (
            <Dropdown.Item
                key={`oncounter-option-${index}`}
                onClick={() => this.handleOptionSelect(value)}
            >
                {value.label}
            </Dropdown.Item>
        ));

        return (
            <Form.Group>
                <Form.Label className="mr-2">On Counter</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle>{this.getDropdownLabel()}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {options}
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
        )
    }
}

OnCounterFilter.propTypes = {
    value: PropTypes.string,
    onOptionSelect: PropTypes.func.isRequired
}

OnCounterFilter.defaultProps = {
    value: null
};

export default OnCounterFilter;