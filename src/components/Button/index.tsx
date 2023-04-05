import React from 'react';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classnames from 'classnames';

type ButtonSize = 'large' | 'small';
type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  href?: string;
  btnType?: ButtonType;
  size?: ButtonSize;
  children?: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    size,
    href,
    disabled,
    children,
    ...rest
  } = props;

  const classes = classnames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>{children}</button>
  );
};

Button.defaultProps = {
  btnType: 'primary',
  size: 'small',
  disabled: false,
};

// export default Button;