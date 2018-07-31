import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
   render() {
      return (
            <div>
                <Header />
                <div>
                    <h1>Hello World!!!</h1>
                </div>
                <Footer />
            </div>
      );
   }
}
export default App;