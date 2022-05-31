import './App.css';
import {useState} from "react";
import {Login} from "./components/login/Login";
import {MemoAdd} from "./components/memo-add/MemoAdd";
import {MemoList} from "./components/memo-list/MemoList";
import {MemoEdit} from "./components/memo-edit/MemoEdit";

function App(props) {

    //list of props
    const {
        //  TODO - set this to false when I publish
        _isLoggedIn = true,
        _selectedMemo = null,
        _Login = Login,
        _MemoAdd = MemoAdd,
        _MemoList = MemoList,
        _MemoEdit = MemoEdit,

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

    /*
    * deletes memo by finding id and from list
    * Spreads the memo list to filter
    * Filter array so that it returns a filtered array
    * uses unique id of each memo
    */
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
    function onMemoEdit(newMemo){
        onEditSelect(null)
        setMemoList(
            memoList.map((memo)=>{
                if (memo.id !== newMemo.id) {
                    return memo
                }
                return newMemo
        }))
    }

    if (selectedMemo) {
        return <_MemoEdit memo={selectedMemo} onSubmit={onMemoEdit}/>
    }

    return <>
        <_MemoAdd onMemoAdd={onMemoAdd}/>
        <_MemoList list={memoList} onEditSelect={onEditSelect} onMemoDelete={onMemoDelete}/>
    </>
}

export default App;
