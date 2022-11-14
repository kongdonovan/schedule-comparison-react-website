function Input({name, type, changeState}) {
    return(
        <div className="input flex flex-col mb-5">
            <label className="dark:text-neutral-200 text-lg mb-0.5">{name}</label>
            <input className="rounded w-4/5 h-7 mx-auto" type={type} onChange={(e) => {changeState(e.target.value)}} required></input>
        </div>
    )
}

export default Input