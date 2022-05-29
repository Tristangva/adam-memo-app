import './App.css';
import {useState} from "react";
import {Login} from "./components/login/Login";
import {MemoAdd} from "./components/memo-add/MemoAdd";
import {MemoList} from "./components/memo-list/MemoList";

function App(props) {

    //list of props
    const {
        //  TODO - set this to false when I publish
        _isLoggedIn = false,
        _selectedMemo = null,
        _Login = Login,
        _MemoAdd = MemoAdd,
        _MemoList = MemoList,
        // TODO - ADD DEFAULT COMP
        _MemoEdit,

    } = props;

    //states
    const [isLoggedIn, setIsLoggedIn] = useState(_isLoggedIn)
    const [memoList, setMemoList] = useState([])
    const [selectedMemo, setSelectedMemo] = useState(_selectedMemo);

    function onLogin(creds) {
        if (creds.username === 'admin' && creds.password === 'pass') {
            setIsLoggedIn(true)
        }
    }

    function onMemoAdd(memo) {
        setMemoList([
            ...memoList,
            memo
        ])
    }

    function onEditSelect(memo) {
        setSelectedMemo(memo)
    }

    //deletes memo by finding id and from list
    function onMemoDelete(memoToDelete) {
        setMemoList(
            [
                ...memoList.filter((memo) => {
                    return memo.id !== memoToDelete.id
                })
            ]
        )
    }

    if (!isLoggedIn) {
        return <_Login onSubmit={onLogin}/>
    }

    if (selectedMemo) {
        return <_MemoEdit/>
    }

    return <>
        <_MemoAdd onMemoAdd={onMemoAdd}/>
        <_MemoList list={memoList} onEditSelect={onEditSelect} onMemoDelete={onMemoDelete}/>
    </>
}

export default App;
