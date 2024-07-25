import './App.css';
function App() {
  return (
    <div className="App">
      <div className='First-Row'>
        <div className='Intro-Contaianer'>
          <img className='Personal-Photo' src='Diego.jpg' alt='Personal Photo'></img>
          <h2>Diego Reynoso</h2>
          <p1>Incoming Transfer Student from East Los Angeles College </p1>
        </div>
        <div className='Links-Container'>
          <h2 className='links-header'>  Links </h2>
          <a href ='https://www.linkedin.com/in/diego-reynoso-a04876317/' target='Black1'>
            <div className='Link-Container'>
              <p>linkedin</p>
            </div>
          </a>


          <a href ='https://ucla.joinhandshake.com/profiles/57150541' target='Black2'>
            <div className='Link-Container'>
              <p>HandShake</p>
            </div>
          </a>


          <a href ='https://www.youtube.com/watch?v=YF1eYbfbH5k&t=328s' target='Black3'>
            <div className='Link-Container'>
              <p>Favorite Music</p>
            </div>
          </a>


          <a href ='https://github.com/SSSCUAT'target='Black4'>
            <div className='Link-Container'>
              <p>Github</p>
            </div>
          </a>


        </div>
      </div>


      <div className='Second-Row'>
        <div className='About-Me'>
          <h1>About Me</h1>
          <div className='About-Me-Container'>
            <p>I was born</p>
          </div>
        </div>
        <div className='Expirince'>
          <h1>Experience</h1>


        </div>
      </div>
    </div>
  );
}


export default App;


