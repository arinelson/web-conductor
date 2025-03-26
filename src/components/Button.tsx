
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'default' | 'lg';
  asChild?: boolean;
  asLink?: boolean;
  to?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asLink, to, children, ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none',
      {
        'bg-primary text-primary-foreground shadow hover:bg-primary/90 active:translate-y-0.5': variant === 'default',
        'bg-transparent border border-primary text-primary hover:bg-primary/10 active:translate-y-0.5': variant === 'outline',
        'bg-transparent text-foreground hover:bg-secondary active:translate-y-0.5': variant === 'ghost',
        'bg-transparent text-primary underline-offset-4 hover:underline': variant === 'link',
        'h-9 px-4 py-2': size === 'sm',
        'h-11 px-6 py-2.5': size === 'default',
        'h-12 px-8 py-3 text-base': size === 'lg',
      },
      className
    );

    if (asLink && to) {
      return (
        <Link to={to} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
