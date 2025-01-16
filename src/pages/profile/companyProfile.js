import React from 'react';
import './companyProfile.css';

const CompanyProfile = () => {
  return (
    <div className="company-profile">
      <h2>Company Profile</h2>
      <p className="intro-text">
        Welcome to our company! We specialize in providing innovative solutions that help businesses grow. Our mission is to lead in the development and delivery of technology-based solutions.
      </p>
      <section className="history-section">
        <h3>Our History</h3>
        <p>
          Founded in 2010, our company has been at the forefront of innovation. With a dedicated team of professionals, we have delivered exceptional services to our clients across various industries.
        </p>
      </section>
    </div>
  );
};

export default CompanyProfile;
