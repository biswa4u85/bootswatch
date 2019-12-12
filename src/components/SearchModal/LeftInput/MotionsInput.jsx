import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export class MotionsInput extends React.Component {
    render() {
        return (
            <table className="button-grid">
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("qcf")}>
                            <span>QCF</span>
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("qcb")}>
                            <span>QCB</span>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("hcf")}>
                            <span>HCF</span>
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("hcb")}>
                            <span>HCB</span>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("f, n, d, d/f")}>
                            <span>f, n, d, d/f</span>
                        </Button>
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
        );
    }
}

MotionsInput.propTypes = {
    handleDirectionClick: PropTypes.func.isRequired
}