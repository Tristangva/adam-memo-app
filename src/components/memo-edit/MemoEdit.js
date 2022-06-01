import {MemoInput} from "../memo-input/MemoInput";
import {Card, Form} from "react-bootstrap";

export function MemoEdit({memo, onSubmit, _MemoInput = MemoInput}) {
    return<div>
        <Card className={'text-center'} border={'dark'}>
            <Form.Label>Add Memo</Form.Label>
            <_MemoInput memo={memo} onSubmit={onSubmit}/>
        </Card>
    </div>
}