import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OwlCarouselContainer.css';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const OwlCarouselContainer = ({ review }) => {
	const { name, designation, description, imageUrl } = review;
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
	return (
		<animated.div
			onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
			onMouseLeave={() => set({ xys: [0, 0, 1] })}
			style={{ transform: props.xys.interpolate(trans) }}
		>
			<div class="card text-center"><img class="card-img-top" src={imageUrl} alt="" />
				<div class="card-body">
					<h5>{name} <br />
						<span> {designation} </span></h5>
					<p class="card-text">{description} </p>
				</div>
			</div>
		</animated.div>
	);
};

export default OwlCarouselContainer;
