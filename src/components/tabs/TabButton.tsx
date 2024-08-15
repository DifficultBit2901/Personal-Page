import {ReactNode} from "react";
import {useTabContext} from "./Tabs.tsx";
import {motion} from "framer-motion";

import "./TabButton.css"

export type TabButtonPosition = "left" | "right" | "middle" | "";

type TabButtonProps = {
    children?: ReactNode;
    id: string;
    tabId: string | number;
    position: TabButtonPosition;
}

export default function TabButton(props: TabButtonProps) {
    const {curTab, setCurTab} = useTabContext();
    const isActive = props.tabId === curTab;
    let buttonClass = "tab__button tab__button-" + props.position;
    if(isActive) {
        buttonClass += " tab__button-active";
    }
    return <button className={buttonClass} onClick={() => {setCurTab(props.tabId)}}>
        {props.tabId}
        {isActive && (<motion.div className="tab__button_underline" layoutId={props.id}></motion.div>)}
    </button>
}