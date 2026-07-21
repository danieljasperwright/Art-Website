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
  "Floral",
  "Portraits",
  "Landscapes"
  // Add more subject-matter categories here as needed, e.g. "Still Life", "Abstract"
];

const artworks = [
  {
    id: 1,
    title: "Morning Peonies",
    category: "Floral",
    medium: "Oil on canvas",
    size: "40 x 50 cm",
    year: "2024",
    price: "R1800",
    status: "available",
    image: "images/placeholder-1.jpg"
  },
  {
    id: 2,
    title: "Study in Rust",
    category: "Floral",
    medium: "Watercolour",
    size: "21 x 29 cm",
    year: "2023",
    price: "R650",
    status: "sold",
    image: "images/placeholder-2.jpg"
  },
  {
    id: 3,
    title: "Grandmother's Hands",
    category: "Portraits",
    medium: "Charcoal on paper",
    size: "30 x 40 cm",
    year: "2024",
    price: "R950",
    status: "available",
    image: "images/placeholder-3.jpg"
  },
  {
    id: 4,
    title: "Self Portrait, Late Light",
    category: "Portraits",
    medium: "Oil on board",
    size: "35 x 35 cm",
    year: "2022",
    price: "",
    status: "not-for-sale",
    image: "images/placeholder-4.jpg"
  },
  {
    id: 5,
    title: "Valley Before Rain",
    category: "Landscapes",
    medium: "Acrylic on canvas",
    size: "60 x 80 cm",
    year: "2024",
    price: "R2400",
    status: "available",
    image: "images/placeholder-5.jpg"
  },
  {
    id: 6,
    title: "Dune Line, Evening",
    category: "Landscapes",
    medium: "Oil on canvas",
    size: "50 x 70 cm",
    year: "2023",
    price: "R2100",
    status: "sold",
    image: "images/placeholder-6.jpg"
  },
    {
    id: 7,
    title: "Lion",
    category: "Floral",
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
    category: "Floral",
    medium: "Oil on canvas",
    size: "60 x 80 cm",
    year: "",
    price: "",
    status: "not-for-sale",
    image: "images/ostrich-reduced-size.jpg"
  },
];
