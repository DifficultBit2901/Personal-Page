import {createContext, ReactNode, useContext, useState} from "react";
import TabButton, {TabButtonPosition} from "./TabButton.tsx";

import "./Tabs.css"
import Tab from "./Tab.tsx";
import { motion } from "framer-motion";

type TabContextType = {
    curTab: string | number;
    setCurTab: (curTab: string | number) => void;
}

const TabContext = createContext<TabContextType>({
    curTab: "",
    setCurTab: () => {
    }
});

type TabsProps = {
    children: ReactNode;
    tabs: string[] | number[];
    id: string;
}

export function useTabContext() {
    const ctx = useContext(TabContext);
    if (!ctx) {
        throw "useTabContext must be used within the <Tabs> component";
    }
    return ctx;
}

const Tabs = (props: TabsProps) => {
    const [curTab, setCurTab] = useState<string | number>(props.tabs[0]);

    const tabContextValue = {
        curTab,
        setCurTab
    };

    function getTabButtonPosition(index: number): TabButtonPosition {
        if (props.tabs.length === 1) {
            return "middle";
        }
        if (index === 0) {
            return "left";
        }
        if(index === props.tabs.length - 1) {
            return "right";
        }
        return "";
    }

    return <TabContext.Provider value={tabContextValue}>
        <motion.div className="tabs" layout>
            <div className="tabs__buttons">
                {props.tabs
                    .map((tab, index) => <TabButton id={props.id} key={tab} tabId={String(tab)} position={getTabButtonPosition(index)}/>)
                }
            </div>
            <motion.div layout className="tabs__tabs">
                {props.children}
            </motion.div>
        </motion.div>
    </TabContext.Provider>
}

Tabs.TabButton = TabButton;
Tabs.Tab = Tab;

export default Tabs;