
import React from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  price?: string;
  deliveryTime?: string;
  to?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  iconClassName,
  price,
  deliveryTime,
  to = '/services',
}) => {
  return (
    <div 
      className={cn(
        'group relative rounded-2xl p-6 bg-white border border-border flex flex-col h-full',
        'transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1',
        className
      )}
    >
      <div 
        className={cn(
          'w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4',
          'group-hover:bg-primary/20 transition-colors duration-300',
          iconClassName
        )}
      >
        <Icon className="text-primary" size={24} />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      
      {(price || deliveryTime) && (
        <div className="flex flex-col gap-1 mb-4">
          {price && (
            <div className="text-sm">
              <span className="font-medium">Valor:</span> <span className="text-muted-foreground">{price}</span>
            </div>
          )}
          {deliveryTime && (
            <div className="text-sm">
              <span className="font-medium">Prazo:</span> <span className="text-muted-foreground">{deliveryTime}</span>
            </div>
          )}
        </div>
      )}
      
      <Button 
        variant="outline" 
        size="sm" 
        className="mt-auto text-primary"
        asLink
        to={to}
      >
        Saiba mais
      </Button>
    </div>
  );
};

export default ServiceCard;
