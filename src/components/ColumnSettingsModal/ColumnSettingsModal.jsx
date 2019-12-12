import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, ListGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns, faGripLines, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';

import { setColumns } from '../../actions/columnActions.js';
import './ColumnSettingsModal.scss';

const DragHandle = SortableHandle(() => <FontAwesomeIcon icon={faGripLines} />);

const SortableItem = SortableElement(({ column, onChange }) => {
    const visibilityIcon = 
        <FontAwesomeIcon 
            icon={column.visible 
                ? faEye 
                : faEyeSlash
            } 
        />

    return (
        <ListGroup.Item className="column-item">
            <DragHandle />
            <span>{column.header}</span>
            <Form.Switch
                id={`${column.id}-switch`}
                label={visibilityIcon}
                className="column-visibility"
                column-id={column.id}
                checked={column.visible}
                onChange={onChange}
                inline
            />
        </ListGroup.Item>
    )
});

const SortableList = SortableContainer(({ items, onChange }) => {
    return (
        <ListGroup>
            {items.map((value, index) => (
                <SortableItem
                    useH
                    key={`item-${index}`}
                    index={index}
                    column={value}
                    onChange={onChange} />
            ))}
        </ListGroup>
    );
});

class ColumnSettingsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showColumnsModal: false,
            columns: [...this.props.columns]
        }

        this.handleShowColumnsModal = this.handleShowColumnsModal.bind(this);
        this.handleCloseColumnsModal = this.handleCloseColumnsModal.bind(this);
        this.handleColumnVisibilityChange = this.handleColumnVisibilityChange.bind(this);
        this.handleColumnSettingsChange = this.handleColumnSettingsChange.bind(this);
    }

    handleShowColumnsModal() {
        this.setState({
            showColumnsModal: true,
            columns: [...this.props.columns]
        });
    }

    handleCloseColumnsModal() {
        this.setState({ showColumnsModal: false });
    }

    handleColumnVisibilityChange(event) {
        const columnId = parseInt(event.target.attributes['column-id'].value);
        const visible = event.target.checked;

        let columns = this.state.columns;
        let columnToUpdate = columns.find((column) => {
            return column.id === columnId;
        });
        columnToUpdate.visible = visible;

        this.setState({ columns });
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ columns }) => ({
            columns: arrayMove(columns, oldIndex, newIndex),
        }));
    };

    handleColumnSettingsChange() {
        this.props.setColumns(this.state.columns);
        this.handleCloseColumnsModal();
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.handleShowColumnsModal}>
                    <FontAwesomeIcon icon={faColumns} />
                </Button>
                <Modal show={this.state.showColumnsModal} onHide={this.handleCloseColumnsModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Column Settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SortableList
                            useDragHandle={true}
                            helperClass='sortableHelper'
                            items={this.state.columns}
                            onSortEnd={this.onSortEnd}
                            onChange={this.handleColumnVisibilityChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseColumnsModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleColumnSettingsChange}>
                            Apply
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

ColumnSettingsModal.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            header: PropTypes.string.isRequired,
            visible: PropTypes.bool.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => ({
    columns: state.columns.columns
});

export default connect(mapStateToProps, { setColumns })(ColumnSettingsModal);