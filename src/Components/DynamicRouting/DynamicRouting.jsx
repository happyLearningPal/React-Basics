import React from "react";
import {
	BrowserRouter,
	Link,
	Outlet,
	Route,
	Routes,
	useParams,
} from "react-router-dom";
import Home from "../Home";
import About from "../About";

const Layout = () => {
	return (
		<div>
			<nav>
				<ul className="navBar">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</nav>
			<hr />

			<Outlet />
		</div>
	);
};

function Products() {
	const productList = [
		{ id: 101, name: "iPhone" },
		{ id: 102, name: "Laptop" },
	];

	return (
		<div>
			<h2>Products</h2>

			{productList.map((p) => (
				<div key={p.id}>
					<Link to={`${p.id}`}>{p.name}</Link>
				</div>
			))}

			<hr />
			<Outlet />
		</div>
	);
}

function ProductDetails() {
	const { id } = useParams();

	return (
		<div>
			<h3>Product Details for ID: {id}</h3>
			<Link to="reviews">Reviews</Link>
			<Link to="specs">Specs</Link>
			<Outlet />
		</div>
	);
}

function Reviews() {
	const { id } = useParams();
	return <p>Reviews for product {id}</p>;
}

function Specs() {
	const { id } = useParams();
	return <p>Specs for product {id}</p>;
}

export const DynamicRouting = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />

					<Route path="products" element={<Products />}>
						<Route path=":id" element={<ProductDetails />}>
							<Route path="reviews" element={<Reviews />} />
							<Route path="specs" element={<Specs />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
