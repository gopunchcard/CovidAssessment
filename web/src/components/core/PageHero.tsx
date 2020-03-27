import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface IProps {
	title?: string;
	className?: string;
	children?: {};
	parent?: string;
	parentRoute?: string;
}

const PageHero: React.FC<IProps> = (props) => {
	const { title, className, parent, parentRoute, children } = props;
	return (
		<header className={classNames('container-fluid page-hero', className)}>
			<div className="page-hero-title">
				{parent && parentRoute && <Link to={`${parentRoute}`}>&lt; {parent.toUpperCase()}</Link>}
				{title && <h1 className="mb-0">{title}</h1>}
			</div>
			{children}
		</header>
	);
};

export default PageHero;
