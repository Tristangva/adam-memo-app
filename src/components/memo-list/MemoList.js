import {Memo} from "../memo/Memo";
import {useSelector} from "react-redux";

// get a value from redux store to use it
// we are going to use selector
export function MemoList({onEditSelect, onMemoDelete, _Memo = Memo}) {

    const list = useSelector((state)=>{
        return state.memoList
    })

    function sortMemoList(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    const pendingList = list.filter(m => !m.finished)
    const finishedList = list.filter(m => m.finished)

    //  TODO  -  Make Pending and Finished headers only show up if lists are populated
    return <div>
        <h1>Pending</h1>
        {
            pendingList.sort(sortMemoList)
                .map((memoData, idx) => <div key={idx} className={'m-3'}>
                    <_Memo  memo={memoData} onEditSelect={onEditSelect} onMemoDelete={onMemoDelete}/>
                </div>)
        }
        <h1>Finished</h1>
        {
            finishedList.sort(sortMemoList)
                .map((memoData, idx) => <div key={idx} className={'m-3'}>
                    <_Memo  memo={memoData} onEditSelect={onEditSelect} onMemoDelete={onMemoDelete}/>
                </div>)
        }
    </div>

}