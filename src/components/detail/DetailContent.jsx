import { folders } from "@/data/folders.js";

import DetailAside from "./aside/DetailAside";
import DetailMain from "./main/DetailMain";

import './DetailContent.scss'
import { useEffect, useState } from "react";

export default function DetailContent() {
	const [selected, setSelected] = useState(null);
	const [tree, setTree] = useState(folders);

	useEffect(() => {
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

		const path = findPathById(tree, 2);

		if(path) {
			setSelected({
				type: 'folder',
				path
			});
		}
	}, []);

	return (
		<div className="container content__container">
			<DetailAside selected={selected} setSelected={setSelected} tree={tree} setTree={setTree} />
			<DetailMain selected={selected} tree={tree} />
		</div>
	);
}