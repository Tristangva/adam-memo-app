import {Memo} from "../memo/Memo";

export function MemoList({list, onEditSelect, onMemoDelete, _Memo = Memo}) {

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
                .map((memoData, idx) => <_Memo key={idx} memo={memoData} onEditSelect={onEditSelect} onMemoDelete={onMemoDelete}/>)
        }
        <h1>Finished</h1>
        {
            finishedList.sort(sortMemoList)
                .map((memoData, idx) => <_Memo key={idx} memo={memoData} onEditSelect={onEditSelect} onMemoDelete={onMemoDelete}/>)
        }
    </div>

}