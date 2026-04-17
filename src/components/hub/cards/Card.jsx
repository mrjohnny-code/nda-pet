import { Link } from "react-router-dom";
import './Card.scss';

export default function Card({ id, title, user, category, pinned, type, onPin, onDelete }) {
	return (
		<div className="col-12 col-md-6 col-xl-4 rounded-3">
			<div className={`nda__card ${type === 'my' ? 'self' : ''} ${pinned ? 'pined' : ''}`}>
				<Link to={`/detail/${id}`} className="nda__card_head">{title}</Link>
				<div className="nda__card_body">
					<div className="nda__body_user">
						<img src="https://placehold.co/40x40" alt="avatar"/>
						<span className="nda__body_name">{user}</span>
					</div>
					<div className="nda__body_info">
						<div className={`category ${category}`}>{category}</div>
					</div>
				</div>
				<div className="nda__card_bottom">
					<div className="nda__bottom_delete" onClick={onDelete}>
						<svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 2H14V3H1V2H4V1H11V2Z" fill="#4F5457"></path><path fillRule="evenodd" clipRule="evenodd" d="M2 17V5H13V17H12V18H3V17H2ZM5 7H6V15H5V7ZM10 7H9V15H10V7Z" fill="#4F5457"></path></svg>
					</div>
					<div className="nda__bottom_pin" onClick={onPin}>
						<svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9751 12.8922C14.7607 11.8062 14.1416 10.8506 13.2512 10.2312L13.2502 10.2259L12.462 2.09345C12.4338 1.79349 12.2982 1.51518 12.0817 1.31296C11.8652 1.11074 11.5833 0.999144 11.2913 1H4.70865C4.41665 0.999144 4.13484 1.11074 3.91834 1.31296C3.70183 1.51518 3.56621 1.79349 3.53798 2.09345L2.74984 10.226L2.7488 10.2312C1.85837 10.8506 1.23929 11.8062 1.02487 12.8922C0.989102 13.069 0.991948 13.2519 1.0332 13.4274C1.07445 13.603 1.15307 13.7669 1.26335 13.9071C1.37362 14.0474 1.51279 14.1606 1.67074 14.2384C1.82868 14.3163 2.00145 14.3568 2.17647 14.3571H7V17.3929C7 17.5539 7.06198 17.7083 7.1723 17.8222C7.28262 17.936 7.84398 18 8 18C8.15602 18 8.71738 17.936 8.8277 17.8222C8.93802 17.7083 9 17.5539 9 17.3929V14.3571H13.8235C13.9986 14.3568 14.1713 14.3163 14.3293 14.2384C14.4872 14.1606 14.6264 14.0474 14.7367 13.9071C14.8469 13.7669 14.9256 13.603 14.9668 13.4274C15.0081 13.2519 15.0109 13.069 14.9751 12.8922Z" fill="#4F5457"></path></svg>
					</div>
				</div>
			</div>
		</div>
	);
}