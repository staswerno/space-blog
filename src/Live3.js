import "./Live3.css";

export default function Live3() {
	return (
		<div className="video-container">
			<iframe
				class="responsive-iframe"
				src="https://www.youtube.com/embed/DDU-rZs-Ic4"
				title="ISS Live Feed"
				frameborder="0"
				//allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	);
}
