import React from 'react';
import Header from '../Header/Header';
import BrandInfo from './../BrandInfo/BrandInfo';
import Services from './../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from './../Blogs/Blogs';
import CaseStudies from './../CaseStudies/CaseStudies';
import Footer from './../../Shared/Footer/Footer';
import Contact from './../Contact/Contact';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<BrandInfo></BrandInfo>
			<Services></Services>
			<Testimonials></Testimonials>
			<Blogs></Blogs>
			<CaseStudies></CaseStudies>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
};

export default Home;
