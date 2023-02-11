import { useState } from 'react'

function CalendarCell(props) {
    let [filled, fill] = useState(null);
    let className = props.className;

    let fullClass = className + " col h-12 border-2 border-t-0 border-white dark:border-neutral-800 relative"

    return(
        <div className={fullClass} onClick={(e) => {
            fill(filled === null ? <div style={{height: "150px", zIndex: 3, width: "98.1%"}} className=" mx-auto z-50 rounded-md bg-neutral-800"></div> : null)
        }
        }>
            {filled}
        </div>
    )
}

export default CalendarCell;