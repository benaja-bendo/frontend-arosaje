import React, { useState } from 'react';

interface QAToggleItemProps {
  question: string;
  answer: string;
}

const ToggleItem: React.FC<QAToggleItemProps> = ({ question, answer }) => {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <button onClick={handleToggle}>{question}</button>
      {!isHidden && <p>{answer}</p>}
    </div>
  );
};

export default ToggleItem;