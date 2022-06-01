import {MemoInput} from "../memo-input/MemoInput";
import {Card, Form} from "react-bootstrap";

export function MemoAdd({onMemoAdd, _MemoInput = MemoInput}) {
    return<div>
        <Card className={'text-center'} border={'dark'}>
            <Card.Header>Add Memo</Card.Header>
            <_MemoInput onSubmit={onMemoAdd}/>
        </Card>
    </div>
}