import './Folder.scss';

import FolderInner from "./FolderInner";

export default function Folder({ item, depth = 0, openIds, toggleFolder, path = '', selected, toggleSelected }) {
	const currentPath = `${path}/${item.id}`;
	const isRoot = depth === 0;
	const isOpen = openIds.includes(currentPath);
	const isSelected = selected?.path === currentPath;

	return (
		<li className={`${isRoot ? 'nda__list_item' : 'nda__sublist_item'} ${isOpen ? 'opened' : ''}`}>
			<div 
				className={`nda__item_head ${isSelected ? 'selected' : ''}`} 
				onClick={() => {
					toggleFolder(currentPath)
					toggleSelected(item, currentPath)
				}}
			>
				<div className="icon_marker">
					<svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.5L-2.79753e-07 0.5L5 4.5L0 8.5Z" fill="#989898"></path></svg>
				</div>
				<div className="icon_folder">
					<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2.52632V11.4386C16 11.5875 15.9376 11.7303 15.8264 11.8356C15.7153 11.9409 15.5646 12 15.4074 12H0.666667C0.489856 12 0.320287 11.9335 0.195262 11.815C0.070238 11.6966 0 11.5359 0 11.3684V0.631579C0 0.464074 0.070238 0.303429 0.195262 0.184985C0.320287 0.0665413 0.489856 0 0.666667 0H5.11111C5.25536 0 5.39571 0.0443227 5.51111 0.126316L7.82222 1.76842C7.93762 1.85041 8.07798 1.89474 8.22222 1.89474H15.3333C15.5101 1.89474 15.6797 1.96128 15.8047 2.07972C15.9298 2.19817 16 2.35881 16 2.52632Z" fill="#989898"></path></svg>
				</div>
				<span className="folder_name">{item.name}</span>
			</div>
			{item.children && (
				<ul className={`nda__folders_sublist ${isOpen ? 'open' : ''}`}>

					{item.children.map(child  => 
						child.type === 'folder' ? (
							<Folder 
								key={`${currentPath}/${child.id}`} 
								item={child} 
								depth={depth + 1} 
								openIds={openIds}
								toggleFolder={toggleFolder}
								path={currentPath}
								selected={selected}
								toggleSelected={toggleSelected} 
							/>
						) : (
							<FolderInner 
								key={`${currentPath}/${child.id}`} 
								item={child} 
								depth={depth + 1} 
								openIds={openIds}
								toggleFolder={toggleFolder}
								path={currentPath}
								selected={selected}
								toggleSelected={toggleSelected} 
							/>
						)
					)}
				</ul>
			)}
		</li>
	);
}