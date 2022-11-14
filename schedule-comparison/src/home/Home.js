function Home() {
    return(
        <div className="hometext">
            <h1 className="font-light dark:text-neutral-200 mb-12 mt-16 text-6xl text-center">a tool for all your needs</h1>
            <hr className="border-neutral-800 dark:border-neutral-200 mx-auto mt-16 mb-12 w-16"></hr>
            <p className="dark:text-neutral-200 mx-auto text-center w-1/3">
                This tool can be used to compare your schedule with that of your friends. Make an account in order to input your own
                schedule and compare with your friends.
            </p>
            <hr className="border-neutral-800 dark:border-neutral-200 mx-auto mt-16 mb-12 w-16"></hr>
            <p className="dark:text-neutral-200 mx-auto text-center">
                a project by Donovan Kong
            </p>
        </div>
        
    );
}

export default Home;