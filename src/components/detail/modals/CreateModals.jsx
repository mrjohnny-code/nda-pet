import { createPortal } from 'react-dom';

import '@/styles/modals.scss';

export default function CreateModals({ onClose, type }) {

	return createPortal(
		<div className="modal__nda" onClick={onClose}>
			<div className="modal__nda_wrapper" onClick={e => e.stopPropagation()}>
				<div className="modal__nda_top">
					<div className="modal__title">Add {type === 'folder' ? 'folder' : 'item'}</div>
					<div className="modal__close" onClick={onClose}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.38477 0L18.0001 16.4434L16.6155 17.8137L0.000150306 1.37028L1.38477 0Z" fill="#EBEBEB"></path><path d="M0 16.6297L16.6154 0.186308L18 1.55659L1.38462 18L0 16.6297Z" fill="#EBEBEB"></path></svg></div>
				</div>
				<div className="modal__nda_body">
					<form action="/" className="modal__form">
						<div className="modal__form_item">
							<label className="modal__form_label" htmlFor="folder_name">{type === 'folder' ? 'Folder' : 'Item'} name</label>
							<input type="text" id="folder_name" minLength="1" maxLength="70" required />
						</div>
						<div className="modal__form_item">
							<button type="submit" className="submit_btn btn btn-outline-primary _white" disabled>Add</button>
						</div>
					</form>
				</div>
			</div>
		</div>,
		document.body
	);
}