import React from 'react';

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundColor: '#f8f9fa',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem',
        textAlign: 'center'
      }}
    >
      <h1 style={{ color: '#1E3A8A', fontWeight: '700', marginBottom: '1rem' }}>
        About Us
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#333', maxWidth: '800px' }}>
        Welcome to the Data Collection App! This platform helps you create, manage, and view
        collected data seamlessly. Built with the MERN stack, it’s designed to be fast, intuitive,
        and scalable for any data-driven project.
      </p>
    </div>
  );
};

export default AboutUs;
