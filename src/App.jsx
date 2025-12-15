import React, { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('signup');
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    padding: isMobile ? '0' : '40px'
  };

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    width: isMobile ? '100%' : '67%',
    maxWidth: isMobile ? '100%' : '1200px',
    backgroundColor: isMobile ? 'transparent' : '#ffffff',
    borderRadius: isMobile ? '0' : '50px',
    height: isMobile ? '100vh' : '600px',
    minHeight: isMobile ? '100vh' : 'auto',
    boxShadow: isMobile ? 'none' : '0 15px 35px rgba(0, 0, 0, 0.2)',
    marginTop: isMobile ? '0' : '50px',
    overflow: 'hidden'
  };

  const leftPanelStyle = {
    position: isMobile ? 'relative' : 'absolute',
    display: isMobile && currentPage === 'signin' ? 'none' : 'flex',
    flexDirection: 'column',
    gap: isMobile ? '20px' : '20px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19b395',
    padding: isMobile ? '50px 25px' : '40px',
    width: isMobile ? '100%' : '50%',
    height: isMobile ? '100vh' : '100%',
    minHeight: isMobile ? '100vh' : 'auto',
    borderTopLeftRadius: isMobile ? '0' : '20px',
    borderBottomLeftRadius: isMobile ? '0' : '20px',
    borderTopRightRadius: isMobile ? '0' : '0',
    left: isMobile ? 'auto' : (currentPage === 'signup' ? 0 : '50%'),
    transition: isMobile ? 'none' : 'left 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 2
  };

  const rightPanelStyle = {
    position: isMobile ? 'relative' : 'absolute',
    display: isMobile && currentPage === 'signup' ? 'none' : 'flex',
    flexDirection: 'column',
    gap: isMobile ? '15px' : '20px',
    padding: isMobile ? '40px 25px' : '40px',
    width: isMobile ? '100%' : '50%',
    height: isMobile ? '100vh' : '100%',
    minHeight: isMobile ? '100vh' : 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: isMobile ? '0' : '0',
    borderBottomRightRadius: isMobile ? '0' : '0',
    left: isMobile ? 'auto' : (currentPage === 'signup' ? '50%' : 0),
    transition: isMobile ? 'none' : 'left 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1
  };

  const buttonPrimaryStyle = {
    padding: isMobile ? '10px 28px' : '10px 30px',
    fontSize: isMobile ? '1rem' : '1.2rem',
    background: 'transparent',
    borderRadius: '50px',
    border: '2px solid white',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontWeight: '600',
    whiteSpace: 'nowrap'
  };

  const socialButtonStyle = {
    backgroundColor: 'transparent',
    padding: '0',
    fontSize: isMobile ? '1rem' : '1.2rem',
    fontWeight: '800',
    borderRadius: '50px',
    border: '2px solid black',
    cursor: 'pointer',
    transition: 'all 0.2s',
    width: isMobile ? '42px' : '50px',
    height: isMobile ? '42px' : '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  };

  const inputStyle = {
    padding: isMobile ? '11px 18px' : '12px 20px',
    borderRadius: '50px',
    backgroundColor: 'transparent',
    border: '2px solid black',
    outline: 'none',
    width: '100%',
    fontSize: isMobile ? '0.95rem' : '1rem',
    boxSizing: 'border-box'
  };

  const submitButtonStyle = {
    backgroundColor: '#19b395',
    color: 'white',
    padding: isMobile ? '11px 38px' : '12px 40px',
    fontSize: isMobile ? '1rem' : '1.2rem',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontWeight: '600',
    width: isMobile ? '100%' : 'auto'
  };

  return (
    <div style={mainContainerStyle}>
      <div style={containerStyle}>
      
        <div style={leftPanelStyle}>
          {isMobile && currentPage === 'signin' ? null : (
            <>
              <h1 style={{ 
                fontSize: isMobile ? '2.2rem' : '3rem', 
                color: 'white', 
                margin: 0, 
                textAlign: 'center',
                lineHeight: '1.2'
              }}>
                {currentPage === 'signup' ? 'Welcome!' : 'Hello, Friend!'}
              </h1>
              <p style={{ 
                fontSize: isMobile ? '1.05rem' : '1.2rem', 
                color: 'white', 
                textAlign: 'center', 
                margin: 0, 
                padding: isMobile ? '0 10px' : '0',
                lineHeight: '1.6'
              }}>
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
            </>
          )}
        </div>

        {/* Form Panel */}
        <div style={rightPanelStyle}>
          {isMobile && currentPage === 'signup' ? null : (
            <>
            <h1 style={{ 
              fontSize: isMobile ? '2rem' : '3rem', 
              color: 'black', 
              margin: 0,
              marginBottom: isMobile ? '8px' : '0'
            }}>
              {currentPage === 'signup' ? 'Create Account' : 'Sign In'}
            </h1>
            
            <div style={{ 
              display: 'flex', 
              gap: isMobile ? '12px' : '15px', 
              marginTop: isMobile ? '5px' : '10px',
              marginBottom: isMobile ? '5px' : '0'
            }}>
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

          <p style={{ 
            fontSize: isMobile ? '0.92rem' : '1.1rem', 
            color: '#666', 
            margin: isMobile ? '5px 0' : '10px 0'
          }}>
            {currentPage === 'signup' ? 'or use your email for registration' : 'or use your account'}
          </p>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: isMobile ? '14px' : '18px', 
            width: '100%',
            maxWidth: isMobile ? '100%' : '85%'
          }}>
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
              <a 
                href="#" 
                style={{ 
                  color: '#19b395', 
                  textDecoration: 'none', 
                  fontSize: isMobile ? '0.88rem' : '0.95rem', 
                  textAlign: 'center',
                  marginTop: isMobile ? '-5px' : '0'
                }}
              >
                Forgot your password?
              </a>
            )}
            <button
              onMouseEnter={() => setHoveredButton('submit')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...submitButtonStyle,
                backgroundColor: hoveredButton === 'submit' ? '#0d9488' : '#19b395',
                transform: hoveredButton === 'submit' ? 'scale(1.05)' : 'scale(1)',
                marginTop: isMobile ? '5px' : '0'
              }}
            >
              {currentPage === 'signup' ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </>
        )
        }
        </div>
       
      </div>
    </div>
  );
}

export default App;