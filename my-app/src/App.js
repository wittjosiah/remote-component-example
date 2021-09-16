import { RemoteComponent } from './RemoteComponent';
import MyContext from 'my-context';
import { useContext } from 'react';

const url = "http://localhost:5000/main.js";

const LocalComponent = () => {
  const context = useContext(MyContext);
  return <div>{context}</div>;
}

function App() {
  return (
    <MyContext.Provider value={'new'}>
      Remote: <RemoteComponent url={url} />
      Local: <LocalComponent />
    </MyContext.Provider>
  );
}

export default App;
