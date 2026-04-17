import { useState } from 'react';
import Select from 'react-select';
import Card from '../cards/Card';
import CreateCardModal from '../modals/CreateCardModal';

import { customSelectStyles } from './customSelectStyles';
import { useCards } from '@/context/CardsContext';


export default function TabMy() {
	
	const { cards, togglePin, deleteCard, addCard } = useCards();

	const [category, setCategory] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const myCards = cards.filter(c => c.type === 'my');

	const categories = [...new Set(myCards.map(c => c.category))].map(c => ({ value: c, label: c }));
	categories.unshift({ value: 'all', label: 'all' });

	const filteredCards = myCards.filter(card => {
		const matchCategory = !category || category.value === 'all' || card.category === category.value;
		return matchCategory;
	})
	
	const sortedCards = filteredCards.slice().sort((a, b) => {
		if(a.pinned && b.pinned) return b.pinnedAt - a.pinnedAt;
		if(a.pinned) return - 1;
		if(b.pinned) return 1;
		return b.createdAt - a.createdAt;
	});
	
	return (
		<>
			<div className="row mb-4">
				<div className="col-12">
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
				</div>
			</div>

			<div className="row cards__list">
				<div className="col-12 col-md-6 col-xl-4 rounded-3">
					<div className="create__card">
						<a 
							href="#"
							onClick={(e) => { 
								e.preventDefault();
								setIsModalOpen(true);
							}}>Create new card</a>
					</div>
				</div>
				{isModalOpen && 
					<CreateCardModal
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
						onCreate={addCard}
					/>
				}

				{sortedCards.map(card => (
					<Card
						type={card.type}
						key={card.id}
						id={card.id}
						title={card.title}
						user={card.user}
						category={card.category}
						pinned={card.pinned}
						onPin={() => togglePin(card.id)}
						onDelete={() => deleteCard(card.id)}
					/>
				))}
			</div>
		</>
	);
}