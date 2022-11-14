function Calendar() {
    return(
        <div>
            <div className="table w-auto mx-auto">
                <div className="table-header-group">
                    <div className="table-row text-center dark:border-neutral-800 dark:text-neutral-200">
                        <div className="table-cell border-2 border-white dark:border-neutral-800 w-48">Sunday</div>
                        <div className="table-cell border-2 border-l-0 border-white dark:border-neutral-800 w-48">Monday</div>
                        <div className="table-cell border-2 border-l-0 border-white dark:border-neutral-800 w-48">Tuesday</div>
                        <div className="table-cell border-2 border-l-0 border-white dark:border-neutral-800 w-48">Wednesday</div>
                        <div className="table-cell border-2 border-l-0 border-white dark:border-neutral-800 w-48">Thursday</div>
                        <div className="table-cell border-2 border-l-0 border-white dark:border-neutral-800 w-48">Friday</div>
                        <div className="table-cell border-2 border-l-0 border-white dark:border-neutral-800 w-48">Saturday</div>
                    </div>
                </div>
                <div className="table-column-group dark:text-neutral-200">
                    <div className="table-column">
                        <div className="table-cell">test1</div>
                        <div className="table-cell">test1</div>
                        <div className="table-cell">test1</div>
                        <div className="table-cell">test1</div>
                        <div className="table-cell">test1</div>
                        <div className="table-cell">test1</div>
                        <div className="table-cell">test1</div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Calendar;