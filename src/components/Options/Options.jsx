import css from "./Options.module.css"


export default function Options ({ onClick, seeButton }) {
    return (
      <div> 
        <button className={css.button} onClick={() => onClick("good")}>Good</button>
        <button className={css.button} onClick={() => onClick("neutral")}>Neutral</button>
        <button className={css.button} onClick={() => onClick("bad")}>Bad</button>
        {seeButton > 0 && <button className={css.button} onClick={() => onClick("reset")}>Reset</button>}
      </div>
    );
  }
  