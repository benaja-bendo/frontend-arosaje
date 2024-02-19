import { FC } from 'react';
import { CareScaleWrapper } from './CareScale.styled';

interface CareScaleProps {
   difficulty: number;
}
   

const CareScale: FC<CareScaleProps> = ({ difficulty }) => (
 <CareScaleWrapper data-testid="CareScale">
    <div className="care-scale">
      {/* Système d'étoiles */}
      {[...Array(difficulty)].map((_, index) => (
        <span key={index} role="img" aria-label="star">⭐</span>
      ))}
    </div>
 </CareScaleWrapper>
);

export default CareScale;
