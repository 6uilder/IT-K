const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { name: 'Dimon', id: 1 },
        { name: 'Dron', id: 2 },
        { name: 'Kolyan', id: 3 },
        { name: 'Marishka', id: 4 },
        { name: 'SerzhMorzh', id: 5 }
    ],
    messages: [
        { text: 'Hi', id: 1 },
        { text: 'Hey', id: 2 },
        { text: 'Yoohu', id: 3 }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {




    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { text: body, id: 4 }]
            };
        default:
            return state;
    }


}


export const sendMessageCreator = () =>
    ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;