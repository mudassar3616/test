import { useState, useEffect } from 'react';
import {AlignHorizontalJustifyEnd} from "lucide-react"
import { ArrowLeftToLine } from "lucide-react"
import {Facebook  } from "lucide-react"
import {Linkedin } from "lucide-react"
import { Instagram } from "lucide-react"





export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileView, setMobileView] = useState('welcome'); // 'welcome', 'signup', 'signin'

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: isMobile ? '' : '1200px',
    height: isMobile ? '100vh' : '600px',
    minHeight: isMobile ? '100vh' : 'auto',
    backgroundColor: 'white',
    borderRadius: isMobile ? '0' : '24px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden'
  };

  const signInPanelStyle = {
    position: isMobile ? 'relative' : 'absolute',
    top: 0,
    left: 0,
    width: isMobile ? '' : '45%',
    height: isMobile ? '100%' : '100%',
    minHeight: isMobile ? '600px' : 'auto',
    background: 'linear-gradient(to bottom right, #2dd4bf, #14b8a6)',
    display: isMobile && mobileView !== 'welcome' ? 'none' : 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '3rem',
    transform: isMobile ? 'none' : (isSignIn ? 'translateX(100%)' : 'translateX(0)'),
    transition: 'transform 0.6s ease-in-out'
  };

  const signUpPanelStyle = {
    position: isMobile ? 'relative' : 'absolute',
    top: 0,
    right: 0,
    width: isMobile ? '' : '38%',
    height: isMobile ? 'auto' : '100%',
    backgroundColor: 'white',
    display: isMobile && mobileView !== 'signup' ? 'none' : 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
    transform: isMobile ? 'none' : (isSignIn ? 'translateX(-100%)' : 'translateX(0)'),
    transition: 'transform 0.6s ease-in-out'
  };

  const signInFormStyle = {
    position: isMobile ? 'relative' : 'absolute',
    top: 0,
    left: 0,
    width: isMobile ? '' : '50%',
    height: isMobile ? 'auto' : '100%',
    backgroundColor: 'white',
    display: isMobile && mobileView !== 'signin' ? 'none' : 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
    opacity: isMobile ? 1 : (isSignIn ? 1 : 0),
    pointerEvents: isMobile ? 'auto' : (isSignIn ? 'auto' : 'none'),
    transition: isSignIn ? 'opacity 0.3s ease-in-out 0.3s' : 'opacity 0.3s ease-in-out'
  };

  const headingStyle = {
    fontSize: isMobile ? '2rem' : '3rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center'
  };

  const subHeadingStyle = {
    fontSize: isMobile ? '1.75rem' : '2.25rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#111827'
  };

  const paragraphStyle = {
    fontSize: isMobile ? '1rem' : '1.125rem',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const grayTextStyle = {
    color: '#6b7280',
    marginBottom: '1.5rem',
    fontSize: isMobile ? '0.875rem' : '1rem'
  };

  const buttonPrimaryStyle = {
    padding: '0.75rem 3rem',
    border: '2px solid white',
    borderRadius: '9999px',
    color: 'white',
    fontWeight: '600',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };

  const buttonSecondaryStyle = {
    width: '100%',
    padding: '0.75rem 3rem',
    backgroundColor: '#14b8a6',
    color: 'white',
    borderRadius: '9999px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1.5rem',
    transition: 'all 0.2s'
  };

  const mobileToggleButtonStyle = {
    // width: '100%',
    padding: '0.75rem',
    backgroundColor: 'transparent',
    color: '#14b8a6',
    border: '2px solid #14b8a6',
    borderRadius: '9999px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'all 0.2s'
  };

  const socialButtonStyle = {
    width: '48px',
    height: '48px',
    border: '2px solid #d1d5db',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s'
   
  };

  const socialContainerStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    fontWeight:'800'
  };

  const inputStyle = {
    // width: '100%',
    padding: '0.75rem 1.5rem',
    border: '2px solid #d1d5db',
    borderRadius: '9999px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s'
  };

  const formContainerStyle = {
    // width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  // const linkStyle = {
  //   color: '#14b8a6',
  //   textDecoration: 'none',
  //   fontSize: '0.875rem'
  // };

  const backButtonStyle = {
    position: 'absolute',
    top: '1.5rem',
    left: '1.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#14b8a6',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s'
  };

  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        
        {/* Sign In Panel */}
        <div style={signInPanelStyle}>
          <h1 style={headingStyle}>
            Welcome Back!
          </h1>
          <p style={paragraphStyle}>
            To keep connected please Sign in with your personal info
          </p>
          {!isMobile && (
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              onMouseEnter={() => setHoveredButton('main')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...buttonPrimaryStyle,
                backgroundColor: hoveredButton === 'main' ? 'white' : 'transparent',
                color: hoveredButton === 'main' ? '#14b8a6' : 'white'
              }}
            >
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          )}
          {isMobile && (
            <button
              onClick={() => setMobileView('signup')}
              onMouseEnter={() => setHoveredButton('main')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...buttonPrimaryStyle,
             
              }}
            >
              Sign Up 
            </button>
          )}
        </div>

        {/* Sign Up Panel */}
        <div style={signUpPanelStyle}>
          {isMobile && mobileView === 'signup' && (
            <button
              onClick={() => setMobileView('welcome')}
              onMouseEnter={() => setHoveredButton('back-signup')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...backButtonStyle,
                transform: hoveredButton === 'back-signup' ? 'scale(1.2)' : 'scale(1)'
              }}
            >
              <ArrowLeftToLine />
            </button>
          )}


          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

          
          <h2 style={subHeadingStyle}>Create Account</h2>
          
          <div style={socialContainerStyle}>
            <button
              onMouseEnter={() => setHoveredSocial('f-signup')}
              onMouseLeave={() => setHoveredSocial(null)}
              style={{
                ...socialButtonStyle,
               
              }}
            >
              <span><Facebook /></span>
            </button>
            <button
              onMouseEnter={() => setHoveredSocial('g-signup')}
              onMouseLeave={() => setHoveredSocial(null)}
              style={{
                ...socialButtonStyle,
              
              }}
            >
              <span ><Instagram /></span>
            </button>
            <button
              onMouseEnter={() => setHoveredSocial('in-signup')}
              onMouseLeave={() => setHoveredSocial(null)}
              style={{
                ...socialButtonStyle,
               
              }}
            >
              <span >  <Linkedin /></span>
            </button>
          </div>

          <p style={grayTextStyle}>or use your email for registration</p>

          <div style={formContainerStyle}>
            <input
              type="text"
              placeholder="Name"
              style={inputStyle}
            
            />
            <input
              type="email"
              placeholder="Email"
              style={inputStyle}
            
            />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
            
            />
            <button
              onMouseEnter={() => setHoveredButton('signup')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...buttonSecondaryStyle,
    
                transform: hoveredButton === 'signup' ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              Sign Up
            </button>
            </div>
            
            {/* Mobile Toggle Button */}
            {isMobile && (
              <button
                onClick={() => setMobileView('signin')}
                onMouseEnter={() => setHoveredButton('mobile-toggle-signup')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  ...mobileToggleButtonStyle,
                  backgroundColor: hoveredButton === 'mobile-toggle-signup' ? '#14b8a6' : 'transparent',
                  color: hoveredButton === 'mobile-toggle-signup' ? 'white' : '#14b8a6'
                }}
              >
                Already have an account? Sign In
              </button>
            )}
          </div>
        </div>

        {/* Sign In Form */}
        <div style={signInFormStyle}>
          {isMobile && mobileView === 'signin' && (
            <button
              onClick={() => setMobileView('welcome')}
              onMouseEnter={() => setHoveredButton('back-signin')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...backButtonStyle,
                transform: hoveredButton === 'back-signin' ? 'scale(1.2)' : 'scale(1)'
              }}
            >
              <ArrowLeftToLine />
            </button>
          )}
          
          <h2 style={subHeadingStyle}>Sign In</h2>
          
          <div style={socialContainerStyle}>
            <button
              // onMouseEnter={() => setHoveredSocial('f-signin')}
              onMouseLeave={() => setHoveredSocial(null)}
              style={{
                ...socialButtonStyle,
                borderColor: hoveredSocial === 'f-signin' ? '#14b8a6' : '#d1d5db',
                transform: hoveredSocial === 'f-signin' ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <span > <Facebook /> </span>
            </button>
            <button
              onMouseEnter={() => setHoveredSocial('g-signin')}
              onMouseLeave={() => setHoveredSocial(null)}
              style={{
                ...socialButtonStyle,
                borderColor: hoveredSocial === 'g-signin' ? '#14b8a6' : '#d1d5db',
                transform: hoveredSocial === 'g-signin' ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <span ><Instagram /></span>
            </button>
            <button
              onMouseEnter={() => setHoveredSocial('in-signin')}
              onMouseLeave={() => setHoveredSocial(null)}
              style={{
                ...socialButtonStyle,
                borderColor: hoveredSocial === 'in-signin' ? '#14b8a6' : '#d1d5db',
                transform: hoveredSocial === 'in-signin' ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <span > <Linkedin /> </span>
            </button>
          </div>

          <p style={grayTextStyle}>or use your account</p>

          <div style={formContainerStyle}>
            <input
              type="email"
              placeholder="Email"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#14b8a6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#14b8a6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
            
            <button
              onMouseEnter={() => setHoveredButton('signin')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                ...buttonSecondaryStyle,
                backgroundColor: hoveredButton === 'signin' ? '#0d9488' : '#14b8a6',
                transform: hoveredButton === 'signin' ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              Sign In
            </button>
            
            {/* Mobile Toggle Button */}
            {isMobile && (
              <button
                onClick={() => setMobileView('signup')}
                onMouseEnter={() => setHoveredButton('mobile-toggle-signin')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  ...mobileToggleButtonStyle,
                  backgroundColor: hoveredButton === 'mobile-toggle-signin' ? '#14b8a6' : 'transparent',
                  color: hoveredButton === 'mobile-toggle-signin' ? 'white' : '#14b8a6'
                }}
              >
                Don't have an account? Sign Up
              </button>
            )}
          </div>


        </div>

      </div>
    </div>
  );
}