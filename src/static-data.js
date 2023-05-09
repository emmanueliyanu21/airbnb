import Montana from "./asset/images/Montana.webp";
import Montana2 from "./asset/images/Montana2.webp";
import Montana3 from "./asset/images/montana3.jpg";

import Barbados from "./asset/images/Barbados.webp";
import Barbados2 from "./asset/images/Barbados2.webp";
import Barbados3 from "./asset/images/Barbados3.webp";

import Lombardia from "./asset/images/Lombardia.webp";
import Lombardia2 from "./asset/images/Lombardia2.webp";
import Lombardia3 from "./asset/images/Lombardia3.jpg";

import Dubai from "./asset/images/Dubai.webp";
import Dubai2 from "./asset/images/Dubai2.webp";
import Dubai3 from "./asset/images/Dubai3.webp";

import Mexico from "./asset/images/Mexico.webp";
import Mexico2 from "./asset/images/Mexico2.webp";
import Mexico3 from "./asset/images/Mexico3.webp";

import unitedstate from "./asset/images/unitedstate.jpg";
import unitedstate2 from "./asset/images/unitedstate2.jpg";
import unitedstate3 from "./asset/images/unitedstate3.webp";

import Colorado from "./asset/images/colorado.webp";
import Colorado2 from "./asset/images/colorado2.webp";
import Colorado3 from "./asset/images/colorado3.webp";

import Texas from "./asset/images/texas.webp";
import Texas2 from "./asset/images/Texas2.webp";
import Texas3 from "./asset/images/Texas3.webp";

import Greece from "./asset/images/Greece.webp";
import Greece2 from "./asset/images/greece2.webp";
import Greece3 from "./asset/images/greece3.webp";

import CostaRica from "./asset/images/costa-rica.webp";
import CostaRica2 from "./asset/images/costa-rica2.jpg";
import CostaRica3 from "./asset/images/costa-rica3.jpg";

import Philippines from "./asset/images/Philiphines.jpg";
import Philippines2 from "./asset/images/philipnies2.jpg";
import Philippines3 from "./asset/images/philipnies3.jpg";

import Steve from "./asset/images/testimonial-steve.png";
import Emily from "./asset/images/testimonial-emily.png";
import Daniel from "./asset/images/testimonial-daniel.png";
import Jackson from "./asset/images/testimonial-jackson.png";

import Cancellation from "./asset/images/cacellation.png";
import CheckIn from "./asset/images/check-in.png";
import Workspace from "./asset/images/workspace.png";

import Host from "./asset/images/host.png";

import Bedrooms from "./asset/images/bedrooms.png";
import Bath from "./asset/images/baths.png";
import Beds from "./asset/images/beds.png";
import Guests from "./asset/images/guests.png";

import Airbnb from "./asset/icon/Airbnb.svg";
import Window from "./asset/icon/Window.svg";
import Home from "./asset/icon/Home.svg";
import AirConditioner from "./asset/icon/Air conditioner.svg";
import Surfer from "./asset/icon/surfer.svg";
import Church from "./asset/icon/Church.svg";
import Waiter from "./asset/icon/Waiter.svg";
import OliveTree from "./asset/icon/Olive tree.svg";
import Tent from "./asset/icon/Tent.svg";
import IslandIcon from "./asset/icon/Island.svg";
import Barn from "./asset/icon/Barn.svg";
import SandCastle from "./asset/icon/Sand castle.svg";
import Sunbed from "./asset/icon/Sunbed.svg";
import Grapes from "./asset/icon/Grapes.svg";
import Ski from "./asset/icon/Ski.svg";
import DesertIcon from "./asset/icon/Desert.svg";
import Paralympic from "./asset/icon/Paralympic swimming silhouette.svg";

import AmazingViews from "./modules/AmazingViews";
import TinyHomes from "./modules/TinyHomes";
import ChefsKitchen from "./modules/ChefsKitchen";
import Surfing from "./modules/Surfing";
import Mansion from "./modules/Mansion";
import Luxe from "./modules/Luxe";
import Treehouses from "./modules/Treehouses";
import Camping from "./modules/Camping";
import BeachFront from "./modules/BeachFront";
import FarmHouse from "./modules/FarmHouse";
import Castle from "./modules/Castle";
import Island from "./modules/Island";
import AmazingPool from "./modules/AmazingPool";
import Vineyard from "./modules/Vineyard";
import Desert from "./modules/Desert";
import Skying from "./modules/Skying";

const data = [
  {
    id: "1",
    image: Montana,
    image2: Montana2,
    image3: Montana3,
    price: "10,000",
    rating: "5.0",
    name: "Whitefish Estate",
    location: "Whitefish, Montana, United States",
    roomDetails: [
      {
        guests: { name: "16+ guests", icon: Guests },
        bedrooms: { name: "8 bedrooms", icon: Bedrooms },
        beds: { name: "8 beds", icon: Beds },
        baths: { name: "8 baths", icon: Bath },
      },
    ],
  },
  {
    id: "2",
    image: Barbados,
    image2: Barbados2,
    image3: Barbados3,
    price: "1,500",
    rating: "5.0",
    name: "Luxury stay in Weston, Saint James, Barbados",
    location: "Weston, Saint James, Barbados",
    roomDetails: [
      {
        guests: { name: "8 guests", icon: Guests },
        bedrooms: { name: "4 bedrooms", icon: Bedrooms },
        beds: { name: "5 beds", icon: Beds },
        baths: { name: "4 baths", icon: Bath },
      },
    ],
  },
  {
    id: "3",
    image: Lombardia,
    image2: Lombardia2,
    image3: Lombardia3,
    price: "359",
    rating: "4.99",
    name: "Numero 22 - Lake Como - Design Living & Lake View",
    location: "Laglio, Lombardia, Italy",
    roomDetails: [
      {
        guests: { name: "6 guests", icon: Guests },
        bedrooms: { name: "2 bedrooms", icon: Bedrooms },
        beds: { name: "3 beds", icon: Beds },
        baths: { name: "3 baths", icon: Bath },
      },
    ],
  },
  {
    id: "4",
    image: Dubai,
    image2: Dubai2,
    image3: Dubai3,
    price: "2,478",
    rating: "4.73",
    name: "7,500 sq ft Private Beachfront Estate",
    location: "Dubai, United Arab Emirates",
    roomDetails: [
      {
        guests: { name: "14 guests", icon: Guests },
        bedrooms: { name: "6 bedrooms", icon: Bedrooms },
        beds: { name: "11 beds", icon: Beds },
        baths: { name: "6.5 baths", icon: Bath },
      },
    ],
  },
  {
    id: "5",
    image: Mexico,
    image2: Mexico2,
    image3: Mexico3,
    price: "199",
    rating: "4.97",
    name: "Bohemian & Spacious / Private Pool and Garden",
    location: "Tulum, Quintana Roo, Mexico",
    roomDetails: [
      {
        guests: { name: "4 guests", icon: Guests },
        bedrooms: { name: "2 bedrooms", icon: Bedrooms },
        beds: { name: "2 beds", icon: Beds },
        baths: { name: "2.5 baths", icon: Bath },
      },
    ],
  },
  {
    id: "6",
    image: unitedstate,
    image2: unitedstate2,
    image3: unitedstate3,
    price: "225",
    rating: "4.93",
    name: "Designer A-Frame Cabin in the Trees",
    location: "Lake Arrowhead, California, United States",
    roomDetails: [
      {
        guests: { name: "6 guests", icon: Guests },
        bedrooms: { name: "3 bedrooms", icon: Bedrooms },
        beds: { name: "4 beds", icon: Beds },
        baths: { name: "2 baths", icon: Bath },
      },
    ],
  },
  {
    id: "7",
    image: Colorado,
    image2: Colorado2,
    image3: Colorado3,
    price: "546",
    rating: "5.00",
    name: "Fully Renovated 2 BR on River w/Pool - Walk to To",
    location: "Aspen, Colorado, United States",
    roomDetails: [
      {
        guests: { name: "6 guests", icon: Guests },
        bedrooms: { name: "2 bedrooms", icon: Bedrooms },
        beds: { name: "4 beds", icon: Beds },
        baths: { name: "3 baths", icon: Bath },
      },
    ],
  },
  {
    id: "8",
    image: Texas,
    image2: Texas2,
    image3: Texas3,
    price: "500",
    rating: "4.97",
    name: "Magnolia Hillcrest Cottage",
    location: "Waco, Texas, United States",
    roomDetails: [
      {
        guests: { name: "2 guests", icon: Guests },
        bedrooms: { name: "1 bedrooms", icon: Bedrooms },
        beds: { name: "1 beds", icon: Beds },
        baths: { name: "1 baths", icon: Bath },
      },
    ],
  },
  {
    id: "9",
    image: Greece,
    image2: Greece2,
    image3: Greece3,
    price: "930",
    rating: "4.95",
    name: "Unique Architecture Cave House by Cycladica",
    location: "Ola, South Aegean, Greece",
    roomDetails: [
      {
        guests: { name: "4 guests", icon: Guests },
        bedrooms: { name: "2 bedrooms", icon: Bedrooms },
        beds: { name: "2 beds", icon: Beds },
        baths: { name: "1 baths", icon: Bath },
      },
    ],
  },
  {
    id: "10",
    image: CostaRica,
    image2: CostaRica2,
    image3: CostaRica3,
    price: "830",
    rating: "4.80",
    name: "ATELIER ArtVillas Costa Rica",
    location: "Uvita, Osa, Puntaneras, Costa Rica",
    roomDetails: [
      {
        guests: { name: "6 guests", icon: Guests },
        bedrooms: { name: "3 bedrooms", icon: Bedrooms },
        beds: { name: "4 beds", icon: Beds },
        baths: { name: "2 baths", icon: Bath },
      },
    ],
  },
  {
    id: "11",
    image: Philippines,
    image2: Philippines2,
    image3: Philippines3,
    price: "483",
    rating: "4.87",
    name: "Mountainside Luxury Cabin with Batulao View",
    location: "Calaca, Calabarzon, Philippines",
    roomDetails: [
      {
        guests: { name: "8 guests", icon: Guests },
        bedrooms: { name: "2 bedrooms", icon: Bedrooms },
        beds: { name: "3 beds", icon: Beds },
        baths: { name: "3 baths", icon: Bath },
      },
    ],
  },
];

const icons = [
  {
    name: "Kitchen",
    icon: Guests,
  },
  {
    name: "Private patio or balcony",
    icon: Guests,
  },
  {
    name: "Centrail air conditioning",
    icon: Guests,
  },
  {
    name: "Dedicated workspaces",
    icon: Bedrooms,
  },
  {
    name: "Wifi",
    icon: Bedrooms,
  },
  {
    name: "Heating",
    icon: Beds,
  },
  {
    name: "55” 4k TV",
    icon: Beds,
  },
  {
    name: "1 parking space",
    icon: Beds,
  },
  {
    name: "Security cameras",
    icon: Bedrooms,
  },
  {
    name: "Free dryer - in unit",
    icon: Bath,
  },
  {
    name: "Free washer - in unit",
    icon: Bath,
  },
  {
    name: "Kitchen",
    icon: Bath,
  },
];

const details = [
  {
    id: "1",
    name: "A private room with wifi thats well-suited for working.",
    text: "Dedicated workspace",
    icon: Workspace,
  },
  {
    id: "2",
    name: "Check yourself in with the keypad.",
    text: "Self check-in",
    icon: CheckIn,
  },
  {
    id: "3",
    name: "A private room with wifi that’s well-suited for working.",
    text: "Free cancellation before Jul 25",
    icon: Cancellation,
  },
];

const aboutSpace = {
  firstText:
    "Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if youre stopping through town and need a restful place to retreat.",
  secondText:
    "An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.",
};

const testimonials = [
  {
    id: "1",
    image: Steve,
    name: "Steve",
    duration: "March 2023",
    text: "Abbes place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. Im so grateful.",
  },
  {
    id: "2",
    image: Emily,
    name: "Emily",
    duration: "March 2023",
    text: "The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.",
  },
  {
    id: "3",
    image: Daniel,
    name: "Daniel",
    duration: "March 2023",
    text: "Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively. ",
  },
  {
    id: "4",
    image: Jackson,
    name: "Jackson",
    duration: "March 2023",
    text: "Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.",
  },
];

const progress = [
  {
    id: "1",
    name: "Cleanliness",
    status: "99.9",
  },
  {
    id: "2",
    name: "Accuracy",
    status: "98",
  },
  {
    id: "3",
    name: "Communication",
    status: "96",
  },
  {
    id: "4",
    name: "Location",
    status: "96",
  },
  {
    id: "5",
    name: "Check-in",
    status: "98",
  },
  {
    id: "6",
    name: "Value",
    status: "84",
  },
];

const location = {
  "test-header": "Where you will be",
  header: "Tulum, Quintana Roo, Mexico",
  text: "The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.",
};

const host = {
  "test-header": "Host",
  image: Host,
  name: "Hosted by Brenda",
  duration: "Joined in August 2014",
  button: "Contact Host",
  text: "As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy...",
  reviews: "2,635",
  identity: "Identity verified",
  detail: "Superhost",
};

const sideBarDetails = {
  price: "359",
  rating: "4.99",
  days: "6 nights",
  fee: "Cleaning fee",
  serviceFee: "",
};

const filterType = [
  { name: "Entire Place", details: "A place all to yourself" },
  {
    name: "Private room",
    details:
      "Your own room in a home or a hotel, plus some shared common spaces.",
  },
  {
    name: "Shared room",
    details:
      "A sleeping space and common areas that may be shared with others.",
  },
];

const roomData = [
  {
    name: "Bedrooms",
    item: ["any", "1", "2", "3", "4", "5+"],
  },
  {
    name: "Beds",
    item: ["any", "1", "2", "3", "4", "5+"],
  },
  {
    name: "Bathrooms",
    item: ["any", "1", "2", "3", "4", "5+"],
  },
];

const routesData = [
  
  {
    path: "amazing-views",
    element: <AmazingViews />,
  },
  {
    path: "tiny-homes",
    element: <TinyHomes />,
  },
  {
    path: "chefs-kitchen",
    element: <ChefsKitchen />,
  },
  {
    path: "surfing",
    element: <Surfing />,
  },
  {
    path: "mansion",
    element: <Mansion />,
  },
  {
    path: "luxe",
    element: <Luxe />,
  },
  {
    path: "tree-houses",
    element: <Treehouses />,
  },
  {
    path: "camping",
    element: <Camping />,
  },
  {
    path: "beach-front",
    element: <BeachFront />,
  },
  {
    path: "farmhouse",
    element: <FarmHouse />,
  },
  {
    path: "castle",
    element: <Castle />,
  },
  {
    path: "amazing-pool",
    element: <AmazingPool />,
  },
  {
    path: "vineyard",
    element: <Vineyard />,
  },
  {
    path: "desert",
    element: <Desert />,
  },
  {
    path: "skying",
    element: <Skying />,
  },
  {
    path: "island",
    element: <Island />,
  },
];

const items = [
  {
    key: "/",
    icon: <img style={{ width: "20px" }} src={Airbnb} alt="My Happy SVG" />,
    label: "All Homes",
  },
  {
    key: "/amazing-views",
    icon: <img style={{ width: "20px" }} src={Window} alt="My Happy SVG" />,
    label: "Amazing Views",
  },
  {
    key: "/tiny-homes",
    icon: <img style={{ width: "20px" }} src={Home} alt="My Happy SVG" />,
    label: "Tiny Homes",
  },
  {
    key: "/chefs-kitchen",
    icon: (
      <img style={{ width: "20px" }} src={AirConditioner} alt="My Happy SVG" />
    ),
    label: "Chefs Kitchen",
  },
  {
    key: "/surfing",
    icon: <img style={{ width: "20px" }} src={Surfer} alt="My Happy SVG" />,
    label: "Surfing",
  },
  {
    key: "/mansion",
    icon: <img style={{ width: "20px" }} src={Church} alt="My Happy SVG" />,
    label: "Mansion",
  },
  {
    key: '/luxe',
    icon: <img style={{ width: "20px" }} src={Waiter} alt="My Happy SVG" />,
    label: "Luxe",
  },
  {
    key: '/tree-houses',
    icon: <img style={{ width: "20px" }} src={OliveTree} alt="My Happy SVG" />,
    label: "Treehouses",
  },
  {
    key: '/camping',
    icon: <img style={{ width: "20px" }} src={Tent} alt="My Happy SVG" />,
    label: "Camping",
  },
  {
    key: '/beach-front',
    icon: <img style={{ width: "20px" }} src={IslandIcon} alt="My Happy SVG" />,
    label: "Beachfront",
  },
  {
    key: 'farm',
    icon: <img style={{ width: "20px" }} src={Barn} alt="My Happy SVG" />,
    label: "Farm",
  },
  {
    key: '/castle',
    icon: <img style={{ width: "20px" }} src={SandCastle} alt="My Happy SVG" />,
    label: "Castle",
  },
  {
    key: '/island',
    icon: <img style={{ width: "20px" }} src={Sunbed} alt="My Happy SVG" />,
    label: "Island",
  },
  {
    key: '/vineyard',
    icon: <img style={{ width: "20px" }} src={Grapes} alt="My Happy SVG" />,
    label: "Vineyard",
  },
  {
    key: '/amazing-pool',
    icon: <img style={{ width: "20px" }} src={Paralympic} alt="My Happy SVG" />,
    label: "Amazing Pool",
  },
  {
    key: '/skying',
    icon: <img style={{ width: "20px" }} src={Ski} alt="My Happy SVG" />,
    label: "Skying",
  },
  {
    key: '/desert',
    icon: <img style={{ width: "20px" }} src={DesertIcon} alt="My Happy SVG" />,
    label: "Desert",
  },
];

export {
  data,
  icons,
  details,
  aboutSpace,
  testimonials,
  progress,
  location,
  host,
  sideBarDetails,
  filterType,
  roomData,
  routesData,
  items,
};
