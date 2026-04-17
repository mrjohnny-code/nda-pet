import { Link } from 'react-router-dom';
import './DetailHead.scss';

export default function DetailHead({ card }) {

	return (
		<>
			<div className="container nda__container">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to={'/'} className="breadcrumb-item">Prev Page</Link>
						</li>
						<li className="breadcrumb-item">Current Page</li>
					</ol>
				</nav>

				<div className="nda__head">
					<div className="nda__head_info">
						<h1 className="nda__head_title">{card.title}</h1>
						{card.description && (
							<p className="nda__head_description">{card.description}</p>
						)}
					</div>
					<div className="nda__head_bottom">
						<a className="nda__head_user" href="#">
							<img className="nda__head_avatar" src="https://placehold.co/40x40" alt="avatar" />
							<span className="nda__head_name">{card.user}</span>
						</a>
						<div className={`nda__head_category ${card.category}`}>{card.category}</div>
					</div>
				</div>
			</div>

		</>
	);
}