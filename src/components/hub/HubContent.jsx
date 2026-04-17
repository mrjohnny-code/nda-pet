import { useState } from 'react';
import Tabs from './Tabs.jsx';
import TabContent from './TabContent.jsx';

import {myCards, libraryCards } from '@/data/cards';

export default function HubContent() {
	const [activeTab, setActiveTab] = useState('tab1');

	return (
		<>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} tab1Cards={myCards} tab2Cards={libraryCards} />
			<TabContent activeTab={activeTab} />
		</>
	);
}