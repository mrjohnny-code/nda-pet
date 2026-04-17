import './DetailMain.scss';

export default function DetailMain({ selected, tree }) {
	
	const findByPath = (items, path) => {
		const parts = path.split('/').filter(Boolean);

		let current = items;

		for(let i = 0; i < parts.length; i++) {
			const found = current.find(el => String(el.id) === parts[i]);
			if(!found) return null;

			if(i === parts.length - 1) return found;

			current = found.children || [];
		}
		return null;
	};

	const getAllItems = (items) => {
		let result = [];

		items.forEach(item => {
			if(item.type === 'inner_item') {
				result.push(item);
			}

			if(item.children) {
				result = result.concat(getAllItems(item.children));
			}
		});
		return result;
	};

	const selectedItem = selected?.path ? findByPath(tree, selected.path) : null;

	const isFolder = selectedItem?.type === 'folder';
	const items = isFolder
		? getAllItems(selectedItem.children || [])
		: selectedItem
			? [selectedItem]
			: [];

	return (
		<div className={`nda__main ${isFolder ? 'hub_list' : ''}`} key={selected?.path || 'empty'}>
			{items.map(item => (
				<div key={item.id} className="nda__content_item">{item.name}</div>
			))}
		</div>
	);
}