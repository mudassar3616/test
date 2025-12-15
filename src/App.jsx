import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('signup');
  const [hoveredButton, setHoveredButton] = useState(null);

  const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6'
  };

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    width: '67%',
    backgroundColor: '#ffffff',
    borderRadius: '50px',
    height: '600px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
    marginTop: '50px',
    overflow: 'hidden'
  };

  const leftPanelStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19b395',
    padding: '40px',
    width: '50%',
    height: '100%',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    left: currentPage === 'signup' ? 0 : '50%',
    transition: 'left 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 2
  };

  const rightPanelStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '40px',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    left: currentPage === 'signup' ? '50%' : 0,
    transition: 'left 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1
  };

  const buttonPrimaryStyle = {
    padding: '10px 30px',
    fontSize: '1.2rem',
    background: 'transparent',
    borderRadius: '50px',
    border: '2px solid white',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontWeight: '600'
  };

  const socialButtonStyle = {
    backgroundColor: 'transparent',
    padding: '8px 18px',
    fontSize: '1.2rem',
    fontWeight: '800',
    borderRadius: '50px',
    border: '2px solid black',
    cursor: 'pointer',
    transition: 'all 0.2s',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const inputStyle = {
    padding: '12px 20px',
    borderRadius: '50px',
    backgroundColor: 'transparent',
    border: '2px solid black',
    outline: 'none',
    width: '100%',
    fontSize: '1rem'
  };

  const submitButtonStyle = {
    backgroundColor: '#19b395',
    color: 'white',
    padding: '12px 40px',
    fontSize: '1.2rem',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontWeight: '600'
  };

  return (
    <div style={mainContainerStyle}>
      <div style={containerStyle}>
        <div style={leftPanelStyle}>
          <h1 style={{ fontSize: '3rem', color: 'white', margin: 0 }}>
            {currentPage === 'signup' ? 'Welcome!' : 'Hello, Friend!'}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'white', textAlign: 'center', margin: 0 }}>
            {currentPage === 'signup' 
              ? 'Create your account and start your journey with us today'
              : 'Enter your personal details and start journey with us'
            }
          </p>
          <button
            onClick={() => setCurrentPage(currentPage === 'signup' ? 'signin' : 'signup')}
            onMouseEnter={() => setHoveredButton('toggle')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              ...buttonPrimaryStyle,
              backgroundColor: hoveredButton === 'toggle' ? 'white' : 'transparent',
              color: hoveredButton === 'toggle' ? '#19b395' : 'white',
              transform: hoveredButton === 'toggle' ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            {currentPage === 'signup' ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        <div style={rightPanelStyle}>
          <h1 style={{ fontSize: '3rem', color: 'black', margin: 0 }}>
            {currentPage === 'signup' ? 'Create Account' : 'Sign In'}
          </h1>
          
          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <button
              onMouseEnter={() => setHoveredButton('f')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...socialButtonStyle,
                transform: hoveredButton === 'f' ? 'scale(1.1)' : 'scale(1)',
                borderColor: hoveredButton === 'f' ? '#19b395' : 'black'
              }}
            >
              f
            </button>
            <button
              onMouseEnter={() => setHoveredButton('g')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...socialButtonStyle,
                transform: hoveredButton === 'g' ? 'scale(1.1)' : 'scale(1)',
                borderColor: hoveredButton === 'g' ? '#19b395' : 'black'
              }}
            >
              G
            </button>
            <button
              onMouseEnter={() => setHoveredButton('in')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...socialButtonStyle,
                transform: hoveredButton === 'in' ? 'scale(1.1)' : 'scale(1)',
                borderColor: hoveredButton === 'in' ? '#19b395' : 'black'
              }}
            >
              in
            </button>
          </div>

          <p style={{ fontSize: '1.1rem', color: '#666', margin: '10px 0' }}>
            {currentPage === 'signup' ? 'or use your email for registration' : 'or use your account'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '85%' }}>
            {currentPage === 'signup' && (
              <input
                style={inputStyle}
                type="text"
                placeholder="Name"
                onFocus={(e) => (e.target.style.borderColor = '#19b395')}
                onBlur={(e) => (e.target.style.borderColor = 'black')}
              />
            )}
            <input
              style={inputStyle}
              type="email"
              placeholder="Email"
              onFocus={(e) => (e.target.style.borderColor = '#19b395')}
              onBlur={(e) => (e.target.style.borderColor = 'black')}
            />
            <input
              style={inputStyle}
              type="password"
              placeholder="Password"
              onFocus={(e) => (e.target.style.borderColor = '#19b395')}
              onBlur={(e) => (e.target.style.borderColor = 'black')}
            />
            {currentPage === 'signin' && (
              <a href="#" style={{ color: '#19b395', textDecoration: 'none', fontSize: '0.95rem', textAlign: 'center' }}>
                Forgot your password?
              </a>
            )}
            <button
              onMouseEnter={() => setHoveredButton('submit')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...submitButtonStyle,
                backgroundColor: hoveredButton === 'submit' ? '#0d9488' : '#19b395',
                transform: hoveredButton === 'submit' ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {currentPage === 'signup' ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;