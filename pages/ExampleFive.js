import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * we want to setup a counter
 * after every one second the number increases by 1
 * we want to display that number on screen as it increases
 * no button needed it will update number automatically
 * 
 */


export default function ExampleFive() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count])
    return (
        <>
        <Header /> 
        <main>
            <div style ={{
                display: 'flex',
                margin: 'auto',
                textAlign: 'center',
            }}>
                <h1>Number counter</h1>
                <h3>Example using setInterval</h3>
                <div>{count}</div>

            </div>
        </main>
        <Footer />
        </>
    )
}