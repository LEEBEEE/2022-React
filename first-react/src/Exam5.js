import { useState, useEffect } from "react";

export default function Exam5() {
    const [ counter, setCounter ] = useState(0);
    const [ keyword, setKeyword ] = useState('');

    const incCount = () => {
        setCounter( val => val + 1)
    }
    const decCount = () => {
        setCounter( val => val === 0 ? val : val-1
        // {
        //     if( val === 0 ) {
        //         return val
        //     }
        //     return val - 1
        // }
        )
    }
    const onChangeText = (e) => {
        setKeyword(e.target.value);
    }

    useEffect(() => {
        if(keyword.length > 5) {
            console.log('aaa');
        }
    }, [keyword]); // useEffect(실행할effect, depth) depth가 바뀔 때만 실행
    return (
        <div>
            <input
                type="text"
                placeholder="Search here..."
                value={ keyword }
                onChange={ onChangeText }
            />
            <h1>{ counter }</h1>
            <button onClick={ incCount }>+</button>
            <button onClick={ decCount }>-</button>
        </div>
    )
}