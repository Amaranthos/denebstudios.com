import React from 'react';

import { Navbar } from './Navbar';
import { Collapsible } from './Collapsible';

export const App = () => (
	<React.Fragment>
		<Navbar title='Deneb Studios' />
		<Collapsible title='About'>
			<article>Elit fugiat quis fugiat mollit. Pariatur ipsum sit ipsum voluptate anim anim incididunt cupidatat. Veniam ea dolor eu do pariatur quis incididunt ad amet aute eu. Ullamco mollit excepteur veniam officia Lorem velit ipsum mollit esse eiusmod. Quis sunt tempor nisi duis do. Consequat voluptate cupidatat elit elit consequat adipisicing cillum ea officia nulla.</article>
		</Collapsible>
		<Collapsible title='Contact'>
			<article>Elit fugiat quis fugiat mollit. Pariatur ipsum sit ipsum voluptate anim anim incididunt cupidatat. Veniam ea dolor eu do pariatur quis incididunt ad amet aute eu. Ullamco mollit excepteur veniam officia Lorem velit ipsum mollit esse eiusmod. Quis sunt tempor nisi duis do. Consequat voluptate cupidatat elit elit consequat adipisicing cillum ea officia nulla.</article>
		</Collapsible>
		<Collapsible title='Games' expanded>
			<article>Elit fugiat quis fugiat mollit. Pariatur ipsum sit ipsum voluptate anim anim incididunt cupidatat. Veniam ea dolor eu do pariatur quis incididunt ad amet aute eu. Ullamco mollit excepteur veniam officia Lorem velit ipsum mollit esse eiusmod. Quis sunt tempor nisi duis do. Consequat voluptate cupidatat elit elit consequat adipisicing cillum ea officia nulla.</article>
		</Collapsible>
	</React.Fragment>
);