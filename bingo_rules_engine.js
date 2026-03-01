/**
 * 🚀 BINGO RULES ENGINE - RADICAL RESTRUCTURING
 * Completely new implementation with 50 figure patterns and automatic win detection
 */

// 🎯 50 FIGURE PATTERNS CONFIGURATION
const BINGO_PATTERNS = {
    // Basic Patterns
    'line': {
        name: 'LÍNEA',
        description: 'Cualquier línea horizontal, vertical o diagonal completa',
        positions: [
            // Horizontales
            [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24],
            // Verticales
            [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24],
            // Diagonales
            [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]
        ]
    },

    'full': {
        name: 'CARTÓN LLENO',
        description: 'Blackout completo - todos los números marcados',
        positions: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]]
    },

    // Geometric Shapes
    'corners': {
        name: '4 ESQUINAS',
        description: 'Las cuatro esquinas del cartón',
        positions: [[0, 4, 20, 24]]
    },

    'frame': {
        name: 'MARCO',
        description: 'Marco exterior del cartón',
        positions: [[0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5]]
    },

    'diamond': {
        name: 'DIAMANTE',
        description: 'Forma de diamante',
        positions: [[2, 6, 10, 14, 18, 22, 11, 13, 7, 17]]
    },

    // Letters
    'letter_x': {
        name: 'LETRA X',
        description: 'Dos diagonales cruzadas',
        positions: [[0, 6, 12, 18, 24, 4, 8, 16, 20]]
    },

    'letter_t': {
        name: 'LETRA T',
        description: 'T mayúscula',
        positions: [[0, 5, 10, 15, 20, 11, 12, 13, 14]]
    },

    'letter_h': {
        name: 'LETRA H',
        description: 'H mayúscula',
        positions: [[0, 1, 2, 3, 4, 20, 21, 22, 23, 24, 7, 12, 17]]
    },

    'letter_o': {
        name: 'LETRA O',
        description: 'O mayúscula',
        positions: [[0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5]]
    },

    'letter_l': {
        name: 'LETRA L',
        description: 'L mayúscula',
        positions: [[0, 1, 2, 3, 4, 9, 14, 19, 24]]
    },

    // Complex Patterns
    'cross': {
        name: 'CRUZ',
        description: 'Cruz por el centro',
        positions: [[2, 7, 12, 17, 22, 10, 11, 13, 14]]
    },

    'plus': {
        name: 'PLUS',
        description: 'Signo más (+)',
        positions: [[2, 7, 12, 17, 22, 10, 11, 13, 14]]
    },

    'star': {
        name: 'ESTRELLA',
        description: 'Forma de estrella',
        positions: [[2, 6, 8, 10, 12, 14, 16, 18, 7, 11, 13, 17, 0, 4, 20, 24]]
    },

    'heart': {
        name: 'CORAZÓN',
        description: 'Forma de corazón',
        positions: [[5, 10, 15, 1, 3, 6, 7, 8, 11, 12, 13, 17, 22]]
    },

    'arrow': {
        name: 'FLECHA',
        description: 'Flecha hacia arriba',
        positions: [[10, 11, 12, 13, 14, 1, 7, 17, 3]]
    },

    'zigzag': {
        name: 'ZIGZAG',
        description: 'Patrón en zigzag',
        positions: [[0, 6, 10, 16, 20, 2, 8, 12, 18, 22, 4, 9, 14, 19, 24]]
    },

    'pyramid': {
        name: 'PIRÁMIDE',
        description: 'Forma de pirámide',
        positions: [[4, 9, 14, 19, 24, 3, 8, 13, 18, 2, 7, 12, 17, 11]]
    },

    'small_square': {
        name: 'CUADRADO PEQUEÑO',
        description: 'Cuadrado de 2x2',
        positions: [[0, 1, 5, 6]]
    },

    'inner_frame': {
        name: 'MARCO INTERIOR',
        description: 'Marco interior',
        positions: [[6, 7, 8, 13, 18, 17, 16, 11]]
    },

    'corners_center': {
        name: 'ESQUINAS + CENTRO',
        description: '4 esquinas más el centro',
        positions: [[0, 4, 12, 20, 24]]
    },

    'horizontal_1': {
        name: 'FILA 1',
        description: 'Primera fila horizontal',
        positions: [[0, 5, 10, 15, 20]]
    },

    'horizontal_2': {
        name: 'FILA 2',
        description: 'Segunda fila horizontal',
        positions: [[1, 6, 11, 16, 21]]
    },

    'horizontal_3': {
        name: 'FILA 3',
        description: 'Tercera fila horizontal',
        positions: [[2, 7, 12, 17, 22]]
    },

    'horizontal_4': {
        name: 'FILA 4',
        description: 'Cuarta fila horizontal',
        positions: [[3, 8, 13, 18, 23]]
    },

    'horizontal_5': {
        name: 'FILA 5',
        description: 'Quinta fila horizontal',
        positions: [[4, 9, 14, 19, 24]]
    },

    'vertical_b': {
        name: 'COLUMNA B',
        description: 'Columna B completa',
        positions: [[0, 1, 2, 3, 4]]
    },

    'vertical_i': {
        name: 'COLUMNA I',
        description: 'Columna I completa',
        positions: [[5, 6, 7, 8, 9]]
    },

    'vertical_n': {
        name: 'COLUMNA N',
        description: 'Columna N completa',
        positions: [[10, 11, 12, 13, 14]]
    },

    'vertical_g': {
        name: 'COLUMNA G',
        description: 'Columna G completa',
        positions: [[15, 16, 17, 18, 19]]
    },

    'vertical_o': {
        name: 'COLUMNA O',
        description: 'Columna O completa',
        positions: [[20, 21, 22, 23, 24]]
    },

    'diagonal_main': {
        name: 'DIAGONAL PRINCIPAL',
        description: 'Diagonal de arriba-izquierda a abajo-derecha',
        positions: [[0, 6, 12, 18, 24]]
    },

    'diagonal_secondary': {
        name: 'DIAGONAL SECUNDARIA',
        description: 'Diagonal de arriba-derecha a abajo-izquierda',
        positions: [[4, 8, 12, 16, 20]]
    },

    'perimeter': {
        name: 'PERÍMETRO',
        description: 'Todo el borde exterior',
        positions: [[0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5]]
    },

    'inner_perimeter': {
        name: 'PERÍMETRO INTERIOR',
        description: 'Perímetro del cuadrado central',
        positions: [[6, 7, 8, 13, 18, 17, 16, 11]]
    },

    'cross_center': {
        name: 'CRUZ CENTRAL',
        description: 'Cruz que pasa por el centro',
        positions: [[2, 7, 12, 17, 22, 10, 11, 13, 14]]
    },

    'letter_c': {
        name: 'LETRA C',
        description: 'C mayúscula',
        positions: [[0, 1, 2, 3, 4, 9, 14, 19, 24, 5, 10, 15, 20]]
    },

    'letter_s': {
        name: 'LETRA S',
        description: 'S mayúscula',
        positions: [[0, 5, 10, 15, 20, 1, 2, 7, 12, 17, 22, 23, 24, 19, 14]]
    },

    'letter_z': {
        name: 'LETRA Z',
        description: 'Z mayúscula',
        positions: [[0, 5, 10, 15, 20, 14, 18, 12, 6, 4, 9, 14, 19, 24]]
    },

    'letter_u': {
        name: 'LETRA U',
        description: 'U mayúscula',
        positions: [[0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20]]
    },

    'letter_v': {
        name: 'LETRA V',
        description: 'V mayúscula',
        positions: [[0, 1, 2, 3, 4, 20, 21, 22, 12, 17, 23, 24]]
    },

    'letter_w': {
        name: 'LETRA W',
        description: 'W mayúscula',
        positions: [[0, 1, 2, 3, 4, 20, 21, 22, 23, 24, 13, 12, 17, 7, 2, 1, 6, 11]]
    },

    'letter_m': {
        name: 'LETRA M',
        description: 'M mayúscula',
        positions: [[0, 1, 2, 3, 4, 20, 21, 22, 23, 24, 6, 12, 18]]
    },

    'letter_n': {
        name: 'LETRA N',
        description: 'N mayúscula',
        positions: [[0, 1, 2, 3, 4, 20, 21, 22, 23, 24, 6, 12, 18]]
    },

    'letter_p': {
        name: 'LETRA P',
        description: 'P mayúscula',
        positions: [[0, 1, 2, 3, 4, 5, 10, 6, 11, 2]]
    },

    'letter_e': {
        name: 'LETRA E',
        description: 'E mayúscula',
        positions: [[0, 1, 2, 3, 4, 5, 10, 15, 20, 12, 7, 17, 4, 9, 14, 19, 24]]
    },

    'letter_f': {
        name: 'LETRA F',
        description: 'F mayúscula',
        positions: [[0, 1, 2, 3, 4, 5, 10, 15, 20, 7, 12, 17]]
    },

    'letter_d': {
        name: 'LETRA D',
        description: 'D mayúscula',
        positions: [[0, 1, 2, 3, 4, 5, 10, 15, 21, 22, 23, 19, 14, 9]]
    },

    'letter_r': {
        name: 'LETRA R',
        description: 'R mayúscula',
        positions: [[0, 1, 2, 3, 4, 5, 10, 6, 11, 2, 13, 19]]
    },

    'letter_k': {
        name: 'LETRA K',
        description: 'K mayúscula',
        positions: [[0, 1, 2, 3, 4, 12, 6, 18, 5, 19]]
    },

    'letter_y': {
        name: 'LETRA Y',
        description: 'Y mayúscula',
        positions: [[0, 1, 2, 20, 21, 22, 12, 13, 14]]
    }
};

// 🔍 PATTERN VALIDATION FUNCTION
function validatePattern(patternType, flatCard, calledNumbers) {
    const isMarked = (val) => val === "FREE" || calledNumbers.includes(val);

    // Get the pattern from configuration
    const pattern = BINGO_PATTERNS[patternType];
    if (!pattern) return false;

    // Check if any of the pattern lines is complete
    return pattern.positions.some(line => {
        return line.every(idx => isMarked(flatCard[idx]));
    });
}

// 🎯 AUTOMATIC WIN DETECTION
function checkWin(card, calledNumbers, patternType) {
    // Flatten the card: B, I, N, G, O columns
    const flatCard = [...card.B, ...card.I, ...card.N, ...card.G, ...card.O];

    // Use the validation function
    return validatePattern(patternType, flatCard, calledNumbers);
}

// 🚀 WINNER TRIGGER SYSTEM
function checkForWinners(players, calledNumbers, patternType, io) {
    const winners = [];

    // Check each player's cards
    for (const player of players) {
        for (const card of player.cards) {
            if (checkWin(card, calledNumbers, patternType)) {
                winners.push({
                    username: player.username,
                    cardId: card.id,
                    pattern: patternType,
                    time: new Date()
                });

                // 🎵 TRIGGER WINNER EVENT IMMEDIATELY
                io.emit('winner_detected', {
                    username: player.username,
                    cardId: card.id,
                    pattern: patternType,
                    calledNumbers: calledNumbers,
                    timestamp: new Date().toISOString()
                });

                // 📢 ADMIN NOTIFICATION
                io.emit('admin_winner_alert', {
                    winner: player.username,
                    cardId: card.id,
                    pattern: BINGO_PATTERNS[patternType].name,
                    numbersCalled: calledNumbers.length
                });

                // 🎉 CELEBRATION EVENT
                io.emit('bingo_celebration', {
                    message: `¡BINGO! ${player.username} ha ganado con ${BINGO_PATTERNS[patternType].name}!`,
                    winner: player.username,
                    pattern: patternType
                });
            }
        }
    }

    return winners;
}

// 📊 PATTERN STATISTICS
function getPatternStats() {
    return {
        totalPatterns: Object.keys(BINGO_PATTERNS).length,
        patternNames: Object.keys(BINGO_PATTERNS),
        patternDetails: BINGO_PATTERNS
    };
}

// 🔧 UTILITY FUNCTIONS
function getPatternByName(name) {
    return BINGO_PATTERNS[name];
}

function listAllPatterns() {
    return Object.keys(BINGO_PATTERNS).map(patternName => ({
        name: patternName,
        displayName: BINGO_PATTERNS[patternName].name,
        description: BINGO_PATTERNS[patternName].description
    }));
}

// 📈 EXPORT THE ENGINE
module.exports = {
    BINGO_PATTERNS,
    validatePattern,
    checkWin,
    checkForWinners,
    getPatternStats,
    getPatternByName,
    listAllPatterns
};