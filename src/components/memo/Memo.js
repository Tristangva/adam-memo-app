import {Button, Card} from "react-bootstrap";
import './Memo.css'
import {BsFillCheckCircleFill, BsFillCircleFill} from "react-icons/bs";

export function Memo({memo, onEditSelect, onMemoDelete}) {

    return <Card border={'dark'}>
        <Card.Header as={'h5'}>
            <span>{memo.title}</span>
            <span className={'memo-date'}>
                {memo.finished ?
                    <BsFillCheckCircleFill color={'green'} size={'2rem'}/> :
                    <BsFillCircleFill color={'grey'} size={'2rem'}/>}
            </span>
            <span className={'memo-date'}>{memo.date?.toString().substring(0, 15)}</span>
        </Card.Header>
        <div className={'p-2'}>{memo.desc}</div>

        {/*Button comp*/}
        <Card.Footer className={'d-flex justify-content-around'}>
            <Button variant="outline-warning" onClick={() => onEditSelect(memo)}>Edit</Button>
            <Button variant="outline-danger" onClick={()=> onMemoDelete(memo)}>Delete</Button>
        </Card.Footer>
    </Card>
}