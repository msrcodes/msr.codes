import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';
import Link from 'next/link';
import {cn} from '../../helpers/style';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href?: string;
}

const Button = ({
  children,
  className = '',
  href,
  ...rest
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  const inner = (
    <button
      className={cn(
        className,
        'bg-blue border-4 border-slate transition-transform hover:scale-105 focus:scale-105 focus:border-white focus:outline-none ease-in-out uppercase font-semibold px-6 py-3'
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );

  if (!href) return inner;

  return (
    <Link href={href} passHref>
      {inner}
    </Link>
  );
};

export default Button;
