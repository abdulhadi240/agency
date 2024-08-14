'use client'
import styles from '../../components/Parallex/styles.module.scss'
import ZoomParallax from '../../components/Parallex/index';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    return (
        <main className='mb-52 mt-52'>
            <ZoomParallax />
        </main>
    )
}