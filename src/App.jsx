// General practice
// const App = () => {
//   let user = "Mohit";
//   const changeUser = () => {
//     user = "Kunal";
//     return user;
//   };
//   return (
//     <div>
//       <h1>App</h1>
//       <h2>Current user is {user}</h2>
//       <button onClick={changeUser}>Change User</button>
//     </div>
//   );
// };

// Hooks - Special types of functions

// ✅ Topic useState
// import { useState } from "react";
// function App() {
//   const [a, setA] = useState(1);

//   const increment = () => {
//     setA(a + 1);
//   };
//   const decrement = () => {
//     setA(a - 1);
//   };

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={() => setA(a + 1)}>Increment</button>
//       <button onClick={() => setA(a - 1)}>Decrement</button>
//     </div>
//   );
// }

// ✅ Topic - 2 way binding in react
// import { useState } from "react";
// function App() {
//   const [user, setUser] = useState("");
//   const submitHandler = (e) => {
//     console.log(user);
//     e.preventDefault();
//     setUser("");
//   };
//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <input
//           value={user}
//           onChange={(e) => {
//             setUser(e.target.value);
//           }}
//           type="text"
//           placeholder="Enter your name"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// ✅ Topic Fragment <> </>
// const App = () => {
//   let user = "Mohit";
//   const changeUser = () => {
//     user = "Kunal";
//     return user;
//   };
//   return (
//     <>
//       <h1>App</h1>
//       <h2>Current user is {user}</h2>
//       <button onClick={changeUser}>Change User</button>
//     </>
//   );
// };

// ✅⚠️ Topic Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Card from "./components/Card";
// const userData = [
//   {
//     name: "Kunal Sharma",
//     age: 25,
//     profilePhoto: "https://randomuser.me/api/portraits/men/75.jpg",
//     location: "Mumbai, India",
//   },
//   {
//     name: "Aisha Patel",
//     age: 28,
//     profilePhoto: "https://randomuser.me/api/portraits/women/68.jpg",
//     location: "Delhi, India",
//   },
//   {
//     name: "Rohan Verma",
//     age: 30,
//     profilePhoto: "https://randomuser.me/api/portraits/men/50.jpg",
//     location: "Bangalore, India",
//   },
//   {
//     name: "Priya Das",
//     age: 27,
//     profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg",
//     location: "Hyderabad, India",
//   },
//   {
//     name: "Aryan Gupta",
//     age: 26,
//     profilePhoto: "https://randomuser.me/api/portraits/men/60.jpg",
//     location: "Pune, India",
//   },
//   {
//     name: "Neha Singh",
//     age: 29,
//     profilePhoto: "https://randomuser.me/api/portraits/women/30.jpg",
//     location: "Kolkata, India",
//   },
//   {
//     name: "Vikram Choudhary",
//     age: 32,
//     profilePhoto: "https://randomuser.me/api/portraits/men/40.jpg",
//     location: "Chennai, India",
//   },
//   {
//     name: "Meera Nair",
//     age: 24,
//     profilePhoto: "https://randomuser.me/api/portraits/women/20.jpg",
//     location: "Jaipur, India",
//   },
//   {
//     name: "Sanjay Rao",
//     age: 31,
//     profilePhoto: "https://randomuser.me/api/portraits/men/35.jpg",
//     location: "Ahmedabad, India",
//   },
//   {
//     name: "Kavita Kapoor",
//     age: 23,
//     profilePhoto: "https://randomuser.me/api/portraits/women/15.jpg",
//     location: "Lucknow, India",
//   },
// ];
// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="app-container">
//         {userData.map((user, index) => (
//           <Card key={index} user={user} />
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };
// export default App;

// ✅ Topic Props drilling
// import Ex1 from "./components/Ex1";
// const App = () => {
//   return (
//     <>
//       <Ex1 exNum={1} name={"Kunal"} />
//     </>
//   );
// };
// export default App;

// ✅⚠️ Topic Integrating API(using axios)
// import ApiCard from "./components/apiCard";
// import axios from "axios";
// import { useState } from "react";
// const App = () => {
//   const [data, setData] = useState([]);
//   const getApi = async () => {
//     const res = await axios.get(
//       "https://picsum.photos/v2/list?page=2&limit=30"
//     );
//     setData(res.data);
//   };
//   return (
//     <>
//       <button onClick={() => getApi()} className="apiButton">
//         Get data
//       </button>
//       <div className="api-container">
//         {data.map((user, index) => (
//           <ApiCard key={index} user={user} />
//         ))}
//       </div>
//     </>
//   );
// };
// export default App;

// ✅⚠️ Topic React Router Dom (Routing in react)
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import About from "./pages/About";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// };
// export default App;

//✅⚠️ Topic Context API
// import { useContext } from "react";
// import { DataContext } from "./context/UserContext";
// import { ProductContext } from "./context/ProductContext";

// const App = () => {
//   const data = useContext(DataContext);
//   const productData = useContext(ProductContext);

//   return (
//     <div className="useContext">
//       <h1>This is App.jsx data : {data.username}</h1>
//       <h2>Product name : {productData.productName}</h2>
//       <h2>Product price : {productData.price}</h2>
//     </div>
//   );
// };

// export default App;

//✅ 