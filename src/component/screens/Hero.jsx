import React from "react";
import HeroImage from "../../assets/images/hero.png"

function Hero() {
    const people = [
        {
            name: "Calvin Hawkins",
            email: "calvin.hawkins@example.com",
            image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            name: "Kristen Ramos",
            email: "kristen.ramos@example.com",
            image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            name: "Ted Fox",
            email: "ted.fox@example.com",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ];

    return (
        <section id="hero-section" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 h-calc(100vh - 20px)">
            <div className="left text-white">
				Hello left
			</div>
            {/* <div className="right w-3/6">
				<img src={HeroImage} alt="Hero Image" />
			</div> */}
			<div class="relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-9500 to-purple-9500"></div>
				<img src={HeroImage} alt="Your Image" class="absolute inset-0 object-cover w-full h-full" />
				<div class="relative z-10 h-96 w-96">

				</div>
			</div>

        </section>
    );
}

export default Hero;
