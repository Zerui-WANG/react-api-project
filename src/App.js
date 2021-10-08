import logo from './logo.svg';
import './App.css';

function App() {
  return (
    {
      fetch("https://imgur-apiv3.p.rapidapi.com/3/image/3", {
        "method": "GET",
        "headers": {
          "authorization": "c83b5228f65e085866dde18f29ed86ed5b1301fd",
          "x-rapidapi-host": "imgur-apiv3.p.rapidapi.com",
          "x-rapidapi-key": "a9f3030fd7msh0679db468b972c0p12d7a4jsn1a4f7b94b554"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      })
    }
    </div>
  );
}

export default App;
