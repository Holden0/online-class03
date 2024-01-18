import {useEffect, useState} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ExampleThree() {
    const [number, setNumber] = useState(0);
    const colors = ['red', 'orange', 'yellow','green','blue','violet'];
    useEffect(() => { 
        if(number > colors.length - 1) {
            setNumber(0);
            console.log("Changing number value back to 0 " + colors[0]);
        } else {
        console.log("changing number value:" + colors[number]);
        }
    }, [number])

    return (
        <>
        <h1>Example Three</h1>
        <button style={{backgroundColor: colors[number]}} onClick={() => setNumber(number + 1)}>
            Increment Number
        </button>
        <div>
            {number}
        </div>
        </>
    
    )
}