import TabMy from "./tabs/TabMy";
import TabLibrary from "./tabs/TabLibrary";

import './TabContent.scss';

export default function TabContent({activeTab}) {

	return (
		<div className="container">
			<div className="tab__content">
				<div className={`tab__item ${activeTab === 'tab1' ? 'active' : ''}`}>
					<TabMy />
				</div>

				<div className={`tab__item ${activeTab === 'tab2' ? 'active' : ''}`}>
					<TabLibrary />
				</div>
			</div>
		</div>
	)
}