import './span.css';
import React from 'react';

interface SpanProps {
  label?: string;
  maxWidth?: boolean;
  name?: string;
  icon?: boolean;
}

const Span: React.FC<SpanProps> = ({ label }) => {
  return (
    <div className="styled-span">
      <span className="styled-span-form">{label}</span>
    </div>
  );
};

export default Span;
