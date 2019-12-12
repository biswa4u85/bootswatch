import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { ReactComponent as Button13 } from '../../../assets/button/PS4/13.svg';
import { ReactComponent as Button24 } from '../../../assets/button/PS4/24.svg';
import { ReactComponent as Button123 } from '../../../assets/button/PS4/123.svg';
import { ReactComponent as Button124 } from '../../../assets/button/PS4/124.svg';
import { ReactComponent as Button134 } from '../../../assets/button/PS4/134.svg';
import { ReactComponent as Button234 } from '../../../assets/button/PS4/234.svg';
import { ReactComponent as Button1234 } from '../../../assets/button/PS4/1234.svg';

export class OtherButtonInput extends React.Component {
    render() {
        return (
            <table className="button-grid">
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("1+3")}>
                            <Button13 />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("2+4")}>
                            <Button24 />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("1+2+3")}>
                            <Button123 />
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("1+2+4")}>
                            <Button124 />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("1+3+4")}>
                            <Button134 />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("2+3+4")}>
                            <Button234 />
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("1+2+3+4")}>
                            <Button1234 />
                        </Button>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
        );
    }
}

OtherButtonInput.propTypes = {
    handleDirectionClick: PropTypes.func.isRequired
}