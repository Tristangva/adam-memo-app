

// all caps standard syntax for actions
// this naming structure is because you might have
// more than one reducer in application
export const ON_MEMO_ADD = 'memos/ON_MEMO_ADD'
export const ON_MEMO_DELETE = 'memos/ON_MEMO_DELETE'
export const ON_MEMO_SELECT = 'memos/ON_MEMO_SELECT'
export const ON_MEMO_EDIT = 'memos/ON_MEMO_EDIT'
export const ON_LOGIN = 'memos/ON_LOGIN'
const initState = {
    isLoggedIn: false,
    memoList: [],
    selectedMemo: null
}


// reducer must always return state
//never directly modify state. Always make copy
export function reducer(state = initState, action){
    switch (action.type){
        case ON_LOGIN:
            return {
                ...state,
                isLoggedIn: action.creds.username === 'admin'
                    && action.creds.password === 'pass'
            }
        case ON_MEMO_ADD:
            // construct object, coppy state, set list copy of list and add memo
            return {
                ...state,
                memoList: [
                    ...state.memoList,
                    action.memo
                ]
            }
        case ON_MEMO_DELETE:
            return {
                ...state,
                memoList: state.memoList.filter(memo => memo.id !== action.memo.id)

            }
        case ON_MEMO_SELECT:
            return {
                ...state,
                selectedMemo: action.memo
            }

        case ON_MEMO_EDIT:
            return {
                ...state,
                // map lets you change array
                memoList: state.memoList.map((memo)=>{
                    if(action.memo.id === memo.id){
                        return action.memo
                    }
                    return memo
                }),
                selectedMemo: null
            }
        default:
            return {
                ...state
            }
    }
}