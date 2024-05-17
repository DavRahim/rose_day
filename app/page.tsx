import React from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Search from "./components/Search";

type Props = {};

const Home = (props: Props) => {
	return (
		<>
			<Heading title="Home | Rose Day" description="It's is a flower website" keyword="Flower rose day" />
			<div className="h-screen">
				<Header />
				<Hero />
				<FeaturedProducts/>
				<Search/>
			</div>

		</>
	);
};

export default Home;
