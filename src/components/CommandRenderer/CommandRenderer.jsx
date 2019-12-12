import React from "react";
import PropTypes from 'prop-types';
import reactStringReplace from 'react-string-replace-recursively';
// import Button1 from './Buttons/Button1';
import { ReactComponent as Button1 } from '../../assets/button/PS4/1.svg';
import { ReactComponent as Button2 } from '../../assets/button/PS4/2.svg';
import { ReactComponent as Button3 } from '../../assets/button/PS4/3.svg';
import { ReactComponent as Button4 } from '../../assets/button/PS4/4.svg';
import { ReactComponent as Button12 } from '../../assets/button/PS4/12.svg';
import { ReactComponent as Button13 } from '../../assets/button/PS4/13.svg';
import { ReactComponent as Button14 } from '../../assets/button/PS4/14.svg';
import { ReactComponent as Button23 } from '../../assets/button/PS4/23.svg';
import { ReactComponent as Button24 } from '../../assets/button/PS4/24.svg';
import { ReactComponent as Button34 } from '../../assets/button/PS4/34.svg';
import { ReactComponent as Button123 } from '../../assets/button/PS4/123.svg';
import { ReactComponent as Button124 } from '../../assets/button/PS4/124.svg';
import { ReactComponent as Button134 } from '../../assets/button/PS4/134.svg';
import { ReactComponent as Button234 } from '../../assets/button/PS4/134.svg';
import { ReactComponent as Button1234 } from '../../assets/button/PS4/1234.svg';
import { ReactComponent as ArrowBack } from '../../assets/arrow/b.svg';
import { ReactComponent as ArrowBackHold } from '../../assets/arrow/bp.svg';
import { ReactComponent as ArrowDown } from '../../assets/arrow/d.svg';
import { ReactComponent as ArrowDownHold } from '../../assets/arrow/dp.svg';
import { ReactComponent as ArrowDownBack } from '../../assets/arrow/db.svg';
import { ReactComponent as ArrowDownBackHold } from '../../assets/arrow/b.svg';
import { ReactComponent as ArrowDownForward } from '../../assets/arrow/df.svg';
import { ReactComponent as ArrowDownForwardHold } from '../../assets/arrow/dfp.svg';
import { ReactComponent as ArrowForward } from '../../assets/arrow/f.svg';
import { ReactComponent as ArrowForwardHold } from '../../assets/arrow/fp.svg';
import { ReactComponent as ArrowNeutral } from '../../assets/arrow/n.svg';
import { ReactComponent as ArrowUp } from '../../assets/arrow/u.svg';
import { ReactComponent as ArrowUpHold } from '../../assets/arrow/up.svg';
import { ReactComponent as ArrowUpBack } from '../../assets/arrow/ub.svg';
import { ReactComponent as ArrowUpBackHold } from '../../assets/arrow/ubp.svg';
import { ReactComponent as ArrowUpForward } from '../../assets/arrow/uf.svg';
import { ReactComponent as ArrowUpForwardHold } from '../../assets/arrow/ufp.svg';

import './CommandRenderer.scss';

export class CommandRenderer extends React.Component {
    constructor(props) {
        super(props);

        this.renderButton = this.getInputComponent.bind(this);
        this.getInputComponent = this.getInputComponent.bind(this);
    }
    
    getInputComponent(rawText, processed, key) {
        switch (rawText) {
            case '1':
                return <Button1 key={key} />
            case '2':
                return <Button2 key={key} />
            case '3':
                return <Button3 key={key} />
            case '4':
                return <Button4 key={key} />
            case '1+2':
                return <Button12 key={key} />
            case '1+3':
                return <Button13 key={key} />
            case '1+4':
                return <Button14 key={key} />
            case '2+3':
                return <Button23 key={key} />
            case '2+4':
                return <Button24 key={key} />
            case '3+4':
                return <Button34 key={key} />
            case '1+2+3':
                return <Button123 key={key} />
            case '1+2+4':
                return <Button124 key={key} />
            case '1+3+4':
                return <Button134 key={key} />
            case '2+3+4':
                return <Button234 key={key} />
            case '1+2+3+4':
                return <Button1234 key={key} />
            case 'b':
                return <ArrowBack key={key} />
            case 'B':
                return <ArrowBackHold key={key} />
            case 'd':
                return <ArrowDown key={key} />
            case 'D':
                return <ArrowDownHold key={key} />
            case 'u':
                return <ArrowUp key={key} />
            case 'U':
                return <ArrowUpHold key={key} />
            case 'f':
                return <ArrowForward key={key} />
            case 'F':
                return <ArrowForwardHold key={key} />
            case 'd/b':
                return <ArrowDownBack key={key} />
            case 'D/B':
                return <ArrowDownBackHold key={key} />
            case 'd/f':
                return <ArrowDownForward key={key} />
            case 'D/F':
                return <ArrowDownForwardHold key={key} />
            case 'u/b':
                return <ArrowUpBack key={key} />
            case 'U/B':
                return <ArrowUpBackHold key={key} />
            case 'U/F':
                return <ArrowUpForwardHold key={key} />
            case 'u/f':
                return <ArrowUpForward key={key} />
            case 'n':
            case 'N':
                return <ArrowNeutral key={key} />
            default:
                return <span key={key} >{rawText}</span>
        }
    }
    
    parseInput() {
        const command = this.props.command;
    
        const config = {
            'diagonalDirection': {
                pattern: /([fbudn|FBUDN]\/[fbudn|FBUDN])/g,
                matcherFn: this.getInputComponent
            },
            'orthogonalDirection': {
                pattern: /\b([fbudn|FBUDN])\b/g,
                matcherFn: this.getInputComponent
            },
            'multipleButton': {
                pattern: /([1-4]\+[1-4]{1,4})/g,
                matcherFn: this.getInputComponent
            },
            'singleButton': {
                pattern: /([1-4])/g,
                matcherFn: this.getInputComponent
            },
            'plus': {
                pattern: /(\+)/g,
                matcherFn: () => null
            },
            'comma': {
                pattern: /(,)/g,
                matcherFn: () => null
            }
        }

        var result = reactStringReplace(config)(command);
        return result;
    }

    render() {
        return this.parseInput();
    }
}

CommandRenderer.propTypes = {
    command: PropTypes.string.isRequired
}