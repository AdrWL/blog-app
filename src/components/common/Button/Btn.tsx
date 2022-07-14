import React, {MouseEvent} from 'react';
import {Link} from "react-router-dom";

import './Btn.css';

interface Props {
    text: string;
    to?: string;
    type?: "submit";
}

export const Btn = (props: Props) => (
    props.to
        ? <Link className="btn" to={props.to}>{props.text}</Link>
        : <button type={props.type}>{props.text}</button>
);