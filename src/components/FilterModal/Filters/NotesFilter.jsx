import React from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

class NotesFilter extends React.Component {
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
                label: 'Rage Art',
                value: 'Rage art'
            },
            {
                label: 'Rage Drive',
                value: 'Rage drive'
            },
            {
                label: 'Tail Spin',
                value: 'Tail spin'
            },
            {
                label: 'Homing',
                value: 'Homing'
            },
            {
                label: 'Power Crush',
                value: 'Power crush'
            },
            {
                label: 'Wall Bound',
                value: 'Wall bound'
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
                key={`onblock-option-${index}`}
                onClick={() => this.handleOptionSelect(value)}
            >
                {value.label}
            </Dropdown.Item>
        ));

        return (
            <Form.Group>
                <Form.Label className="mr-2">Notes</Form.Label>
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

NotesFilter.propTypes = {
    value: PropTypes.string,
    onOptionSelect: PropTypes.func.isRequired
};

NotesFilter.defaultProps = {
    value: null
};

export default NotesFilter;