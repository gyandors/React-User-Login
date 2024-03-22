import React from 'react';
import Card from './UI/Card';
import './Welcome.css';

export default function Welcome() {
  return (
    <Card className="welcome">
      <div>
        <span>Welcome back..!</span>
      </div>
    </Card>
  );
}
