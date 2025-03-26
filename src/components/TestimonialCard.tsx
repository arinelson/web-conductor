
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  avatarUrl,
  className,
}) => {
  return (
    <div 
      className={cn(
        'glass rounded-2xl p-6 flex flex-col h-full transition-all duration-300',
        'hover:shadow-glass-hover',
        className
      )}
    >
      <div className="flex items-center mb-4">
        {avatarUrl ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-border">
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary font-medium">
            {name.split(' ').map(part => part[0]).join('').substring(0, 2)}
          </div>
        )}
        
        <div className="flex-grow">
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={cn(
              'mr-1',
              i < rating ? 'fill-primary text-primary' : 'text-muted'
            )}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground italic flex-grow">{content}</p>
    </div>
  );
};

export default TestimonialCard;
