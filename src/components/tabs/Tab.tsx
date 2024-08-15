import {ReactNode} from "react";
import {useTabContext} from "./Tabs.tsx";
import {AnimatePresence, motion} from "framer-motion";

type TabProps = {
    children?: ReactNode;
    id: string | number;
}

export default function Tab(props: TabProps) {
    const {curTab} = useTabContext();
    const isActive = curTab === props.id;
    const tabVariants = {
        "start": {
            x: -80,
            opacity: 0,
            display: "none",
        },
        "shown": {
            x: 0,
            opacity: 1,
            display: "block",
            transition: {
                delay: 0.3,
            }
        },
        "end": {
            x: 80,
            opacity: 0,
            display: "none",
            transition: {
                duration: 0.3,
            }
        }
    }

    return <AnimatePresence>
        {isActive && <motion.div layout className="tab-container" variants={tabVariants} initial="start" animate="shown" exit="end">
            {props.children}
        </motion.div>}
    </AnimatePresence>
}