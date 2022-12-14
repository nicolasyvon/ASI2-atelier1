export const updateCurrentCard = 
        (value) => {
                return { type: 'UPDATE_CURRENT_CARD', obj: value }; 
        };

export const updateListCard = 
        (value) => {
                return { type: 'UPDATE_CURRENT_LIST_CARD', obj: value }; 
} 