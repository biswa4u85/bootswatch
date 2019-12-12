import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { ReactComponent as ArrowBack } from '../../../assets/arrow/b.svg';
import { ReactComponent as ArrowDown } from '../../../assets/arrow/d.svg';
import { ReactComponent as ArrowDownBack } from '../../../assets/arrow/db.svg';
import { ReactComponent as ArrowDownForward } from '../../../assets/arrow/df.svg';
import { ReactComponent as ArrowForward } from '../../../assets/arrow/f.svg';
import { ReactComponent as ArrowNeutral } from '../../../assets/arrow/n.svg';
import { ReactComponent as ArrowUp } from '../../../assets/arrow/u.svg';
import { ReactComponent as ArrowUpBack } from '../../../assets/arrow/ub.svg';
import { ReactComponent as ArrowUpForward } from '../../../assets/arrow/uf.svg';

export class DirectionalInput extends React.Component {
    render() {
        return (
            <table className="button-grid">
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("u/b")}>
                            <ArrowUpBack />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("u")}>
                            <ArrowUp />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("u/f")}>
                            <ArrowUpForward />
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("b")}>
                            <ArrowBack />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("n")}>
                            <ArrowNeutral />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("f")}>
                            <ArrowForward />
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("d/b")}>
                            <ArrowDownBack />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("d")}>
                            <ArrowDown />
                        </Button>
                    </td>
                    <td>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.handleDirectionClick("d/f")}>
                            <ArrowDownForward />
                        </Button>
                    </td>
                </tr>
            </table>
        );
    }
}

DirectionalInput.propTypes = {
    handleDirectionClick: PropTypes.func.isRequired
}