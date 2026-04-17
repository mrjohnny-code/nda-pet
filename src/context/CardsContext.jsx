import { createContext, useContext, useState } from "react";
import { cards as initialCards } from "@/data/cards";

const CardsContext = createContext();

export function CardsProvider({ children }) {

	const [cards, setCards] = useState(initialCards);

	const addCard = (newCard) => {
		setCards(prev => {
			const pinned = prev.filter(c => c.pinned).sort((a, b) => b.pinnedAt - a.pinnedAt);
			const unpinned = prev.filter(c => !c.pinned);
			return [...pinned, { ...newCard, createdAt: Date.now() }, ...unpinned];
		});
	};

	const deleteCard = (id) => {
		setCards(prev => prev.filter(c => c.id !== id));
	}

	const togglePin = (id) => {
		setCards(prev =>
			prev.map(c => {
				if (c.id === id) {
					const isPinned = !c.pinned;
					return {
						...c,
						pinned: isPinned,
						pinnedAt: isPinned ? Date.now() : null
					};
				}
				return c;
			})
		);
	};

	return (
		<CardsContext.Provider value={{ cards, addCard, deleteCard, togglePin }}>
			{children}
		</CardsContext.Provider>
	);
}

export const useCards = () => useContext(CardsContext);