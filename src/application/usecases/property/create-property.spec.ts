import { PropertyRepositoryMemory } from "../../../infra/repository/property-repository-memory";
import { GetProperty } from "./get-property";
import { GetAllProperty } from "./get-all-properties";
import { IPropertyRepository } from "../../../core/repository/property-repository";
import { CreateProperty } from "./create-property";
import { HouseDTO } from "../../../core/entities/property/types/HouseDTO";
import { House } from "../../../core/entities/property/House";

let propertyRepositoryMemory: IPropertyRepository,
  createHouse: CreateProperty,
  houseProps: HouseDTO;

describe("Create property use case", () => {
  describe("Create house use case", () => {
    beforeEach(() => {
      houseProps = houseFactory();
      propertyRepositoryMemory = new PropertyRepositoryMemory();
      createHouse = new CreateProperty(propertyRepositoryMemory);
    });
  
    it("should be able to create a new house", async () => {
      const response = await createHouse.execute(houseProps) as House;
      expect(response).toBeTruthy();
      expect(response.getAdress().city).toEqual("Santa Rita do Sapucaí");
      expect(response.getArea()).toBeGreaterThan(response.getBuiltArea());
    });
  
    it("should not be able to create a new house without area", async () => {
      houseProps.area = 0;
  
      await expect(createHouse.execute(houseProps)).rejects.toThrow(
        "Property area is not valid!"
      );
    });
  
    it("should not be able to create a new house without rooms", async () => {
      houseProps.rooms = [];
  
      await expect(createHouse.execute(houseProps)).rejects.toThrow(
        "Property should have at least one room!"
      );
    });
  
    it("should not be able to create a new house without bathrooms", async () => {
      houseProps.bathrooms = [];
  
      await expect(createHouse.execute(houseProps)).rejects.toThrow(
        "Property should have at least one bathroom!"
      );
    });
  
    it("should not be able to create a new house when built area is larger than property area", async () => {
      houseProps.builtArea = 300;
      houseProps.area = 200;
  
      await expect(createHouse.execute(houseProps)).rejects.toThrow(
        "Property built area is not valid!"
      );
    });
  
    it("should get an existing house by code", async () => {
      const response = await createHouse.execute(houseProps);
      const getProperty = new GetProperty(propertyRepositoryMemory);
      const property = await getProperty.execute(response.getId());
  
      expect(property).toBeTruthy();
    });
  
    it("should get all properties", async () => {
      const getAllProperty = new GetAllProperty(propertyRepositoryMemory);
      await createHouse.execute(houseProps);
  
      const houseProps2 = houseFactory();
      await createHouse.execute(houseProps2);
  
      const houseProps3 = houseFactory();
      await createHouse.execute(houseProps3);
  
      const properties = await getAllProperty.execute();
  
      expect(properties.length).toEqual(3);
    });
  }),
  describe("Create apartment use case", () => {
    
  })
});

function houseFactory(): HouseDTO {
  return new HouseDTO ({
    builtArea: 200,
    yard: {
      floorType: "ground",
      pool: false,
    },
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
  });
}
