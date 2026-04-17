export const cards = [
	{ id: 1, title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #1', user: 'Username', category: 'pink', pinned: false, type: 'my' },
	{ id: 2, title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #2', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #2', user: 'Username #2', category: 'green', pinned: true, type: 'library' },
	{ id: 3, title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #3', user: 'Username #3', category: 'pink', pinned: false, type: 'library' },
	{ id: 4, title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #4', user: 'Username', category: 'green', pinned: false, type: 'my' },
	{ id: 5, title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #5', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #5', user: 'Username #4', category: 'green', pinned: false, type: 'library' },
	{ id: 6, title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #6', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #6', user: 'Username', category: 'pink', pinned: false, type: 'my' },
	{ id: 7, title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #7', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #7', user: 'Username #5', category: 'green', pinned: true, type: 'library' },
	{ id: 8, title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #8', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #8', user: 'Username #6', category: 'pink', pinned: false, type: 'library' },
	{ id: 9, title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #9', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #9', user: 'Username', category: 'green', pinned: true, type: 'my' },
	{ id: 10, title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #0', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. #0', user: 'Username #4', category: 'green', pinned: false, type: 'library' },
]

export const getUsers = () => [... new Set(cards.map(c => c.user))]
export const getCategory = () => [... new Set(cards.map(c => c.category))]

export const myCards = cards.filter(c => c.type === 'my').length
export const libraryCards = cards.filter(c => c.type === 'library').length