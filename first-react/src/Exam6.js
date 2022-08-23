import { useEffect, useState } from "react";

function Hello() {
    return (
        <div>
            <strong>Hello!!!</strong>
        </div>
    );
}

export default function Exam6() {
    const [ showing, setShowing ] = useState(false);
    const onClickBtn = () => {
        setShowing(bool => bool ? false:true)
    }
    return (
        <div>
            <button onClick={onClickBtn}>
                {showing ? 'hide' : 'show'}
            </button>
            { showing ? <Hello /> : null }
        </div>
    );
}