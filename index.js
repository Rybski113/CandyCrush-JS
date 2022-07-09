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
            <nav className="nav">
                <img src="./react.png"/>
                <ul className ="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
  return(
    <div className="footer">
       <footer >
          <small>2022 Rybski113 development. All right reserved</small>
       </footer> 
    </div>
    
  )
       
}

function MainContent() {
    return (
        <div className="main">
          <main>
            <h3>React gives great opportunities</h3>
            <ol>
                <li>Its popular library</li>
                <li>Im more likely to get a job as a developer if i know React</li>
                <li>Being smarter</li>
            </ol>
        </main>
        </div>
        
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))