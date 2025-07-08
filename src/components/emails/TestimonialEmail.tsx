import * as React from 'react';

interface TestimonialEmailProps {
  name: string;
  email: string;
  position?: string;
  company?: string;
  rating: number;
  testimonial: string;
}

export const TestimonialEmail: React.FC<Readonly<TestimonialEmailProps>> = ({
  name,
  email,
  position,
  company,
  rating,
  testimonial,
}) => {
  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span 
          key={i} 
          style={{
            color: i < rating ? '#FFD700' : '#E5E7EB',
            fontSize: '24px',
            marginRight: '2px',
          }}
        >
          ★
        </span>
      ));
  };

  return (
    <div style={container}>
      <div style={header}>
        <h1 style={heading}>New Testimonial Submission</h1>
      </div>
      
      <div style={content}>
        <div style={section}>
          <h2 style={sectionTitle}>From</h2>
          <p style={text}><strong>Name:</strong> {name}</p>
          <p style={text}><strong>Email:</strong> <a href={`mailto:${email}`} style={link}>{email}</a></p>
          {position && <p style={text}><strong>Position:</strong> {position}</p>}
          {company && <p style={text}><strong>Company:</strong> {company}</p>}
        </div>

        <div style={section}>
          <h2 style={sectionTitle}>Rating</h2>
          <div style={{ margin: '10px 0' }}>
            {renderStars(Number(rating))}
            <span style={{ marginLeft: '10px', color: '#4B5563' }}>{rating} out of 5</span>
          </div>
        </div>

        <div style={section}>
          <h2 style={sectionTitle}>Testimonial</h2>
          <div style={testimonialBox}>
            <p style={{ ...text, fontStyle: 'italic', margin: 0 }}>&quot;{testimonial}&quot;</p>
          </div>
        </div>

        <div style={footer}>
          <p style={{ ...text, color: '#9CA3AF', margin: 0 }}>
            This testimonial was submitted through the Megas Tech Inc. website.
          </p>
          <p style={{ ...text, color: '#9CA3AF', margin: '5px 0 0 0' }}>
            <a href="https://megastechinc.com" style={{ ...link, color: '#9CA3AF' }}>Visit Website</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles
const container = {
  backgroundColor: '#F9FAFB',
  fontFamily: 'Arial, sans-serif',
  color: '#111827',
  lineHeight: 1.6,
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
};

const header = {
  backgroundColor: '#1F2937',
  padding: '20px',
  textAlign: 'center' as const,
  borderRadius: '8px 8px 0 0',
};

const heading = {
  color: '#FFFFFF',
  margin: 0,
  fontSize: '24px',
  fontWeight: 'bold' as const,
};

const content = {
  backgroundColor: '#FFFFFF',
  padding: '20px',
  borderRadius: '0 0 8px 8px',
  border: '1px solid #E5E7EB',
  borderTop: 'none',
};

const section = {
  marginBottom: '20px',
};

const sectionTitle = {
  color: '#1F2937',
  fontSize: '18px',
  margin: '0 0 10px 0',
  paddingBottom: '5px',
  borderBottom: '1px solid #E5E7EB',
};

const text = {
  margin: '0 0 10px 0',
  fontSize: '16px',
  color: '#374151',
};

const link = {
  color: '#3B82F6',
  textDecoration: 'none',
};

const testimonialBox = {
  backgroundColor: '#F3F4F6',
  padding: '15px',
  borderRadius: '6px',
  borderLeft: '4px solid #3B82F6',
};

const footer = {
  marginTop: '30px',
  paddingTop: '15px',
  borderTop: '1px solid #E5E7EB',
  fontSize: '14px',
};
