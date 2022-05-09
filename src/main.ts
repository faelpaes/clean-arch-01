import { Apartment } from "./core/entities/property/Apartment";
import { Condominium } from "./core/entities/property/Condominium";
import { House } from "./core/entities/property/House";
import { Property } from "./core/entities/property/Property";
import { ApartmentProps } from "./core/entities/property/types/Apartment";
import { HouseProps } from "./core/entities/property/types/House";

console.log("main");

// const houseProps: HouseProps = {
//   builtArea: 10,
//   yard: {
//     floorType: "ground",
//     pool: false,
//   },
//   dwellingProps: {
//     bathrooms: [
//       {
//         box: false,
//         closet: false,
//         size: 5,
//       },
//     ],
//     floorAmount: 1,
//     garage: {
//       covered: true,
//       vacancyNumber: 1,
//       floorType: "cement",
//     },
//     petAllowed: true,
//     rooms: [
//       {
//         suite: true,
//         closet: true,
//         size: 5,
//       },
//       {
//         suite: false,
//         closet: false,
//         size: 3.5,
//       },
//       {
//         suite: false,
//         closet: false,
//         size: 3,
//       },
//     ],
//     propertyProps: {
//       address: {
//         city: "Santa Rita do Sapucaí",
//         neighborhood: "Centro",
//         number: 345,
//         publicPlace: "Rua João Euzebio de Almeida",
//         state: "Minas Gerais",
//         zipCode: "37540-000",
//         zone: {
//             name: "sul",
//             valueM2: 2000
//           }
//       },
//       area: 360,
//       iptu: 1500,
//       value: 1200
//     },
//   },
// };

// let house: Property = House.create(houseProps);
// let house2: Property = House.create(houseProps);

// let apartment: Property = Apartment.create(apartmentFactory());

// console.log("House 1  >>>", house);
// console.log("House 3 >>>", house2);
// console.log("Apartment 1  >>>", apartment);

// function condominiumFactory(elevator: boolean, gym: boolean, playground: boolean, pool: boolean, value: number): Condominium {
//     return Condominium.create({ elevator, gym, playground, pool, value });
//   }

// function apartmentFactory(): ApartmentProps {
//     return {
//       floor: 5,
      
//       dwellingProps: {
//         bathrooms: [
//           {
//             box: false,
//             closet: false,
//             size: 5,
//           },
//         ],
//         floorAmount: 1,
//         garage: {
//           covered: true,
//           vacancyNumber: 1,
//           floorType: "cement",
//         },
//         petAllowed: true,
//         rooms: [
//           {
//             suite: true,
//             closet: true,
//             size: 5,
//           },
//           {
//             suite: false,
//             closet: false,
//             size: 3.5,
//           },
//           {
//             suite: false,
//             closet: false,
//             size: 3,
//           },
//         ],
//         propertyProps: {
//           address: {
//             city: "Santa Rita do Sapucaí",
//             neighborhood: "Centro",
//             number: 345,
//             publicPlace: "Rua João Euzebio de Almeida",
//             state: "Minas Gerais",
//             zipCode: "37540-000",
//             zone: {
//                 name: "sul",
//                 valueM2: 2000
//               }
//           },
//           area: 360,
//           iptu: 1500,
//           value: 1200,
//           condominium: condominiumFactory(true, true, true, true, 1500),
//         },
//       },
//     };
//   }

