/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  withArrow?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseButtonProps {
  as?: 'button';
}

interface LinkButtonProps extends BaseButtonProps {
  as: 'a';
  href: string;
}

type Props = ButtonProps | LinkButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-white text-primary hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white',
  secondary: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
  outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700',
  ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
  accent: 'bg-accent text-white hover:bg-accent/90 focus:ring-2 focus:ring-offset-2 focus:ring-accent',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  fullWidth = false,
  withArrow = false,
  icon,
  children,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none';
  const widthStyle = fullWidth ? 'w-full' : 'w-auto';
  const arrowStyle = withArrow ? 'pr-3' : '';

  const buttonContent = (
    <>
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {children}
        </span>
      ) : (
        <span className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {children}
          {withArrow && <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
        </span>
      )}
    </>
  );

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${arrowStyle} ${className} group`;

  if ('as' in props && props.as === 'a') {
    const { as: _as, ...linkProps } = props;
    return (
      <Link href={linkProps.href} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={isLoading}
      {...props as ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {buttonContent}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;