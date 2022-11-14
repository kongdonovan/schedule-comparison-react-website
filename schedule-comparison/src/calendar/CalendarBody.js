import CalHeader from "./CalHeader";
import Calendar from "./Calendar";

function CalendarBody() {
    // to do: integrate with database, come up with proper layout for calendar (using table maybe)

    return(
        <div className="calbody">
            <CalHeader type="add"></CalHeader>
            <Calendar></Calendar>
        </div>
    )
}

export default CalendarBody;