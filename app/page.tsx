import React from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Search from "./components/Search";
import Colorful from "./components/Colorful";
import PlantStands from "./components/PlantStands";
import Shipping from "./components/Shipping";
import Location from "./components/Location";

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
				<Colorful/>
				<PlantStands/>
				<Shipping/>
				<Location/>
			</div>

		</>
	);
};

export default Home;
