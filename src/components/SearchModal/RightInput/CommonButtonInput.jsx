import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { ReactComponent as Button1 } from '../../../assets/button/PS4/1.svg';
import { ReactComponent as Button2 } from '../../../assets/button/PS4/2.svg';
import { ReactComponent as Button3 } from '../../../assets/button/PS4/3.svg';
import { ReactComponent as Button4 } from '../../../assets/button/PS4/4.svg';
import { ReactComponent as Button12 } from '../../../assets/button/PS4/12.svg';
import { ReactComponent as Button14 } from '../../../assets/button/PS4/14.svg';
import { ReactComponent as Button23 } from '../../../assets/button/PS4/23.svg';
import { ReactComponent as Button34 } from '../../../assets/button/PS4/34.svg';

export class CommonButtonInput extends React.Component {
    render() {
        return (
            <table className="button-grid">
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("1")}>
                            <Button1 />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("2")}>
                            <Button2 />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("1+2")}>
                            <Button12 />
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("3")}>
                            <Button3 />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("4")}>
                            <Button4 />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("3+4")}>
                            <Button34 />
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("1+4")}>
                            <Button14 />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleAttackClick("2+3")}>
                            <Button23 />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleTildeClick()}>
                            <span>~</span>
                        </Button>
                    </td>
                </tr>
            </table>
        );
    }
}

CommonButtonInput.propTypes = {
    handleDirectionClick: PropTypes.func.isRequired,
    handleTildeClick: PropTypes.func.isRequired
}