function CalHeader({ type }) {
    if (type === "add") {
        return <h1 className="font-light dark:text-neutral-200 mb-12 mt-16 text-6xl text-center">create your schedule</h1>
    } else {
        return <h1 className="font-light dark:text-neutral-200 mb-12 mt-16 text-6xl text-center">compare schedules</h1>
    }
}

export default CalHeader;