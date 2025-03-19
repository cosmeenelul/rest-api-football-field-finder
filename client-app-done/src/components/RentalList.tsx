// import React, { useEffect, useState } from "react";
// import Stack from "@mui/joy/Stack";
// import RentalCard from "./RentalCard";
//
// const RentalList = () => {
//     const [rentals, setRentals] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("URL_TA_DE_API");
//                 const data = await response.json();
//                 setRentals(data); // presupun că API-ul returnează un array de terenuri
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     return (
//         <Stack spacing={2} sx={{ overflow: "auto" }}>
//             {rentals.map((rental, index) => (
//                 <RentalCard
//                     key={index}
//                     title={rental.title}
//                     image={rental.image}
//                     liked={rental.liked}
//                 />
//             ))}
//         </Stack>
//     );
// };
//
// export default RentalList;
