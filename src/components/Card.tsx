import {ReactNode} from "react";
import {motion} from "framer-motion";

import "./Card.css"

type CardProps = {
    children?: ReactNode;
    title?: string;
}

export default function Card(props: CardProps) {
    return <motion.div layout className="card">
        {props.title && (<h2 className="card_title">{props.title}</h2>)}
        {props.children}
    </motion.div>
}