import './App.css'
import Nav from './Nav.jsx'
import Header from './Header.jsx'
import img5 from './assets/4.png'
import img6 from './assets/1.jpg'
import img7 from './assets/2.jpg'
function App() {
 

  return (
    <>
     <Nav/>
     <Header/>
     <section>
      <div><p>Season Collections</p></div>
      <div>
        <div>
          <img src={img5} alt="" />
          <p>SPRING</p>
          <a href="">More</a>
        </div>
        <div>
          <img src={img6} alt="" />
          <p>SUMMER</p>
          <a href="">More</a>
        </div>
        <div>
          <img src={img7} alt="" />
          <p>WINTER</p>
          <a href="">More</a>
        </div>
      </div>
     </section>
    </>
  )
}

export default App
