import { PropertyRepositoryMemory } from "../../../infra/repository/property-repository-memory";
import { ApartmentProps } from "../../../core/entities/property/types/Apartment";
import { GetProperty } from "./get-property";
import { GetAllProperty } from "./get-all-properties";
import { IPropertyRepository } from "../../../core/repository/property-repository";
import { CreateApartment } from "./create-apartment";
import { Condominium } from "../../../core/entities/property/Condominium";

let propertyRepositoryMemory: IPropertyRepository,
  createApartment: CreateApartment,
  apartmentProps: ApartmentProps;

describe("Create apartment use case", () => {
  // beforeEach(() => {
  //   apartmentProps = apartmentFactory();
  //   propertyRepositoryMemory = new PropertyRepositoryMemory();
  //   createApartment = new CreateApartment(propertyRepositoryMemory);
  // });

  // it("should be able to create a new apartment", async () => {
  //   const response = await createApartment.execute(apartmentProps);
  //   expect(response).toBeTruthy();
  //   expect(response.getAdress().city).toEqual("Santa Rita do Sapucaí");
  // });

  // it("should not be able to create a new apartment without area", async () => {
  //   apartmentProps.dwellingProps.propertyProps.area = 0;

  //   await expect(createApartment.execute(apartmentProps)).rejects.toThrow(
  //     "Property area is not valid!"
  //   );
  // });

  // it("should not be able to create a new apartment without rooms", async () => {
  //   apartmentProps.dwellingProps.rooms = [];

  //   await expect(createApartment.execute(apartmentProps)).rejects.toThrow(
  //     "Apartment should have at least one room!"
  //   );
  // });

  // it("should not be able to create a new apartment without bathrooms", async () => {
  //   apartmentProps.dwellingProps.bathrooms = [];

  //   await expect(createApartment.execute(apartmentProps)).rejects.toThrow(
  //     "Apartment should have at least one bathroom!"
  //   );
  // });

  // it("should get an existing apartment by code", async () => {
  //   const response = await createApartment.execute(apartmentProps);
  //   const getProperty = new GetProperty(propertyRepositoryMemory);
  //   const property = await getProperty.execute(response.getId());

  //   expect(property).toBeTruthy();
  // });
});

function condominiumFactory(elevator: boolean, gym: boolean, playground: boolean, pool: boolean, value: number): Condominium {
  return Condominium.create({ elevator, gym, playground, pool, value });
}

function apartmentFactory(): ApartmentProps {
  return {
    floor: 5,
    dwellingProps: {
      bathrooms: [
        {
          box: false,
          closet: false,
          size: 5,
        },
      ],
      floorAmount: 1,
      garage: {
        covered: true,
        vacancyNumber: 1,
        floorType: "cement",
      },
      petAllowed: true,
      rooms: [
        {
          suite: true,
          closet: true,
          size: 5,
        },
        {
          suite: false,
          closet: false,
          size: 3.5,
        },
        {
          suite: false,
          closet: false,
          size: 3,
        },
      ],
      propertyProps: {
        address: {
          city: "Santa Rita do Sapucaí",
          neighborhood: "Centro",
          number: 345,
          publicPlace: "Rua João Euzebio de Almeida",
          state: "Minas Gerais",
          zipCode: "37540-000",
          zone: {
            name: "sul",
            valueM2: 2000
          }
        },
        area: 360,
        iptu: 1500,
        value: 1200,
        condominium: condominiumFactory(true, true, true, true, 1500),
      },
    },
  };
}
