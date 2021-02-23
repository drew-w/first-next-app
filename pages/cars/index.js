import Link from "next/link";

//! PRETEND LIKE I GOT THIS DATA FROM AN ENDPOINT
const cars = [{ make: "Lambo" }, { make: "Ford" }, { make: "Tesla" }];

const mappedCars = cars.map((car) => {
  return (
    <div>
      <Link as={`/cars/${car.make}`} href="/cars/[id]">
        <button>{car.make}</button>
      </Link>
    </div>
  );
});


export default function CarsList() {
  return <div>{mappedCars}</div>;
}
