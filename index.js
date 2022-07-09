function Page() {
    return(
        <div>
            <header>
            <nav>
                <h1>React Library</h1>
            </nav>
        </header>
        <main>
            <h3>React gives great opportunities</h3>
        </main>
        <footer>
             <small>2022 Rybski113 development. All right reserved</small>
        </footer>
        </div>
        
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))