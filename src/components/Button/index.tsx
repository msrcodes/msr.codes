import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';
import {cn} from '../../helpers/style';
import Link from 'next/link';

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
  const classNames = cn(
    className,
    'bg-blue border-4 border-slate transition-transform hover:scale-105 focus:scale-105 focus:border-white focus:outline-none ease-in-out px-6 py-3 uppercase font-semibold'
  );

  return (
    <Link href={href ?? ''} passHref>
      <button type="button" className={classNames} {...rest}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
