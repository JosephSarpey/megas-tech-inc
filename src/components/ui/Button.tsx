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
  primary: 'bg-gradient-to-r from-[#17c89e] to-[#19c37d] text-white capitalize font-bold shadow-lg rounded-full hover:opacity-90 active:scale-[0.98] transition-all duration-200',
  secondary: 'bg-gray-800 text-white shadow-md hover:bg-gray-700 active:scale-[0.98] transition-all duration-200',
  outline: 'border-2 border-gray-200 bg-transparent text-gray-800 hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 dark:text-gray-200 dark:hover:bg-gray-800/50',
  accent: 'bg-gradient-to-r from-accent to-accent/90 text-white shadow-md hover:shadow-lg hover:from-accent/90 hover:to-accent active:scale-[0.98] transition-all duration-200',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-6 py-2 text-sm font-small',
  md: 'px-8 py-3 text-base font-small',
  lg: 'px-10 py-4 text-lg font-small',
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = 'primary',
  size = 'sm',
  className = '',
  isLoading = false,
  fullWidth = false,
  withArrow = false,
  icon,
  children,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 disabled:opacity-60 disabled:pointer-events-none rounded-full group';
  const widthStyle = fullWidth ? 'w-full' : 'w-auto';
  const arrowStyle = withArrow ? 'pr-4' : '';
  const iconOnly = !children && icon ? 'p-2' : '';

  const buttonContent = (
    <>
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {children}
        </span>
      ) : (
        <span className="flex items-center gap-2">
          {icon && <span className={children ? 'mr-1' : ''}>{icon}</span>}
          {children}
          {withArrow && (
            <svg
              className="ml-2 h-5 w-5 stroke-current text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      )}
    </>
  );

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${arrowStyle} ${iconOnly} ${className} group`;

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