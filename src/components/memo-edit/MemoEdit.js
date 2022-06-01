import {MemoInput} from "../memo-input/MemoInput";
import {Card, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ON_MEMO_EDIT} from "../../modules/memos";

export function MemoEdit({_MemoInput = MemoInput}) {
    const memo = useSelector(state => state.selectedMemo)
    function onSubmit(memo) {
        dispatch({
            type: ON_MEMO_EDIT,
            memo
        })
    }
    const dispatch = useDispatch()
    return<div>
        <Card className={'text-center'} border={'dark'}>
            <Form.Label>Add Memo</Form.Label>
            <_MemoInput memo={memo} onSubmit={onSubmit}/>
        </Card>
    </div>
}