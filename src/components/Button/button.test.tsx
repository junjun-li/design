import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './index';

describe('test Button component', () => {
  // should: 应该
  // correct: 正确的
  // 是否渲染正确的默认按钮
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText('Nice');
    /** 判断元素是否出现在文档中 */
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default btn-small');
  });

  // based: v. 以...为基础
  // different: adj. 不同的
  // 是否根据不同的props渲染
  it('should render the correct component based on different props', () => {
    const onClick = jest.fn();
    const wrapper = render(<Button btnType="primary" size="large" className="avatar" onClick={onClick}>avatar
      btn</Button>);
    const ele = wrapper.getByText('avatar btn') as HTMLButtonElement;
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveClass('btn btn-primary btn-large avatar');
    expect(ele.disabled).toBeFalsy();
    // 模拟用户点击事件
    fireEvent.click(ele);
    expect(onClick).toHaveBeenCalled();
  });

  // btnType等于link切提供href属性时渲染a链接
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType="link" href="https://foo">link</Button>);
    const ele = wrapper.getByText('link');
    expect(ele).toBeInTheDocument();
    expect(ele.tagName).toEqual('A');
    expect(ele).toHaveClass('btn btn-link btn-small');
  });

  // 当传入disabled属性时,是否禁用按钮
  it('should render disabled button when disabled set to true', () => {
    const props = {
      disabled: true,
      onClick: jest.fn(),
    };
    const wrapper = render(<Button {...props}>Nice</Button>);
    const ele = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(ele).toBeInTheDocument();
    expect(ele.disabled).toBeTruthy();
    fireEvent.click(ele);
    // 测试按钮不可以被点击
    expect(props.onClick).not.toHaveBeenCalled();
  });
});