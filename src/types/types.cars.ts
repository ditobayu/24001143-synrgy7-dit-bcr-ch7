export interface ICar {
  id?: string;
  name: string;
  category: string;
  price: number;
  color: string;
  year: number;
  image: string;
  created_by: string;
  updated_by: string;
}
export type CarContextType = {
  cars: ICar[];
  fetchCar: () => void;
  addCar: (car: ICar, file: File) => void;
  updateCar: (car: ICar, file: File) => void;
  deleteCar: (id: string) => void;
  getCar: (id: string) => void;
};
