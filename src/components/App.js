import React, {useEffect, useState} from "react";
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
import FAQsContainer from "./FAQs/FAQsContainer";

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
];

const dummy_faqs = [
  {
    question: "What is the meaning of Lorem Ipsum",
    answer: "Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder"
  },
  {
    question: "Why is Lorem Ipsum used",
    answer: "The Lorem Ipsum text is used to fill spaces designated to host texts that have not yet been published. They use programmers, graphic designers, typographers to get a real impression of the digital / advertising / editorial product they are working on."
  },
  {
    question: "What is the most used version?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]


function App() {

  const [filteredItemsList, setFilteredItemsList] = useState(dummy_items);
  const [theme, setTheme] = useState("lightTheme");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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

  function toggleTheme(){
    if(theme === "lightTheme")
      setTheme("darkTheme");
    else
      setTheme("lightTheme");
  }

  return (
    <div className="App">
      <button onClick={toggleTheme} className="toggleTheme">Toggle Theme</button>
      <Header onTypeSelect = {onTypeSelect}/>
      <MenuList foodItemsList = {filteredItemsList}/>
      <FAQsContainer faqs = {dummy_faqs}/>
    </div>
  );
}

export default App;
