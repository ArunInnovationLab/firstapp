import { useEffect } from "react";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function DessertsList(props) {
  const dessertsList = props.data;

  const filteredList = dessertsList.filter((dessert) => {
    return dessert.calories < 500;
  });

  const sortedList = filteredList.sort((a, b) => {
    return a.calories - b.calories;
  });

  const customList = sortedList.map((dessert) => {
    const item = `${dessert.name} - ${dessert.calories} cal`;

    return <li key={item}>{item}</li>;
  });

  return <ul>{customList}</ul>;
}

export default function DisplayDessertsList() {
  useEffect(()=>{
    document.title = "Desserts"
  })
  return (
    <div>
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}
