import React from "react";
import PropTypes from 'prop-types';
import { Card, Dropdown } from 'react-bootstrap';
import { DirectionalInput } from './DirectionalInput';
import { StancesInput } from '../StancesInput';
import { MotionsInput } from './MotionsInput';

export class LeftInput extends React.Component {
    constructor(props) {
        super(props);

        this.inputModes = ['Directions', 'Stances', 'Motions'];

        this.state = {
            shownInput: 'Directions'
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
            case 'Directions':
                return (
                    <DirectionalInput handleDirectionClick={this.props.handleDirectionClick} />
                );
            case 'Stances':
                return (
                    <StancesInput handleDirectionClick={this.props.handleDirectionClick} />
                );
            case 'Motions':
                return (
                    <MotionsInput handleDirectionClick={this.props.handleDirectionClick} />
                );
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

LeftInput.propTypes = {
    handleDirectionClick: PropTypes.func.isRequired
}