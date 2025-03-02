import css from "./Feedback.module.css";


export default function Feedback ({click, seeButton, percent}) {

    return <div>
        <p className={css.p}>Good: {click.good}</p>
        <p className={css.p}>Neutral: {click.neutral}</p>
        <p className={css.p}>Bad: {click.bad}</p>

        {seeButton > 0 && (<p className={css.p}>Positive: {percent} %</p>)}
    </div>
}