import './App.css';
// import hero from "../src/img/image-hero.jpg";
// import curiosity from "../src/img/image-curiosity.jpg";
// import deepearth from "../src/img/image-deep-earth.jpg";
// import fisheye from "../src/img/image-fisheye.jpg";
// import fromabove from "../src/img/image-from-above.jpg";
// import grid from "../src/img/image-grid.jpg";
// import nightarcade from "../src/img/image-night-arcade.jpg";
// import pocket from "../src/img/image-pocket-borealis.jpg";
// import soccer from "../src/img/image-soccer-team.jpg";
// import facebook from "../src/img/facebook.png";
import interactive from "../src/img/image-interactive.jpg";
import facebook from "../src/img/facebook .png";
import insta from "../src/img/instagram.png";
import twitter from "../src/img/twitter.png";
import pinterest from "../src/img/pinterest.png";
import burger from "../src/img/burger.png"
function App() {
  return (
    <div className="App">
      <header>
        <div className='head'>
          <div className='nav'>
            <h3>loopstudios</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Events</p>
            <p>Products</p>
            <p>Support</p>
            <div className="burger">
              <img className="burger2" src={burger}/>
            </div>
          </div>
          {/* <div >
            <img src={hero} ClassName='hero-img'/>
          </div> */}
          <div className='logotext'>
            <h1 >IMMERSIVE EXPERIENCES THAT DELIVER</h1>
          </div>
        </div>
      </header> 
      <body className="body"> 
        <img className="body-img" src={interactive}/>
        <div className="body-txt">
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <small>
            Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
          </small>
        </div>
      </body>
      <body2 className="body2">
          <h1>OUR CREATIONS</h1>
          <button className="button1">SEE ALL</button>
      </body2>
      <body3 className="body3">
      <div className="column">
        <div className="row1">
          <div className="img1">
          <h1>DEEP EARTH</h1>
          </div>
          <div className="img2">
          <h1>NIGHT ARCADE</h1>
          </div>
          <div className="img3">
          <h1>SOCCER TEAM VR</h1>
          </div>
          <div className="img4">
          <h1>THE GRID</h1>
          </div>
        </div>
        <div className="row2">
          <div className="img5">
          <h1>FROM UP ABOVE VR</h1>
          </div>
          <div className="img6">
          <h1>POCKET BOREALIS</h1>
          </div>
          <div className="img7">
          <h1>THE CURIOSITY</h1>
          </div>
          <div className="img8">
          <h1>MAKE IT FISHEYE</h1>
          </div>
        </div>
        <div>
          <button className="button2">SEE ALL</button>
        </div>
      </div>
      </body3>
      <footer className="foo">
        <div className="footer-head"> 
         <h3>loopstudios</h3>
          <div className='logoo'>
            <img className='logos' src={facebook}/>
            <img className='logos' src={twitter}/>
            <img className='logos' src={pinterest}/>
            <img className='logos' src={insta}/>
         </div>
        </div>
        <div className="footer-txt">
        <p>About</p>
        <p>Careers</p>
        <p>Events</p>
        <p>Products</p>
        <p>Support</p>

        <p className="copy-right">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>
      <footer2 className="foo">
        <div className="footer-head"> 
         <h3>loopstudios</h3>
          <div className='logoo'>
            <p>About</p>
            <p>Careers</p>
            <p>Events</p>
            <p>Products</p>
            <p>Support</p>
          </div>
        </div>
        <div className="footer-txt">
          <div className="logoos">
            <img className='logos' src={facebook}/>
            <img className='logos' src={twitter}/>
            <img className='logos' src={pinterest}/>
            <img className='logos' src={insta}/>
          </div>
        <p className="copy-right">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer2>
      
    </div>
  );
}

export default App;
