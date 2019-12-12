import React from 'react';
import { ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import ColumnSettingsModal from '../ColumnSettingsModal/ColumnSettingsModal';
import SearchModal from '../SearchModal/SearchModal';
import FilterModal from '../FilterModal/FilterModal';
import SettingsModal from '../SettingsModal/SettingsModal';
import './ToolBar.scss';

export class ToolBar extends React.Component {
    render() {
        return (
            <ButtonToolbar id="toolbar">
                <ButtonGroup>
                    <SearchModal />
                    <FilterModal />
                    <ColumnSettingsModal />
                    <SettingsModal />
                </ButtonGroup>
            </ButtonToolbar>
        )
    }
}