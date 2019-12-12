import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export class StancesInput extends React.Component {
    render() {
        return (
            <table className="button-grid">
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("WS")}>
                            <span>WS</span>
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("WR")}>
                            <span>WR</span>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("FC")}>
                            <span>FC</span>
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("BT")}>
                            <span>BT</span>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("SS")}>
                            <span>SS</span>
                        </Button>
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
        );
    }
}

StancesInput.propTypes = {
    handleDirectionClick: PropTypes.func.isRequired
}