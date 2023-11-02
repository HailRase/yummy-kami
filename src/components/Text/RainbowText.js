import React from 'react';
import {motion} from 'framer-motion';
import {ReactComponent as Paw} from "../../assets/cat-paw1.svg";
import s from './RainbowText.module.scss'

const RainbowText = (props) => {
    const text = "ДЭНЧЫК";
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

    return (
        <div style={{width:"100%"}}>
            <div style={{ overflow: 'hidden', width: '100%'}}>
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: props.isRunning ? '-170%' : '100%' }}
                    transition={{ duration: 5, loop: Infinity, ease: 'linear' }}
                    style={{ whiteSpace: 'nowrap', position: 'relative', display: "flex", alignItems: "center" }}
                >
                    {text.split('').map((char, index) => (
                        <span key={index} style={{ color: "#ea98dd" , fontSize: "400px"}}>
              {char}
            </span>
                    ))}
                    <Paw style={{marginTop: "150px"}} width={400} height={400} className={s.pow}/>
                </motion.div>
            </div>
        </div>
    );
};


export default RainbowText;