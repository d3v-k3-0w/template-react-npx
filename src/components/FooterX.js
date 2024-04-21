import React from 'react';
import logo from '../../src/assets/icons/logo.svg';

import '../../src/assets/css/footer.css';

const FooterX = () => {
	return (
		<footer className="footer">
			<img src={logo} className="App-logo" alt="logo" />
			<h4>
				<span>&copy; dev-kei-ow</span>
			</h4>
		</footer>
	);
};

export default FooterX;
