import {ReactNode} from "react";

import "./Icon.css"

type IconSize = "small" | "medium" | "large";

type IconCredit = {
    name: string;
    link: string;
}

type IconProps = {
    children?: ReactNode,
    src: string,
    alt: string,
    size: IconSize,
    credit?: IconCredit,
}

export default function Icon(props: IconProps) {
    return <div className="icon_container">
        <img src={props.src} className={`icon icon-${props.size}`} alt={props.alt}/>
        {props.credit && (
            <p className="icon_credits">
                Image created by <a className="icon_credits__link" target="_blank" rel="noopener" href={props.credit.link}>{props.credit.name}</a>
            </p>
        )}
    </div>
}