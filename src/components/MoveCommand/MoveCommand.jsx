import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CommandRenderer } from '../CommandRenderer/CommandRenderer';
import './MoveCommand.scss';

class MoveCommand extends React.Component {
    render() {
        return (
            <th className="command-cell">
                {this.props.settings.displayButtonInput && (
                    <CommandRenderer 
                        command={this.props.command}
                        buttonStyle={this.props.settings.buttonStyle}
                    />
                )}
                {this.props.settings.displayNotationInput && (
                    <div>
                        {this.props.command}
                    </div>
                )}
            </th>
        )
    }
}

MoveCommand.propTypes = {
    command: PropTypes.string.isRequired,
    settings: PropTypes.shape({
        displayButtonInput: PropTypes.bool.isRequired,
        displayNotationInput: PropTypes.bool.isRequired,
        buttonStyle: PropTypes.string.isRequired
    })
}

const mapStateToProps = state => ({
    settings: state.settings
});

export default connect(mapStateToProps, {})(MoveCommand);