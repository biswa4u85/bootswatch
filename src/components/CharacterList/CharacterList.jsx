import React from 'react';
import { withRouter } from "react-router-dom";
import { Container, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import characters from '../../data/characters';
import './CharacterList.scss';

class CharacterList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }

        this.handleCharacterClick = this.handleCharacterClick.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleCharacterClick = character => {
        this.props.history.push(`/character/${character.name}`);
    }

    handleSearchChange = event => {
        this.setState({
            searchValue: event.target.value
        });
    }

    render() {
        const filteredCharacters = characters.filter(character => {
            return character.label.toLowerCase().includes(this.state.searchValue.toLowerCase())
        });
        return (
            <Container>
                <h2 className="mt-2">Characters</h2>
                <div id="character-search">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search for your character"
                            value={this.state.searchValue}
                            onChange={this.handleSearchChange}
                        />
                    </InputGroup>
                </div>
                <ListGroup id="character-list-group">
                    {filteredCharacters.map((character) =>
                        <ListGroup.Item
                            action
                            key={`char-${character.name}`}
                            onClick={() => this.handleCharacterClick(character)}
                        >
                            {character.label}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    character: state.character
});

export default withRouter(connect(mapStateToProps, {})(CharacterList));