import React from 'react';
import Header from './header.jsx';
import Front from './middle.jsx';
import Footer from './footer.jsx';


class App extends React.Component {
   render() {
      return (
            <div>
                <Header />
                <Front />
                <Footer />
            </div>
      );
   }
}
export default App;