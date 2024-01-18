import {useEffect,useState} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function ExampleOne() {

        /**
     * code on pages will run two times
     * one to render what we want and another is to render strict mode
     *  to find any common bugs
     */

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
    })

    return (
        <>
        <Header />
        <main>
            <h1>Example One</h1>
            <div>Infinit Loop</div>
        </main>
        <Footer />

        </>
    
    )
}