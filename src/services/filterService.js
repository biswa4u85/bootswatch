const applyCommandFilter = (moves, filters) => {
    const command = filters.commandFilterValue.toLowerCase();
    moves = moves.filter(move =>
        move.cmd.toLowerCase().includes(command)
    );
    return moves;
}

const applySpeedFilter = (moves, filters) => {
    const isSpeedInRange = (speed) => {
        const foundSpeed = speed.match(/[-0-9]+/);
        if (foundSpeed) {
            const value = parseInt(foundSpeed);
            return value >= parseInt(filters.speedMin)
                && value <= parseInt(filters.speedMax);
        }
    }

    moves = moves.filter(move =>
        isSpeedInRange(move.speed)
    );
    return moves;
}

const applyOnBlockFilter = (moves, filters) => {
    const isOnBlockInRange = (onBlock) => {
        const foundOnBlockValue = onBlock.match(/-?[-0-9]+/);
        if (foundOnBlockValue) {
            const value = parseInt(foundOnBlockValue);
            return value >= parseInt(filters.onBlockMin)
                && value <= parseInt(filters.onBlockMax);
        }
    }

    moves = moves.filter(move =>
        isOnBlockInRange(move.onBlock)
    );
    return moves;
}

const applyOnHitFilter = (moves, filters) => {
    const isOnHitInRange = onHit => {
        const foundOnHitValue = onHit.match(/-?[-0-9]+/);
        if (foundOnHitValue) {
            const value = parseInt(foundOnHitValue);
            return value >= parseInt(filters.onHitMin)
                && value <= parseInt(filters.onHitMax);
        }
    }

    moves = moves.filter(move =>
        isOnHitInRange(move.onHit)
    );
    return moves;
}

const applyOnCounterFilter = (moves, filters) => {
    if (filters.onCounterValue === 'all') {
        // todo: filter on actual values and not just containing letterss
        moves = moves.filter(move =>
            move.onCounter.match(/^[A-Za-z]+$/)
        );    
    } else {
        moves = moves.filter(move =>
            move.onCounter.includes(filters.onCounterValue)
        );
    }
    return moves;
}

const applyNotesFilter = (moves, filters) => {
    if (filters.notesValue === 'all') {
        moves = moves.filter(move => move.notes);    
    } else {
        moves = moves.filter(move =>
            move.notes.includes(filters.notesValue)
        );
    }
    return moves;
}

export const filterMoveList = (movelist, filters) => {
    let filteredMoves = movelist;
    if (filters.commandFilterValue) {
        filteredMoves = applyCommandFilter(filteredMoves, filters);
    }

    if (filters.speedMin !== null &&
        filters.speedMax !== null) {
        filteredMoves = applySpeedFilter(filteredMoves, filters);
    }

    if (filters.onBlockMin !== null &&
        filters.onBlockMax !== null) {
        filteredMoves = applyOnBlockFilter(filteredMoves, filters);
    }

    if (filters.onHitMin !== null &&
        filters.onHitMax !== null) {
        filteredMoves = applyOnHitFilter(filteredMoves, filters);
    }

    if (filters.onCounterValue) {
        filteredMoves = applyOnCounterFilter(filteredMoves, filters);
    }

    if (filters.notesValue) {
        filteredMoves = applyNotesFilter(filteredMoves, filters);
    }
    
    return filteredMoves;
}