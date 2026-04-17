export default function FolderInner({ item, path = '', selected, toggleSelected }) {
	const currentPath = `${path}/${item.id}`;
	const isSelected = selected?.path === currentPath;

	return (
		<li className="nda__sublist_item">
			<div className={`nda__item_inner_item ${isSelected ? 'selected' : ''}`} onClick={() => toggleSelected(item, currentPath)}>
				<div className="icon_inner_item">
					<svg width="16" height="14" viewBox="0 0 16 14" fil="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H7V6H0V0Z" fill="#989898"></path><path d="M9 0H16V6H9V0Z" fill="#989898"></path><path d="M9 8H16V14H9V8Z" fill="#989898"></path><path d="M0 8H7V14H0V8Z" fill="#989898"></path></svg>
				</div> 
				<span className="inner_item_name">{item.name}</span>
			</div>
		</li>
	);
}