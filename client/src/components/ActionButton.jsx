import React from "react";
import '../styles/ActionButton.css';

const ActionButton = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
);

export default ActionButton