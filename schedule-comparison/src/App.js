import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './nav/NavBar'
import Home from './home/Home'
import AccountContainer from './login/AccountContainer';
import CalendarBody from './calendar/CalendarBody'
import { useState } from 'react'

function App() {
  const [loggedIn, loginState] = useState(document.cookie ? true : false);

  return (
    <Router>
      <div className="App">
        <NavBar loginStatus={loggedIn} onSignout={loginState}></NavBar>
        <div className="bg-transparent content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="login-signup" element={<AccountContainer setLoginState={loginState}/>}></Route>
            <Route path="add-schedule" element={<CalendarBody />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
