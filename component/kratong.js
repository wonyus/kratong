import * as React from "react";
import { useRef } from "react";
import { motion, useTime, useTransform, useAnimationFrame, MotionConfig } from "framer-motion";
import Image from 'next/image'
const Kratong = (props) => {
    const myLoader = () => {
        return `https://cmc.co.th/loykrathong/image/krathong-3.png`
    }

    const ref = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -20;
        ref.current.style.transform = `translateY(${y}px) rotateX(${0}deg) rotateY(${rotate}deg)`;
    });
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    return (
        <>
            <div className="container" style={{ top: getRandomArbitrary(600, 200) }}>
                <div className="cube" ref={ref}>
                    <Image
                        loader={myLoader}
                        src="me.png"
                        alt="Picture of the author"
                        width={120}
                        height={120}
                    />
                </div>
            </div>
        </>


    );
};
export default Kratong