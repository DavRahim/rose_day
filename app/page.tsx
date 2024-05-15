import React from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Hero";

type Props = {};

const Home = (props: Props) => {
	return (
		<>
		<Heading title="Home | Rose Day" description="It's is a flower website" keyword="Flower rose day"/>
		<Header/>
		<Hero/>
		</>
	);
};

export default Home;
