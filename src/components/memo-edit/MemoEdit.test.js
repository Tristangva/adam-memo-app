import {screen, render} from "@testing-library/react";
import {MemoEdit} from "./MemoEdit";

test(
    'should render MemoInput comp',
    ()=>{
        const _MrmoInput = () => <div>MOCK</div>
        render(<MemoEdit _MemoInput={_MrmoInput}/> )

        expect(screen.getByText("MOCK")).toBeInTheDocument();
    }
)