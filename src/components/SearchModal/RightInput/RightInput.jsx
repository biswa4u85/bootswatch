import React from "react";
import PropTypes from 'prop-types';
import { Card, Dropdown } from 'react-bootstrap';
import { CommonButtonInput } from './CommonButtonInput';
import { OtherButtonInput } from './OtherButtonInput';

export class RightInput extends React.Component {
    constructor(props) {
        super(props);

        this.inputModes = ['Common', 'Other'];

        this.state = {
            shownInput: this.inputModes[0]
        };

        this.renderContent = this.renderContent.bind(this);
    }

    handleInputSelect(input) {
        this.setState({ shownInput: input });
    }

    renderDropdownItems() {
        return this.inputModes.map((inputMode) => (
            <Dropdown.Item onClick={() => this.handleInputSelect(inputMode)}>
                {inputMode}
            </Dropdown.Item>
        ))
    }

    renderContent() {
        switch (this.state.shownInput) {
            case 'Common':
                return (
                    <CommonButtonInput 
                        handleAttackClick={this.props.handleAttackClick}
                        handleTildeClick={this.props.handleTildeClick}
                    />
                );
            case 'Other':
                return (
                    <OtherButtonInput handleAttackClick={this.props.handleAttackClick} />
                )
            default:
                return;
        }
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Dropdown className="mb-3">
                        <Dropdown.Toggle>{this.state.shownInput}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.renderDropdownItems()}
                        </Dropdown.Menu>
                    </Dropdown>
                    {this.renderContent()}
                </Card.Body>
            </Card>
        );
    }
}

RightInput.propTypes = {
    handleAttackClick: PropTypes.func.isRequired,
    handleTildeClick: PropTypes.func.isRequired
}