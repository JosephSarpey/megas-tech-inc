/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

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
  // Solid accent — primary CTA
  primary:
    'bg-accent text-white border-accent hover:bg-accent-dark hover:border-accent-dark shadow-sm hover:shadow-md',
  // Dark translucent — secondary action
  secondary:
    'bg-white/10 text-white border-white/5 hover:bg-white/15 hover:border-white/10',
  // Outlined — tertiary action
  outline:
    'bg-transparent text-white border-white/10 hover:border-[#10B981] hover:text-[#10B981]',
  // Ghost — minimal action
  ghost:
    'bg-transparent text-[#A1A1AA] border-transparent hover:bg-white/5 hover:text-white',
  // Accent (alias for primary)
  accent:
    'bg-accent text-white border-accent hover:bg-accent-dark hover:border-accent-dark shadow-sm hover:shadow-md',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm font-semibold',
  md: 'px-6 py-2.5 text-[0.9375rem] font-semibold',
  lg: 'px-8 py-3.5 text-base font-semibold',
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
  const baseStyles =
    'inline-flex items-center justify-center gap-2 border rounded-btn leading-none font-semibold tracking-[-0.01em] cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';
  const widthStyle = fullWidth ? 'w-full' : 'w-auto';

  const buttonContent = (
    <>
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          {children}
        </span>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
          {withArrow && (
            <LuArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          )}
        </>
      )}
    </>
  );

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className} group`;

  if ('as' in props && props.as === 'a') {
    const { as: _as, ...linkProps } = props as LinkButtonProps;
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
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {buttonContent}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;