import { createPortal } from 'react-dom';
import '@/styles/modals.scss';
import { useState } from 'react';

export default function CreateCardModal({ isOpen, onClose, onCreate }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('green');
	const [user, setUser] = useState('Username');

	const handleSubmit = (e) => {
		e.preventDefault();
		onCreate({
			id: Date.now(),
			title,
			description,
			category,
			user,
			pinned: false,
			type: 'my',
			createdAt: Date.now()
		});
		onClose();
		setTitle('')
		setDescription('');
	}

	if(!isOpen) return null;


	return createPortal(
		<div className="modal__nda nda__create" onClick={onClose}>
			<div className="modal__nda_wrapper" onClick={e => e.stopPropagation()}>
				<div className="modal__nda_top">
					<div className="modal__title">Create new card</div>
					<div className="modal__close" onClick={onClose}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.38477 0L18.0001 16.4434L16.6155 17.8137L0.000150306 1.37028L1.38477 0Z" fill="#EBEBEB"></path><path d="M0 16.6297L16.6154 0.186308L18 1.55659L1.38462 18L0 16.6297Z" fill="#EBEBEB"></path></svg></div>
				</div>
				<div className="modal__nda_body">
					<div className="modal_nda_head">
						<div className="modal__head_heading">Format</div>
						<div className="modal__head_checkboxes">
							<div className="modal__checkbox">
								<input 
									type="radio"
									id="green"
									className="d-none"
									name="format"
									checked={category === 'green'}
									onChange={() => setCategory('green')}
								/>
								<label htmlFor="green" className="modal__label">
									<span className="text green">Green</span>
								</label>
							</div>
							<div className="modal__checkbox">
								<input 
									type="radio"
									id="pink"
									className="d-none"
									name="format"
									checked={category === 'pink'}
									onChange={() => setCategory('pink')}
								/>
								<label htmlFor="pink" className="modal__label">
									<span className="text pink">Pink</span>
								</label>
							</div>
						</div>
					</div>
					<form onSubmit={handleSubmit} className="modal__form">
						<div className="modal__form_item">
							<label className="modal__form_label" htmlFor="nda_name">Card name</label>
							<input 
								type="text" 
								id="nda_name" 
								minLength="1" 
								maxLength="70" 
								value={title}
								onChange={e => setTitle(e.target.value)}
								required
							/>
						</div>
						<div className="modal__form_item">
							<label className="modal__form_label" htmlFor="nda_description">Description (optional)</label>
							<textarea 
								name="description" 
								id="nda_description"
								value={description}
								onChange={e => setDescription(e.target.value)}
							></textarea>
						</div>
						<div className="modal__form_item">
							<button type="submit" className="submit_btn btn btn-outline-primary _white">Create</button>
						</div>
					</form>
				</div>
			</div>
		</div>,
		document.body
	);
}