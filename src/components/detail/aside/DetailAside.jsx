import { useState } from 'react';
import { folders } from "@/data/folders.js";

import Folder from './elements/Folder';
import CreateModals from '../modals/CreateModals';

import './DetailAside.scss';

export default function DetailAside({ selected, setSelected, tree, setTree }) {
	const [openIds, setOpenIds] = useState([]);
	const [createModals, setCreateModals] = useState(null);
	const [mobilePopup, setMobilePopup] = useState(false);

	const toggleFolder = (path) => {
		setOpenIds(prev => 
			prev.includes(path)
			? prev.filter(item => item !== path)
			: [...prev, path]
		);
	};

	const toggleSelected = (item, path) => {
		setSelected({
			type: item.type,
			path
		});
	};

	const getAllPaths = (items, parentPath = '') => {
		let result = [];

		items.forEach(item => {
			if(item.type === 'folder') {
				const currentPath = `${parentPath}/${item.id}`;
				result.push(currentPath);

				if(item.children) {
					result = result.concat(getAllPaths(item.children, currentPath));
				}
			}
		});

		return result;
	}

	const allPaths = getAllPaths(folders);

	const toggleCollapseAll = () => {
		if(openIds.length === allPaths.length) {
			setOpenIds([]);
		} else {
			setOpenIds(allPaths);
		}
	}

	const moveItem = (items, path, direction) => {
		const parts = path.split('/').filter(Boolean);

		const recursive = (currentItems, depth = 0) => {
			if(depth === parts.length - 1) {
				const index = currentItems.findIndex(
					i => String(i.id) === parts[depth]
				);

				if(index === -1) return currentItems;

				const newItems = [...currentItems];

				if(direction === 'up' && index > 0) {
					[newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
				}

				if(direction === 'down' && index < newItems.length - 1) {
					[newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
				}

				return newItems;
			}

			return currentItems.map(item => {
				if(item.children) {
					return {
						...item,
						children: recursive(item.children, depth + 1)
					};
				}
				return item;
			});

		};
		return recursive(items);
	};

	const handleMoveUp = () => {
		if(!selected) return;
		setTree(prev => moveItem(prev, selected.path, 'up'));
	};

	const handleMoveDown = () => {
		if(!selected) return;
		setTree(prev => moveItem(prev, selected.path, 'down'));
	};

	return (
		<div className="nda__aside">
			<div className="nda__folders_mobile" onClick={() => setMobilePopup(true)}>
				<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1777 11.1484L8.25001 14.6062L2.32233 11.1484C2.20421 11.0795 2.06355 11.0603 1.9313 11.0951C1.79905 11.1299 1.68604 11.2158 1.61713 11.3339C1.54821 11.4521 1.52905 11.5927 1.56385 11.725C1.59865 11.8572 1.68456 11.9702 1.80268 12.0391L7.99018 15.6485C8.06904 15.6945 8.15871 15.7188 8.25001 15.7188C8.34131 15.7188 8.43097 15.6945 8.50983 15.6485L14.6973 12.0391C14.7558 12.005 14.807 11.9597 14.848 11.9058C14.889 11.8519 14.9189 11.7904 14.9362 11.725C14.9534 11.6595 14.9576 11.5912 14.9484 11.5241C14.9393 11.4571 14.917 11.3924 14.8829 11.3339C14.8488 11.2754 14.8035 11.2242 14.7496 11.1833C14.6956 11.1423 14.6342 11.1123 14.5687 11.0951C14.5032 11.0779 14.435 11.0737 14.3679 11.0828C14.3008 11.092 14.2362 11.1143 14.1777 11.1484Z" fill="#EBEBEB"></path><path d="M14.1777 8.05463L8.25001 11.5124L2.32233 8.05463C2.20421 7.98572 2.06355 7.96655 1.9313 8.00135C1.79905 8.03615 1.68604 8.12206 1.61713 8.24018C1.54821 8.3583 1.52905 8.49896 1.56385 8.63121C1.59865 8.76347 1.68456 8.87648 1.80268 8.94539L7.99018 12.5548C8.06904 12.6008 8.15871 12.625 8.25001 12.625C8.34131 12.625 8.43097 12.6008 8.50983 12.5548L14.6973 8.94539C14.8155 8.87648 14.9014 8.76347 14.9362 8.63121C14.971 8.49896 14.9518 8.3583 14.8829 8.24018C14.814 8.12206 14.701 8.03615 14.5687 8.00135C14.4365 7.96655 14.2958 7.98572 14.1777 8.05463Z" fill="#EBEBEB"></path><path d="M1.80267 5.85163L7.99017 9.46101C8.06904 9.50701 8.1587 9.53125 8.25 9.53125C8.3413 9.53125 8.43096 9.50701 8.50983 9.46101L14.6973 5.85163C14.7752 5.80622 14.8397 5.7412 14.8846 5.66306C14.9295 5.58491 14.9531 5.49637 14.9531 5.40625C14.9531 5.31613 14.9295 5.22759 14.8846 5.14944C14.8397 5.0713 14.7752 5.00628 14.6973 4.96087L8.50983 1.35149C8.43096 1.30549 8.3413 1.28125 8.25 1.28125C8.1587 1.28125 8.06904 1.30549 7.99017 1.35149L1.80267 4.96087C1.72483 5.00628 1.66026 5.0713 1.61537 5.14944C1.57049 5.22759 1.54688 5.31613 1.54688 5.40625C1.54688 5.49637 1.57049 5.58491 1.61537 5.66306C1.66026 5.7412 1.72483 5.80622 1.80267 5.85163Z" fill="#EBEBEB"></path></svg>
				<span>Tree</span> 
			</div>
			<div className={`nda__folders ${mobilePopup ? 'opened' : ''}`}>
				<div className="nda__folders_head_mobile">
					<div className="folders__close" onClick={() => setMobilePopup(false)}>
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.38477 0L18.0001 16.4434L16.6155 17.8137L0.000150306 1.37028L1.38477 0Z" fill="#EBEBEB"></path><path d="M0 16.6297L16.6154 0.186308L18 1.55659L1.38462 18L0 16.6297Z" fill="#EBEBEB"></path></svg>
					</div>
				</div>
				<div className="nda__folders_head">
					<div className="nda__head_collapse" onClick={toggleCollapseAll}>Collapse all</div>
					<div className="nda__head_add_folder" onClick={() => setCreateModals('folder')}>
						<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2.52632V11.4386C16 11.5875 15.9376 11.7303 15.8264 11.8356C15.7153 11.9409 15.5646 12 15.4074 12H0.666667C0.489856 12 0.320287 11.9335 0.195262 11.815C0.070238 11.6966 0 11.5359 0 11.3684V0.631579C0 0.464074 0.070238 0.303429 0.195262 0.184985C0.320287 0.0665413 0.489856 0 0.666667 0H5.11111C5.25536 0 5.39571 0.0443227 5.51111 0.126316L7.82222 1.76842C7.93762 1.85041 8.07798 1.89474 8.22222 1.89474H15.3333C15.5101 1.89474 15.6797 1.96128 15.8047 2.07972C15.9298 2.19817 16 2.35881 16 2.52632Z" fill="#989898"></path></svg>
					</div>
					<div className="nda__head_add_inner_item" onClick={() => setCreateModals('item')}>
						<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H7V6H0V0Z" fill="#989898"></path><path d="M9 0H16V6H9V0Z" fill="#989898"></path><path d="M9 8H16V14H9V8Z" fill="#989898"></path><path d="M0 8H7V14H0V8Z" fill="#989898"></path></svg>
					</div>
					<div className="nda__head_move_up" onClick={handleMoveUp}>
						<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9586 7.16329C13.9179 7.26295 13.8489 7.34813 13.7603 7.40807C13.6718 7.468 13.5677 7.49999 13.4612 7.5H10.9996V11.9545C10.9996 12.0992 10.9429 12.2379 10.8419 12.3402C10.7409 12.4425 10.604 12.5 10.4612 12.5H3.5381C3.39529 12.5 3.25833 12.4425 3.15735 12.3402C3.05637 12.2379 2.99964 12.0992 2.99963 11.9545L2.99609 7.5H0.534546C0.42805 7.49999 0.323948 7.46799 0.235403 7.40805C0.146857 7.34811 0.0778438 7.26293 0.0370882 7.16326C-0.00366739 7.06359 -0.0143351 6.95392 0.00643372 6.84812C0.0272026 6.74231 0.0784753 6.64511 0.15377 6.56882L6.61887 0.659701C6.71988 0.557443 6.85684 0.5 6.99964 0.5C7.14245 0.5 7.27941 0.557443 7.38042 0.659701L13.842 6.56882C13.9173 6.64512 13.9685 6.74232 13.9893 6.84813C14.0101 6.95394 13.9994 7.06361 13.9586 7.16329Z" fill="#989898"></path><rect x="2.99609" y="13.5" width="8" height="1" rx="0.5" fill="#989898"></rect></svg>
					</div>
					<div className="nda__head_move_down" onClick={handleMoveDown}>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9626 8.33671C14.9218 8.23705 14.8528 8.15187 14.7642 8.09193C14.6757 8.032 14.5716 8.00001 14.4651 8H12.0035V3.54546C12.0035 3.40079 11.9468 3.26206 11.8458 3.15977C11.7448 3.05748 11.6079 3.00001 11.4651 3H4.542C4.39919 3.00001 4.26224 3.05748 4.16126 3.15977C4.06028 3.26206 4.00355 3.40079 4.00354 3.54546L4 8H1.53845C1.43196 8.00001 1.32785 8.03201 1.23931 8.09195C1.15076 8.15189 1.08175 8.23707 1.04099 8.33674C1.00024 8.43641 0.989571 8.54608 1.01034 8.65188C1.03111 8.75769 1.08238 8.85489 1.15768 8.93118L7.62277 14.8403C7.72378 14.9426 7.86074 15 8.00355 15C8.14635 15 8.28331 14.9426 8.38432 14.8403L14.8459 8.93118C14.9212 8.85488 14.9724 8.75768 14.9932 8.65187C15.014 8.54606 15.0033 8.43639 14.9626 8.33671Z" fill="#989898"></path><rect width="8" height="1" rx="0.5" transform="matrix(1 0 0 -1 4 2)" fill="#989898"></rect></svg>
					</div>
				</div>
				{createModals && <CreateModals onClose={() => setCreateModals(null)} type={createModals} />}
				<ul className="nda__folders_list">
					{tree.map(item => (
						<Folder 
							item={item} 
							key={item.id} 
							openIds={openIds} 
							toggleFolder={toggleFolder} 
							selected={selected}
							toggleSelected={toggleSelected} 
						/>
					))}
				</ul>
			</div>
		</div>
	);
}