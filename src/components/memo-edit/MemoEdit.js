import {MemoInput} from "../memo-input/MemoInput";

export function MemoEdit({memo, onSubmit, _MemoInput = MemoInput}) {
    return<div>
        <h1>Editing...</h1>
            <_MemoInput memo={memo} onSubmit={onSubmit}/>
        </div>
}