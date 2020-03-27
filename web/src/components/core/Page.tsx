import * as React from 'react';
import classNames from 'classnames';
import { Utils } from '../../common/utils';

interface IProps {
	children: {};
	className?: string;
	title?: string;
}

const Page: React.FC<IProps> = props => {
	const { className, children, title } = props;

	React.useEffect(() => {
		if (title && title !== '') {
			Utils.setDocTitle(props.title);
		}
	});

	return (
		<div className={classNames('container wrapper-inner page-content-wrapper bg-white py-3 pb-4', className)}>
			{children}
		</div>
	);
};

export default Page;
