import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "OceanView Villa",
    image: "https://via.placeholder.com/800x400",
    rating: 4.8,
    address: { city: "Mombasa", country: "Kenya" },
    description: "A stunning villa overlooking the Indian Ocean.",
    category: ["Wi-Fi", "Pool", "Air Conditioning", "Parking"],
    price: 120,
    reviews: [
      {
        name: "Alice",
        rating: 5,
        comment: "Wonderful stay with beautiful views!",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      {
        name: "Bob",
        rating: 4,
        comment: "Very clean and well maintained.",
        avatar: "https://i.pravatar.cc/150?img=2"
      }
    ]
  }
];
