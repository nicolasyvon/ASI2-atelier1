export const updateCurrentCard = 
(value)=>{
                return { 
                        type: 'UPDATE_CURRENT_CARD', 
                        obj: value 
                }; 
        } 

export const updateUserId =
(userId)=>{
                return { 
                        type: 'UPDATE_USER_ID', 
                        id: userId 
                        };
        }
export const updateListCard = 
(value) => {
        return { type: 'UPDATE_CURRENT_LIST_CARD', obj: value }; 
} 
    