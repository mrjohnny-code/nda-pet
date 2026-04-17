import "./Tabs.scss";

export default function Tabs({activeTab, setActiveTab, tab1Cards, tab2Cards}) {

	return (
		<div className="overflow-hidden">
			<div className="container-fluid p-0 position-relative">
				<div className="container">
					<ul className="tab__list">
						<li className="tab__item">
							<button 
								className={`tab__link ${activeTab === 'tab1' ? 'active' : ''}`}
								onClick={() => setActiveTab('tab1')}
							>
								Tab 1
								<span className="badge">{tab1Cards}</span>
							</button>
						</li>
						<li className="tab__item">
							<button 
								className={`tab__link ${activeTab === 'tab2' ? 'active' : ''}`}
								onClick={() => setActiveTab('tab2')}
							>
								Tab 2
								<span className="badge">{tab2Cards}</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)	
}