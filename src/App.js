import './App.css';
import {Login} from "./components/login/Login";
import {MemoAdd} from "./components/memo-add/MemoAdd";
import {MemoList} from "./components/memo-list/MemoList";
import {MemoEdit} from "./components/memo-edit/MemoEdit";
import {useSelector} from "react-redux";

function App(props) {

    //list of props
    const {
        _isLoggedIn = true,
        _selectedMemo = null,
        _Login = Login,
        _MemoAdd = MemoAdd,
        _MemoList = MemoList,
        _MemoEdit = MemoEdit,

    } = props;

    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const selectedMemo = useSelector(state => state.selectedMemo)
    function onLogin(creds) {
        // console.log(creds)
        // if (creds.username === 'admin' && creds.password === 'pass') {
        //     setIsLoggedIn(true)
        // }
    }

    function onEditSelect(memo) {
        //setSelectedMemo(memo)
    }

    /*
    * deletes memo by finding id and from list
    * Spreads the memo list to filter
    * Filter array so that it returns a filtered array
    * uses unique id of each memo
    */

    if (!isLoggedIn) {
        return  <div className={'d-flex justify-content-center p-5'}>
            <_Login onSubmit={onLogin}/>
        </div>
    }


    if (selectedMemo) {
        return <_MemoEdit memo={selectedMemo} />
    }

    return <>
        <div className={'d-flex justify-content-center p-5'}>
            <_MemoAdd />
        </div>
        <_MemoList />
    </>
}

export default App;
