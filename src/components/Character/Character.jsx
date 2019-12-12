import React from "react";
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ToolBar } from '../ToolBar/ToolBar';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import MoveList from '../MoveList/MoveList';
import { fetchCharacter } from '../../actions/characterActions';

class Character extends React.Component {
    constructor(props) {
        super(props);

        this.characterUrl = this.props.match.params.name;

        this.state = {
            showButtonLayout: true,
            buttonLayout: 'ps'
        };
    }

    componentDidMount() {
        this.props.fetchCharacter(this.characterUrl);
    }

    render() {
        return this.props.loading
            ? (
                <LoadingScreen />
            )
            : (
                <Container>
                    <h2 className="mt-2">{this.props.name}</h2>
                    <ToolBar />
                    <MoveList
                        showButtonLayout={this.state.showButtonLayout}
                        buttonLayout={this.state.buttonLayout}
                    />
                </Container>
            );
    }
}

Character.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            name: PropTypes.string.isRequired
        })
    }),
    loading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    movelist: PropTypes.arrayOf(
        PropTypes.shape({
            cmd: PropTypes.string,
            speed: PropTypes.string,
            hit: PropTypes.string,
            dmg: PropTypes.string,
            onBlock: PropTypes.string,
            onHit: PropTypes.string,
            onCounter: PropTypes.string,
            notes: PropTypes.string
        })
    ),
}

const mapStateToProps = state => ({
    loading: state.character.loading,
    name: state.character.name,
    movelist: state.character.movelist
});

export default connect(mapStateToProps, { fetchCharacter })(Character);