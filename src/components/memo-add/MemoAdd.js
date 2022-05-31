import {MemoInput} from "../memo-input/MemoInput";

export function MemoAdd({onMemoAdd, _MemoInput = MemoInput}) {
    return<div>
        <h1>Add Memo</h1>
        <_MemoInput onSubmit={onMemoAdd}/>
    </div>
}