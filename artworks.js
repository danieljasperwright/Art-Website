/*
  ============================================================
  ARTWORKS DATA FILE
  ============================================================
  This is the ONLY file you need to touch to add new pieces,
  change prices, or mark something as sold.

  HOW TO ADD A NEW ARTWORK:
  1. Copy one of the { ... } blocks below (including the commas)
  2. Paste it into the "artworks" list
  3. Fill in your own details
  4. Save the file — the website updates automatically

  FIELD GUIDE:
  - id:       a unique number for this piece (just count up: 1, 2, 3...)
  - title:    the artwork's title
  - category: which subheading it appears under.
              Must exactly match one of the categories in the
              "categories" list further down (e.g. "Floral").
  - medium:   e.g. "Oil on canvas", "Watercolour", "Charcoal"
  - size:     e.g. "40 x 50 cm"
  - year:     e.g. "2024"
  - price:    write it as a string, e.g. "R1200" or "$450"
              (only shown if status is "available")
              LEAVE THIS AS AN EMPTY STRING —  price: ""  — if you haven't
              decided on a price yet. The site will show the "For Sale" tag
              with no price next to it, rather than showing "R0" or similar.
  - status:   one of exactly three options, in quotes:
                "available"    -> shows the price, appears in "For Sale" filter
                "sold"          -> shows a "Sold" tag, hidden from "For Sale" filter
                "not-for-sale"  -> shows "Not for sale", hidden from "For Sale" filter
  - image:    the filename of the image, which must live inside
              the /images folder. e.g. "images/rose-study.jpg"

  TO MARK SOMETHING AS SOLD:
  Just change   status: "available"   to   status: "sold"
  That's it — nothing else needs to change.
  ============================================================
*/

const categories = [
  "Portraits",
  "Female Figure",
  "Male Figure",
  "Floral",
  "Landscapes",
  "Wildlife"
  // Add more subject-matter categories here as needed, e.g. "Still Life", "Abstract"
];

const artworks = [
  {
    id: 1,
    title: "Ground Squirrel",
    category: "Wildlife",
    medium: "Oil on canvas",
    size: "40 x 50 cm",
    year: "",
    price: "R1800",
    status: "sold",
    image: "images/ground-squirrel-reduced-size.jpg"
  },
  {
    id: 2,
    title: "Winter Vlei",
    category: "Landscapes",
    medium: "Acrylic on canvas",
    size: "100 x 100 cm",
    year: "2024",
    price: "",
    status: "not-for-sale",
    image: "images/winter-vlei-reduced-size.jpg"
  },
  {
    id: 3,
    title: "Autumn at the Millhouse",
    category: "Landscapes",
    medium: "Oil on canvas",
    size: "61,5 x 48,5 cm",
    year: "2022",
    price: "R4500",
    status: "available",
    image: "images/autumn-at-the-millhouse-reduced-size.jpg"
  },
  {
    id: 4,
    title: "Dance of the Sky",
    category: "Landscapes",
    medium: "Oil on canvas",
    size: "51 x 40 cm",
    year: "2022",
    price: "R3500",
    status: "available",
    image: "images/dance-of-the-sky-reduced-size.jpg"
  },
  {
    id: 5,
    title: "The Path Home",
    category: "Landscapes",
    medium: "Oil on canvas",
    size: "62 x 43 cm",
    year: "2022",
    price: "R4000",
    status: "available",
    image: "images/the-path-home-reduced size.jpg"
  },
  {
    id: 6,
    title: "Schloss Moritzburg",
    category: "Landscapes",
    medium: "Oil on canvas",
    size: "80 x 60 cm",
    year: "",
    price: "",
    status: "sold",
    image: "images/schloss-moritzburg-reduced-size.jpg"
  },
    {
    id: 7,
    title: "Lion",
    category: "Wildlife",
    medium: "Oil on canvas",
    size: "60 x 40 cm",
    year: "",
    price: "",
    status: "not-for-sale",
    image: "images/lion-reduced-size.jpg"
  },
      {
    id: 8,
    title: "Ostrich",
    category: "Wildlife",
    medium: "Oil on canvas",
    size: "60 x 80 cm",
    year: "",
    price: "",
    status: "sold",
    image: "images/ostrich-reduced-size.jpg"
  },
       {
    id: 9,
    title: "The Quiet Between",
    category: "Portraits",
    medium: "Oil on canvas",
    size: "45 x 45 cm",
    year: "",
    price: "",
    status: "sold",
    image: "images/the-quiet-between-reduced-size.jpg"
  },
         {
    id: 10,
    title: "Thread and Throrn 1",
    category: "Floral",
    medium: "Oil on fabric",
    size: "60 x 80 cm",
    year: "",
    price: "",
    status: "sold",
    image: "images/thread-and-thorn-1-reduced-size.jpg"
  },
       {
    id: 11,
    title: "Thread and Throrn 2",
    category: "Floral",
    medium: "Oil on fabric",
    size: "60 x 80 cm",
    year: "",
    price: "",
    status: "sold",
    image: "images/thread-and-thorn-2-reduced-size.jpg"
  },
         {
    id: 12,
    title: "Ember and Ashes",
    category: "Floral",
    medium: "Acrylic on canvas",
    size: "51 x 61,5 cm",
    year: "2024",
    price: "R4800",
    status: "available",
    image: "images/ember-and-ash-reduced size.jpg"
  },
];
