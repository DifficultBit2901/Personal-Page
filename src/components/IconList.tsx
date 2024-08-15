import {motion} from "framer-motion";
import {ReactNode} from "react";

import "./IconList.css"
import Icon from "./Icon.tsx";

type IconData = {
    name: string,
    img: string,
    link?: string
}

type IconListProps = {
    data: IconData[],
    children?: ReactNode,
    size?: "small" | "medium" | "large",
}

export default function IconList(props: IconListProps) {
    function getImageWithLink(data: IconData) {
        let content = props.size ? <Icon size={props.size} alt={data.name} src={data.img}/> :
            <img alt={data.name} src={data.img} className="icon-list__item__image" />

        if(data.link) {
            content = <a rel="noopener" target="_blank" className="icon-list__item__link" href={data.link}>{content}</a>;
        }

        return content;
    }

    return <>
        <ul className="icon-list">
            {props.data.map(item => <motion.li key={item.name} className="icon-list__item" whileHover={{scale: 1.2}}>
                {getImageWithLink(item)}
                <p className="icon-list__item__title">{item.name}</p>
            </motion.li>)}
        </ul>
    </>
}