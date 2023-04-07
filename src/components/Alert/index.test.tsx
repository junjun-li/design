import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Alert } from './index';

const defaultProps = {
  title: 'title',
  onClose: jest.fn(),
};

describe('test alert component', () => {
  it('should render default alert', () => {
    const { getByText, container, queryByText } = render(<Alert {...defaultProps} />);
    expect(getByText('title')).toBeInTheDocument();
    expect(container.querySelector('.alert')).toHaveClass('alert-default');
    fireEvent.click(container.querySelector('.alert-close')!);
    // 触发点击事件,使alert消失
    expect(defaultProps.onClose).toHaveBeenCalled();
    // TODO: 怎么查找渲染了这个子元素呢??
    // expect(container.querySelector('.alert')).toHaveClass('alert-close');
    expect(queryByText('title')).not.toBeInTheDocument();
    // queryByText 和 getByText 有什么区别啊?
    // getBy...: 查询页面不存在的元素会报错
    // queryBy...: 反之,查询页面不存在的元素返回null
  });

  it('根据alert的不同属性渲染对应组件', () => {
    const { container, queryByText } = render(
      <Alert
        {...defaultProps}
        type="success"
        description="desc"
        closable={false}
      />,
    );
    expect(queryByText('title')).toBeInTheDocument();
    expect(queryByText('desc')).toBeInTheDocument();
    expect(queryByText('title')).toHaveClass('bold-title');
    expect(container.querySelector('.alert-close')).not.toBeInTheDocument();
  });
});