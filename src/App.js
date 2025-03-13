import React from 'react';

const Box = ({ backgroundColor, style }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        border: '1px solid black',
        boxSizing: 'border-box',
        ...style
      }}
    />
  );
};

const App = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      width: '100%', 
      height: '100vh'
    }}>
      {/* Top row - 3 purple/pink boxes */}
      <div style={{ 
        display: 'flex', 
        width: '100%', 
        height: '25vh' 
      }}>
        <Box backgroundColor="#E0A7F0" style={{ flex: 1 }} />
        <Box backgroundColor="#D13B8F" style={{ flex: 1 }} />
        <Box backgroundColor="#E0A7F0" style={{ flex: 1 }} />
      </div>
      
      {/* Middle row - white box */}
      <div style={{ 
        display: 'flex', 
        width: '100%', 
        height: '50vh' 
      }}>
        <Box backgroundColor="white" style={{ flex: 1 }} />
      </div>
      
      {/* Bottom row - green and brown boxes */}
      <div style={{ 
        display: 'flex', 
        width: '100%', 
        height: '25vh' 
      }}>
        <Box backgroundColor="#5E8C25" style={{ flex: 1 }} />
        <Box backgroundColor="#C67D30" style={{ flex: 1 }} />
      </div>
    </div>
  );
};

export default App;