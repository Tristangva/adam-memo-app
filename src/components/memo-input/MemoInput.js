import {useState} from "react";
import { v4 as uuid } from 'uuid';
import {Button, Card, Form} from "react-bootstrap";

// using uuid library to make uid
export function MemoInput(props) {
    const newMemo = {
        id: uuid(),
        title: '',
        desc: '',
        date: new Date(),
        finished: false
    }

    const {
        onSubmit,
        memo = newMemo
    } = props
    // make sure use state is always recalled. Never make it call the same
    const [formState, setFormState] = useState(memo);
    function onFormSubmit(event) {
        event.preventDefault()
        onSubmit({...formState}) // bad for on submit
        setFormState(newMemo)
    }

    function onTitleChange(event) {
        setFormState({
            ...formState,
            title: event.target.value
        })
    }

    function onDescChange(event) {
        setFormState({
            ...formState,
            desc: event.target.value
        })
    }

    function onDateChange(event) {
        setFormState({
            ...formState,
            date: new Date(event.target.value)
        })
    }

    function onFinishedChange(event) {
        setFormState({
            ...formState,
            finished: event.target.checked
        })
    }
// TODO - Make tests for check box
    return <Form onSubmit={onFormSubmit}>
            <Form.Control onChange={onTitleChange} value={formState.title} type={'text'} placeholder={"Title"}/>
            <Form.Control onChange={onDescChange} value={formState.desc} type={'text'} placeholder={"Description"}/>
            <Form.Control onChange={onDateChange} value={formState.date.toISOString().substring(0,10)} type={'date'} placeholder={"Date"}/>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type={'checkbox'} label={'Finished'} onChange={onFinishedChange} checked={formState.finished}/>
            </Form.Group>
            <Card.Footer>
                <Button type={"submit"}>Submit</Button>
            </Card.Footer>
        </Form>

}