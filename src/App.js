import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/landingPage';  // make sure path and file name are correct
import SignUpPage from './components/signUpPage';
import LoginPage from './components/loginPage';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import AgentConfig from './components/agentConfig';

function App() {
  return (
    <BrowserRouter basename="/logify">
      <Routes>
        <Route path="/" element={<LandingPage />} />  
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/agent" element={<AgentConfig />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




















































// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './components/landingPage';
// import SignUpPage from './components/signUpPage';
// import LoginPage from './components/loginPage';
// import Dashboard from './components/dashboard';
// import Profile from './components/profile';
// import AgentConfig from './components/agentConfig';

// import { DarkModeProvider, useDarkMode } from './components/darkModeContaxt'; // Make sure this path and file name is correct

// function AppContent() {
//   const { darkMode, toggleDarkMode } = useDarkMode();

//   useEffect(() => {
//     if (darkMode) {
//       document.body.setAttribute('data-theme', 'dark');
//     } else {
//       document.body.removeAttribute('data-theme');
//     }
//   }, [darkMode]);

//   return (
//     <>
//       <button onClick={toggleDarkMode} style={{ margin: 10 }}>
//         {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//       </button>

//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/dashboard/profile" element={<Profile />} />
//         <Route path="/dashboard/agent" element={<AgentConfig />} />
//       </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <DarkModeProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </DarkModeProvider>
//   );
// }

// export default App;

