import React from 'react';
import classnames from 'classnames';

type AlertType = 'success' | 'default' | 'warning' | 'danger'

interface BaseAlertProps {
  type?: AlertType;
  title?: string;
  description?: string;
  onClose?: () => void;
  closable?: boolean;
}

export const Alert: React.FC<BaseAlertProps> = (props) => {
  const { title,type, description, closable, onClose } = props;
  const classes = classnames('alert', {
    [`alert-${type}`]: type,
  });
  const titleClasses = classnames('alert-title', {
    // 有desc就让title加粗
    'bold-title': description,
  });
  return (
    <div className={classes}>
      <div className={titleClasses}>{title}</div>
      {
        description && <div className="alert-desc">{description}</div>
      }
      {
        closable && <div className="alert-close">x</div>
      }
    </div>
  );
};

Alert.defaultProps = {
  type: 'success',
};