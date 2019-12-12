import React from "react";
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { filterMoveList } from '../../services/filterService';
import MoveCommand from '../MoveCommand/MoveCommand';
import './MoveList.scss';
import _ from 'lodash';

class MoveList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filteredMovelist: filterMoveList(
                this.props.movelist,
                this.props.filters)
        }
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(this.props.filters, prevProps.filters)) {
            this.setState({
                filteredMovelist: filterMoveList(
                    this.props.movelist,
                    this.props.filters)
            });
        }
    }

    filterVisibleHeaders() {
        const visibleColumns = this.props.columns.filter(column => column.visible);
        //return whole header?
        const headers = visibleColumns.map((column) => column.header);
        return headers;
    }

    renderColumn(header, move, index) {
        switch (header) {
            case 'Command':
                return (
                    <MoveCommand
                        key={`td-${index}-cmd`}
                        command={move.cmd}
                    />
                );
            case 'Hit':
                return <td key={`td-${index}-hit`}>{move.hit}</td>;
            case 'Damage':
                return <td key={`td-${index}-dmg`}>{move.dmg}</td>;
            case 'Speed':
                return <td key={`td-${index}-speed`}>{move.speed}</td>;
            case 'On Block':
                return <td key={`td-${index}-onBlock`}>{move.onBlock}</td>;
            case 'On Hit':
                return <td key={`td-${index}-onHit`}>{move.onHit}</td>;
            case 'On Counter':
                return <td key={`td-${index}-onCounter`}>{move.onCounter}</td>;
            case 'Notes':
                return <td key={`td-${index}-notes`}>{move.notes}</td>;
            default:
                return null;
        }
    }

    renderMove(move, index) {
        return this.filterVisibleHeaders().map((header) =>
            this.renderColumn(header, move, index)
        );
    }

    renderMovelist() {
        if (this.state.filteredMovelist) {
            return this.state.filteredMovelist.map((move, index) =>
                <tr key={`tr-${index}`}>
                    {this.renderMove(move, index)}
                </tr>
            );
        }
    }

    render() {
        const headers = this.filterVisibleHeaders().map((header, index) =>
            <th key={`th-${index}`}>
                {header}
            </th>
        );

        if (this.state.filteredMovelist.length > 0) {
            return (
                <div id="movelist">
                    <Table striped>
                        <thead>
                            <tr>
                                {headers}
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderMovelist()}
                        </tbody>
                    </Table>
                </div>
            );
        }
        return (
            <div className="text-center">
                There are no results for your search/filter criteria
            </div>
        )
    }
}

MoveList.propTypes = {
    filters: PropTypes.shape({
        commandFilterValue: PropTypes.string, // remove?
        speedMin: null, // sort out prop types here
        speedMax: null,
        onBlockMin: null,
        onBlockMax: null,
        onHitMin: null,
        onHitMax: null,
        onCounterValue: null,
        notesValue: null
    }).isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            header: PropTypes.string.isRequired,
            visible: PropTypes.bool.isRequired
        })
    ).isRequired,
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
    showButtonLayout: PropTypes.bool.isRequired,
    buttonLayout: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    movelist: state.character.movelist,
    filters: state.filters,
    columns: state.columns.columns
});

export default connect(mapStateToProps, {})(MoveList);