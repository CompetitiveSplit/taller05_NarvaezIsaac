import "./App.css";
import nuevaImagen from "./assets/blasphemous.gif";

function App() {
  return (
    <>
      <div>
        <img src={nuevaImagen} alt="" />
        <h1>Blasphemous</h1>
        <p>
          Blasphemous is a Metroidvania action-adventure game taking place in
          the fictional region of Cvstodia. Players assume control of the
          Penitent One, a silent knight wielding a sword named Mea Culpa, as he
          travels the land in a pilgrimage.
        </p>
      </div>
    </>
  );
}

export default App;
