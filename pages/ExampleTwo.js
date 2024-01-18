import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function ExampleTwo() {

    // The [] makes sure the useEffect only runs once
    /**
     * code on pages will run two times
     * one to render what we want and another is to render strict mode
     *  to find any common bugs
     */



    useEffect(() => {
        console.log('RUN');
    }, [])
    return (
        <>
        <Header />
        <main>
            <h1>Example Two</h1>
        </main>
        <Footer />

        </>
    
    )
}