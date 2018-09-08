import React from 'react';
import styled from 'react-emotion';

import { Navbar } from './Navbar';
import { ConnectedAbout } from './About';
import { ConnectedGames } from './Games';
import { Collapsible } from './Collapsible';

const Grid = styled('div')({
	display: 'grid',
	'@media (min-width: 500px)': {
		gridTemplateColumns: '1fr 4fr 1fr',
	},
});

const Main = styled('main')({
	gridColumnStart: 2,
	gridColumnEnd: 3,
});

export const App = () => (
	<React.Fragment>
		<Navbar title='Deneb Studios' />
		<Grid>
			<Main>
				<Collapsible title='About'>
					<ConnectedAbout />
				</Collapsible>
				<Collapsible title='Contact'>
					<article>Elit fugiat quis fugiat mollit. Pariatur ipsum sit ipsum voluptate anim anim incididunt cupidatat. Veniam ea dolor eu do pariatur quis incididunt ad amet aute eu. Ullamco mollit excepteur veniam officia Lorem velit ipsum mollit esse eiusmod. Quis sunt tempor nisi duis do. Consequat voluptate cupidatat elit elit consequat adipisicing cillum ea officia nulla.</article>
				</Collapsible>
				<Collapsible title='Games' expanded>
					<ConnectedGames />
				</Collapsible>
			</Main>
		</Grid>
	</React.Fragment>
);