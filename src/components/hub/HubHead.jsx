export default function HubHead() {

	const features = [
		{ icon: "https://placehold.co/32x32", text: "Lorem ipsum dolor sit 1." },
		{ icon: "https://placehold.co/32x32", text: "Lorem ipsum dolor sit 2." },
	];

	return (
		<div className="container">
			<div className="row align-items-center my-5">
				<div className="col-12 col-lg-6">
					<div className="d-flex flex-column gap-3">
						<h1 className="mb-0">Lorem ipsum dolor</h1>
						<p className="mb-0">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							<br/>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, tenetur at?
						</p>
						<div className="d-flex flex-row flex-wrap gap-3">
							{features.map((f, i) => (
								<div key={i} className="d-flex flex-row gap-2 align-items-center">
									<img src={f.icon} alt={`icon feature ${i + 1}`} />
									{f.text}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="col-6 d-none d-lg-flex justify-content-center">
					<img src="https://placehold.co/400x200" alt="image"/>
				</div>
			</div>
		</div>
	);
}