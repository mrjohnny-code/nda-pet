import { folders } from "@/data/folders.js";

import DetailAside from "./aside/DetailAside";
import DetailMain from "./main/DetailMain";

import './DetailContent.scss'
import { useState } from "react";

export default function DetailContent() {
	// const [selected, setSelected] = useState(null);
	const [tree, setTree] = useState(folders);

	const findPathById = (items, targetId, parentPath = '') => {
		for (let item of items) {
			const currentPath = `${parentPath}/${item.id}`;

			if(item.id === targetId) {
				return currentPath;
			}

			if(item.children) {
				const found = findPathById(item.children, targetId, currentPath);
				if(found) return found;
			}
		}
		return null;
	};

	const initialPath = findPathById(folders, 2);

	const [selected, setSelected] = useState(
		initialPath
			? { type: 'folder', path: initialPath }
			: null
	);

	return (
		<div className="container content__container">
			<DetailAside selected={selected} setSelected={setSelected} tree={tree} setTree={setTree} />
			<DetailMain selected={selected} tree={tree} />
		</div>
	);
}