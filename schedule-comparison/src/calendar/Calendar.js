import CalendarCell from "./CalendarCell"

function Calendar() {
    let cellArray = [];
    let offset = 0;
    let suffix = "am"

    for (let i = 0; i < 13; i++) { // signifies # of rows
        if (i === 5) offset = 1;
        let time = (i + 8 + offset) % 13;
        if (time === 12) suffix = "pm"
        cellArray.push(<div key={cellArray.length} className="text-sm mx-1 relative -top-3.5 mt-0 text-right">{time + suffix}</div>)
        cellArray.push(<CalendarCell key={cellArray.length}></CalendarCell>)
        for (let j = 0; j < 6; j++) {
            cellArray.push(<CalendarCell key={cellArray.length} className="border-l-0"></CalendarCell>)
        }

    }

    return(
        <div>
            <div className="relative -left-20 grid mx-auto w-2/3 grid-rows-13 gap-0 grid-cols-8 text-center dark:border-neutral-800 dark:text-neutral-200">
                <div></div>
                <div className="col border-2 border-white dark:border-neutral-800">sunday</div>
                <div className="col border-2 border-l-0 border-white dark:border-neutral-800">monday</div>
                <div className="col border-2 border-l-0 border-white dark:border-neutral-800">tuesday</div>
                <div className="col border-2 border-l-0 border-white dark:border-neutral-800">wednesday</div>
                <div className="col border-2 border-l-0 border-white dark:border-neutral-800">thursday</div>
                <div className="col border-2 border-l-0 border-white dark:border-neutral-800">friday</div>
                <div className="col border-2 border-l-0 border-white dark:border-neutral-800">saturday</div>
                {cellArray}
            </div>
        </div>
        
    );
}

export default Calendar;