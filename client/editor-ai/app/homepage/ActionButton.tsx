"use client"

import React from "react";
import '../styles/ActionButton.css';

type ActionButtonProps = {
    text: string;
    onClick: () => void;
};

const ActionButton = ({ text, onClick }: ActionButtonProps) => (
        <button onClick={onClick}>{text}</button>
);

export default ActionButton