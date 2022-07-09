function Page() {
    return(
        
        <div>   
            <Header />
            <MainContent/>
           <Footer />
        </div>
        
    )
}

function Header() {
    return(
        
        <header>
            <nav>
                <h1>React Library</h1>
            </nav>
        </header>
    )
}

function Footer() {
  return(
    <footer>
        <small>2022 Rybski113 development. All right reserved</small>
    </footer> 
  )
       
}

function MainContent() {
    return (
        <main>
            <h3>React gives great opportunities</h3>
        </main>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))