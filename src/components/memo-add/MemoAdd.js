import {MemoInput} from "../memo-input/MemoInput";
import {Card, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {ON_MEMO_ADD} from "../../modules/memos";

// we want this to dispatch action to reducer
export function MemoAdd({onMemoAdd, _MemoInput = MemoInput}) {
    const dispatch = useDispatch()
    // middle man
    function onSubmit(memoData){
        dispatch({
            type: ON_MEMO_ADD,
            memo: memoData
        })
    }
    return<div>
        <Card className={'text-center'} border={'dark'}>
            <Card.Header>Add Memo</Card.Header>
            <_MemoInput onSubmit={onSubmit}/>
        </Card>
    </div>
}