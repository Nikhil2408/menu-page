import React, {useState} from "react";
import '../styles/App.css';
import Header from './Header/Header';

import item1 from "../assets/item-1.jpeg";
import item2 from "../assets/item-2.jpeg";
// import item3 from "../assets/item-3.jpeg";
import item4 from "../assets/item-4.jpeg";
import item5 from "../assets/item-5.jpeg";
import item6 from "../assets/item-6.jpeg";
import item7 from "../assets/item-7.jpeg";
import item8 from "../assets/item-8.jpeg";
import item9 from "../assets/item-9.jpeg";
import MenuList from './Menu/MenuList';

const dummy_items = [
  {
    image: <img src={item1} alt="foodItem1"/>,
    name: "Buttermilk Pancakes",
    price: "15",
    about: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "Breakfast"
  },
  {
    image: <img src={item2} alt="foodItem2"/>,
    name: "Diner Double",
    price: "25",
    about: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    type: "Lunch"
  },
  // {
  //   image: <img src={item3} />,
  //   name: "Godzilla Milkshake",
  //   price: "15",
  //   about: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
  // },
  {
    image: <img src={item4} alt="foodItem4"/>,
    name: "Country Delight",
    price: "20",
    about: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
    type: "Breakfast"
  },
  {
    image: <img src={item5} alt="foodItem5"/>,
    name: "Egg Attack",
    price: "18",
    about: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    type: "Lunch"
  },
  {
    image: <img src={item6} alt="foodItem6"/>,
    name: "Oreo Dream",
    price: "30",
    about: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    type: "Shakes"
  },
  {
    image: <img src={item7} alt="foodItem7"/>,
    name: "Bacon Overflow",
    price: "22",
    about: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    type: "Breakfast"
  },
  {
    image: <img src={item8} alt="foodItem8"/>,
    name: "American Classic",
    price: "18",
    about: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    type: "Lunch"
  },
  {
    image: <img src={item9} alt="foodItem9"/>,
    name: "Quarantine Buddy",
    price: "14",
    about: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    type: "Shakes"
  },
]


function App() {

  const [filteredItemsList, setFilteredItemsList] = useState(dummy_items);

  function onTypeSelect(eventObj){
    if(eventObj.target.innerText === "All"){
      setFilteredItemsList(dummy_items);
    }
    else{
      setFilteredItemsList(function(currentState){
        return dummy_items.filter(foodItem => {
          return foodItem.type === eventObj.target.innerText; 
        })
      })
    }
  }

  return (
    <div className="App">
      <Header onTypeSelect = {onTypeSelect}/>
      <MenuList foodItemsList = {filteredItemsList}/>
    </div>
  );
}

export default App;
