import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img10.jpg";
import tourImg09 from "../images/tour-img11.jpg";
import tourImg10 from "../images/tour-img12.jpg";
import tourImg11 from "../images/tour-img13.jpg";
import tourImg12 from "../images/tour-img14.jpg";
import tourImg13 from "../images/tour-img15.jpg";
import tourImg14 from "../images/tour-img16.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address: "Somewhere on Earth",
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: "Somewhere on Earth",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere on Earth",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere on Earth",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: "Somewhere on Earth",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: "Somewhere on Earth",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: "Somewhere on Earth",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere on Earth",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "09",
    title: "Machu Picchu",
    city: "Peru",
    distance: 500,
    address: "Peru",
    price: 199,
    maxGroupSize: 8,
    desc: "Machu Picchu, the ancient Inca citadel perched high in the Andes Mountains of Peru, is a breathtaking testament to human ingenuity and natural beauty. This UNESCO World Heritage Site and one of the New Seven Wonders of the World captivates visitors with its magnificent stone structures, intricate terraces, and panoramic vistas. Stepping into the lost city, travelers are transported back in time, immersing themselves in the mysteries and spirituality of the Inca civilization. Whether exploring the Temple of the Sun, hiking the iconic Inca Trail, or simply taking in the awe-inspiring surroundings, Machu Picchu is an extraordinary destination that leaves a lasting impression and a sense of wonder in the hearts of all who visit.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "10",
    title: "Railay Beach",
    city: "Krabi",
    distance: 500,
    address: "Thailand",
    price: 199,
    maxGroupSize: 8,
    desc: "Railay Beach, located in Krabi, Thailand, is a tropical paradise renowned for its stunning limestone cliffs, crystal-clear turquoise waters, and pristine sandy beaches. Accessible only by boat due to the surrounding cliffs, Railay Beach offers a secluded and tranquil escape from the bustling world. It is a haven for rock climbers, with its towering cliffs providing world-class climbing opportunities. Visitors can also enjoy snorkeling, kayaking, and relaxing on the beautiful beaches. With its breathtaking scenery and laid-back atmosphere, Railay Beach is a must-visit destination for those seeking natural beauty and outdoor adventures.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "11",
    title: "Taj Mahal",
    city: "Agra",
    distance: 500,
    address: "India",
    price: 199,
    maxGroupSize: 8,
    desc: "The Taj Mahal, located in Agra, India, is an iconic masterpiece and one of the most recognized architectural wonders in the world. Built in the 17th century by Emperor Shah Jahan as a tribute to his beloved wife, it is a symbol of eternal love and beauty. The Taj Mahal's white marble facade, intricate carvings, and graceful domes create a mesmerizing sight that dazzles visitors at every angle. The surrounding gardens and reflecting pools add to its ethereal charm. As a UNESCO World Heritage Site, the Taj Mahal attracts millions of visitors each year who come to marvel at its grandeur and experience the profound sense of awe and serenity it evokes.",
    reviews: [
      {
        name: " doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  },
  {
    id: "12",
    title: "Opera House",
    city: "Sydney",
    distance: 500,
    address: "Australia",
    price: 399,
    maxGroupSize: 8,
    desc: "The Opera House is a renowned architectural marvel located in Sydney, Australia. It is one of the most recognizable and iconic buildings in the world. Designed by Danish architect Jørn Utzon, the Opera House features a unique sail-like design that gracefully overlooks the sparkling waters of Sydney Harbour. The venue hosts a diverse range of performing arts events, including opera, ballet, concerts, and theater productions, attracting artists and audiences from around the globe. The Opera House's cultural significance, striking silhouette, and prime waterfront location make it a must-visit destination, offering visitors a chance to witness world-class performances in an extraordinary setting.",
    reviews: [
      {
        name: " doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: false,
  },
  {
    id: "12",
    title: "Opera House",
    city: "Sydney",
    distance: 500,
    address: "Australia",
    price: 399,
    maxGroupSize: 8,
    desc: "The Opera House is a renowned architectural marvel located in Sydney, Australia. It is one of the most recognizable and iconic buildings in the world. Designed by Danish architect Jørn Utzon, the Opera House features a unique sail-like design that gracefully overlooks the sparkling waters of Sydney Harbour. The venue hosts a diverse range of performing arts events, including opera, ballet, concerts, and theater productions, attracting artists and audiences from around the globe. The Opera House's cultural significance, striking silhouette, and prime waterfront location make it a must-visit destination, offering visitors a chance to witness world-class performances in an extraordinary setting.",
    reviews: [
      {
        name: " doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: false,
  },
  {
    id: "13",
    title: "Manali",
    city: "Himachal Pradesh",
    distance: 500,
    address: "Australia",
    price: 299,
    maxGroupSize: 8,
    desc: "Manali, located in the state of Himachal Pradesh, India, is a picturesque hill station nestled in the mighty Himalayas. Known for its breathtaking landscapes, lush valleys, and snow-capped peaks, Manali is a popular destination for nature enthusiasts and adventure seekers alike. The town offers a serene escape from city life, with attractions like the Rohtang Pass, Solang Valley, and Beas Kund showcasing the region's natural beauty. Visitors can indulge in activities such as trekking, skiing, paragliding, and rafting, or simply soak in the tranquility of the surrounding mountains. Manali also boasts charming markets, where one can explore local handicrafts, sample delicious Himachali cuisine, and experience the warm hospitality of the local people. Whether it's a winter wonderland or a summer getaway, Manali offers a magical retreat for those seeking to immerse themselves in the beauty of the Himalayas.",
    reviews: [
      {
        name: " doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg13,
    featured: false,
  },
  {
    id: "14",
    title: "Leaning Tower of Pisa",
    city: "Pisa",
    distance: 500,
    address: "Italy",
    price: 299,
    maxGroupSize: 8,
    desc: "The Leaning Tower of Pisa, located in Pisa, Italy, is an iconic architectural marvel that has captivated visitors for centuries. Built as a bell tower for the nearby cathedral, its distinctive tilt, caused by an unstable foundation, has made it a global symbol of architectural curiosity. The tower stands at about 56 meters tall and its white marble exterior is adorned with intricate designs. Visitors can climb to the top for panoramic views of Pisa or marvel at its leaning facade from the Piazza dei Miracoli, where it stands alongside other stunning structures like the Pisa Cathedral and Baptistery. The Leaning Tower of Pisa is a testament to human perseverance and continues to attract millions of tourists who come to witness its unique beauty and take those iconic holding up the tower photos.",
    reviews: [
      {
        name: " doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg14,
    featured: false,
  },
];

export default tours;
