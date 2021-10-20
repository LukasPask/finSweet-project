// Imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contacts' component={ContactsPage} />
          <Route path='/services' component={ServicesPage} />
          <Route path='/blog' component={BlogPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
