import { useState } from "react";
import Select from 'react-select';
import Card from '../cards/Card';

import { cards as initialCards } from '@/data/cards';
import { customSelectStyles } from './customSelectStyles';

export default function TabLibrary() {
	const [category, setCategory] = useState(null);
	const [author, setAuthor] = useState(null);
	const [cards, setCards] = useState(initialCards);

	const libraryCards = cards.filter(c => c.type === 'library');

	const categories = [...new Set(libraryCards.map(c => c.category))].map(c => ({ value: c, label: c }));
	const authors = [...new Set(libraryCards.map(a => a.user))].map(a => ({ value: a, label: a }));

	categories.unshift({ value: 'all', label: 'all' });
	authors.unshift({ value: 'all', label: 'all' });

	const filteredCards = libraryCards.filter(card => {
		const matchCategory = !category || category.value === 'all' || card.category === category.value;
		const matchAuthor = !author || author.value === 'all' || card.user === author.value;

		return matchCategory && matchAuthor;
	})

	const sortedCards = filteredCards.slice().sort((a, b) => {
			if(a.pinned && b.pinned) return b.pinnedAt - a.pinnedAt;
			if(a.pinned) return - 1;
			if(b.pinned) return 1;
			return initialCards.indexOf(a) - initialCards.indexOf(b);
	});

	const handlePinned = (id) => {
		setCards(prev => 
			prev.map(card => {
				if(card.id === id) {
					const isPinned = !card.pinned;
					return {
						...card,
						pinned: isPinned,
						pinnedAt: isPinned ? Date.now() : null
					};
				}
				return card;
			})
		);
	};

	return (
		<>
			<div className="row mb-4">
				<div className="col-12 d-flex gap-3">
					<Select
						value={category}
						onChange={setCategory}
						options={categories} 
						placeholder="Category"
						className="custom__select"
						classNamePrefix="nda"
						isSearchable={false}
						styles={customSelectStyles}
					/>
					<Select 
						value={author}
						onChange={setAuthor}
						options={authors}
						placeholder="Author"
						className="custom__select"
						classNamePrefix="nda"
						isSearchable={false}
						styles={customSelectStyles}
					/>
				</div>
			</div>

			<div className="row cards__list">
				{sortedCards.map(card => (
					<Card
						type="library"
						key={card.id}
						id={card.id}
						title={card.title}
						user={card.user}
						category={card.category}
						pinned={card.pinned}
						onPin={() => handlePinned(card.id)}
					/>
				))}
			</div>
		</>
	);
}