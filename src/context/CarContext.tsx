import { createContext, useState } from "react";
import { CarContextType, ICar } from "../types/types.cars";
import axios from "axios";

export const CarContext = createContext<CarContextType | null>(null);

const CarProvider = ({ children }: { children: React.ReactNode }) => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [file, setFile] = useState(null);
  const fetchCars = async () => {
    axios
      .get("http://localhost:3001/cars")
      .then((response) => {
        setCars(response.data.data.cars);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const [car, setCar] = useState({
    name: "",
    category: "",
    price: 0,
    color: "",
    year: 0,
    image: "",
    created_by: "fb1eea0c-85c8-4cf0-97bd-2d109586074d",
    updated_by: "fb1eea0c-85c8-4cf0-97bd-2d109586074d",
  });

  const addCar = async (data: ICar) => {
    const formData = new FormData();
    formData.append("name", car.name!);
    formData.append("category", car.category!);
    formData.append("price", car.price.toString()!);
    formData.append("color", car.color!);
    formData.append("year", car.year.toString()!);
    console.log(file);
    formData.append("image", file!);
    formData.append("created_by", "fb1eea0c-85c8-4cf0-97bd-2d109586074d");
    formData.append("updated_by", "fb1eea0c-85c8-4cf0-97bd-2d109586074d");

    axios
      .post("http://localhost:3001/cars", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("tokenBinar")}`,
        },
      })
      .then((response) => {
        setCar({
          name: "",
          category: "",
          price: 0,
          color: "",
          year: 0,
          image: "",
          created_by: "fb1eea0c-85c8-4cf0-97bd-2d109586074d",
          updated_by: "fb1eea0c-85c8-4cf0-97bd-2d109586074d",
        });
        setFile(null);
        setImage(null);
        console.log(response.data);
        fetchCars();
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      });
  };

  const deleteCar = async (id) => {
    axios
      .delete(`http://localhost:3001/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenBinar")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        fetchCars();
      });
  };

  const updateCar = async (id) => {
    const formData = new FormData();
    formData.append("name", car.name);
    formData.append("category", car.category);
    formData.append("price", car.price);
    formData.append("color", car.color);
    formData.append("year", car.year);
    formData.append("image", car.image);
    formData.append("created_by", "fb1eea0c-85c8-4cf0-97bd-2d109586074d");
    formData.append("updated_by", "fb1eea0c-85c8-4cf0-97bd-2d109586074d");
    axios
      .put(`http://localhost:3001/cars/${car.id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenBinar")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .then(() => {
        setCar({
          name: "",
          category: "",
          price: 0,
          color: "",
          year: 0,
          image: "",
          created_by: "fb1eea0c-85c8-4cf0-97bd-2d109586074d",
          updated_by: "fb1eea0c-85c8-4cf0-97bd-2d109586074d",
        });
        setIsUpdating(false);
        setFile(null);
        setImage(null);
        fetchCars();
      });
  };
  return (
    <CarContext.Provider
      value={{
        cars: cars,
        fetchCar: () => {},
        addCar: (car: ICar, file: File) => {},
        updateCar: (car: ICar, file: File) => {},
        deleteCar: (id: string) => {},
        getCar: (id: string) => {},
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
