import React, { useState } from 'react';
import classnames from 'classnames';

type AlertType = 'success' | 'default' | 'warning' | 'danger'

interface BaseAlertProps {
  type?: AlertType;
  title?: string;
  className?: string;
  description?: string;
  onClose?: () => void;
  closable?: boolean;
}

export const Alert: React.FC<BaseAlertProps> = (props) => {
  const { title, type, description, closable, className, onClose } = props;
  const classes = classnames('alert', {
    [`alert-${type}`]: type,
  }, className);
  const [hide, setHide] = useState(false);
  const titleClasses = classnames('alert-title', {
    // 有desc就让title加粗
    'bold-title': description,
  });
  const handleClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
    setHide(true);
  };
  return hide ? null : (
    <div className={classes}>
      <div className={titleClasses}>{title}</div>
      {
        description && <div className="alert-desc">{description}</div>
      }
      {
        closable && <div
          className="alert-close" onClick={handleClose}
        >x</div>
      }
    </div>
  );
};

Alert.defaultProps = {
  type: 'default',
  closable: true,
};