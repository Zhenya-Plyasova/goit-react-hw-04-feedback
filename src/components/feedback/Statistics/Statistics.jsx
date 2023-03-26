import React from "react";
import { Notification } from "../Notification";
import css from "./Statistics.module.css"

export const Statistics =({good, bad, neutral, total, positivePercentage})=> {

   return <div>  
   {total===0 ? <Notification message="There is no feedback"></Notification>:
    <ul className = {css.statisticList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
    </ul>}
</div>    
}
