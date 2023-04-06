import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Alert } from './index';

const defaultProps = {
  title: 'This is title~',
};

describe('test alert component', () => {
  it('should render default alert', () => {
    const onClose = jest.fn();
    const { getByText, container, queryByText } = render(<Alert {...defaultProps} onClose={onClose} />);
    expect(getByText('This is title~')).toBeInTheDocument();
    expect(container.querySelector('.alert')).toHaveClass('alert-default');
    fireEvent.click(container.querySelector('.alert-close')!);
    // 触发点击事件,使alert消失
    expect(onClose).toHaveBeenCalled();
    expect(queryByText('This is title~')).not.toBeInTheDocument();
    // queryByText 和 getByText 有什么区别啊?
    // getBy...: 查询页面不存在的元素会报错
    // queryBy...: 反之,查询页面不存在的元素返回null
  });
});