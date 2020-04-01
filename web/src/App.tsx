import React from 'react';
import Home from './components/Home';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Home />
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-sm text-left">
							<span className="text-muted"><a href="https://github.com/gopunchcard/CovidAssessment">whitelabeling and mobile apps</a> </span>
						</div>

						<div className="col-sm text-right">
							<span className="text-muted">Made by <a href="https://www.punchcard.io">Punchcard</a></span>
						</div>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
}

export default App;
