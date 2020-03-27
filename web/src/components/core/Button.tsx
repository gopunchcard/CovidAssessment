import * as React from 'react';
import { Link } from 'react-router-dom';
import { Spin, Icon } from 'antd';
// tslint:disable-next-line
const classNames = require('classnames');

interface IProps {
	onClick?: (e?: any) => any;
	children?: {};
	aux?: boolean;
	to?: string | {};
	// type?: string;
	disabled?: boolean;
	className?: string;
	tabIndex?: number;
	loading?: boolean;
	style?: {};
}

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin={true} />;

const Button: React.StatelessComponent<IProps> = ({
	to,
	onClick,
	className,
	// type,
	disabled,
	children,
	tabIndex,
	loading,
	// ...props //Edge and IE do not support Rest/Spread operators
}) => {
	if (to && !disabled) {

		return (
			<Link onClick={onClick} to={to} className={classNames('btn', className)} tabIndex={tabIndex} >
				<span className="btn-content">{children}</span>
				{loading && <Spin indicator={antIcon}/>}
			</Link>
		);
	} else {
		return (
			<button
				onClick={onClick}
				className={classNames('btn', className, {'btn-loading': loading})}
				type='button'
				disabled={disabled || loading}
				tabIndex={tabIndex}
				// {...props}  //Edge and IE do not support Rest/Spread operators
			>
				{loading && <Spin indicator={antIcon} className="ant-btn-spin" />}
				<span className="btn-content">{children}</span>
			</button>
		);
	}
};

export default Button;
