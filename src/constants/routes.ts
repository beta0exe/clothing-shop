import {ProductsType} from "@/constants/types";


export const Nav_routes = [
    {name:"On Sale", path:"/On_Sale"},
    {name:"Shop", path:"/products",hasDropdown:true},
    {name:"New Arrivals", path:"/New_Arrivals"},
    {name:"Brands", path:"/Brands"},
]

export const HeroBg = "/hero/models.svg";



export const BrandLogos = [
    {path:"/hero/brandlogo2.svg",name:"BrandLogo2"},
    {path:"/hero/brandlogo1.svg",name:"BrandLogo1"},
    {path:"/hero/gucci.svg",name:"gucciLogo"},
    {path:"/hero/prada.svg",name:"pradaLogo"},
    {path:"/hero/zara.svg",name:"zaraLogo"},
]

export const Products = [
    {
        id: 1,
        name: "T-SHIRT WITH TAPE DETAILS",
        imageUrl: "/productImages/1.svg",
        price: 120,
        isDiscounted: false,
        stars: 3,
        color: "black",
        category: "t-shirt",
        sizes: ["Small", "Medium", "Large"],
        style: "Casual",
    },
    {
        id: 2,
        name: "VERTICAL STRIPED SHIRT",
        imageUrl: "/productImages/2.svg",
        price: 212,
        isDiscounted: true,
        stars: 4,
        discountedPercentage: 20,
        color: "white",
        category: "shirt",
        sizes: ["Medium", "Large"],
        style: "Formal",
    },
    {
        id: 3,
        name: "SKINNY FIT JEANS",
        imageUrl: "/productImages/3.svg",
        price: 240,
        isDiscounted: true,
        stars: 3,
        discountedPercentage: 40,
        color: "darkBlue",
        category: "jeans",
        sizes: ["Small", "Medium", "Large"],
        style: "Casual",
    },
    {
        id: 4,
        name: "COURAGE GRAPHIC T-SHIRT",
        imageUrl: "/productImages/4.svg",
        price: 120,
        isDiscounted: false,
        stars: 5,
        color: "red",
        category: "t-shirt",
        sizes: ["Medium", "Large"],
        style: "Party",
    },
    {
        id: 5,
        name: "CHECKERED SHIRT",
        imageUrl: "/productImages/5.svg",
        price: 180,
        isDiscounted: false,
        stars: 3,
        color: "brownish",
        category: "shirt",
        sizes: ["Small", "Medium"],
        style: "Formal",
    },
    {
        id: 6,
        name: "LOOSE FIT BERMUDA SHORTS",
        imageUrl: "/productImages/6.svg",
        price: 80,
        isDiscounted: false,
        stars: 4,
        color: "greenish",
        category: "shorts",
        sizes: ["Medium", "Large"],
        style: "Gym",
    },
    {
        id: 7,
        name: "SLEEVE STRIPED T-SHIRT",
        imageUrl: "/productImages/7.svg",
        price: 160,
        isDiscounted: true,
        stars: 3,
        discountedPercentage: 30,
        color: "orange",
        category: "t-shirt",
        sizes: ["Small", "Medium", "Large"],
        style: "Casual",
    },
    {
        id: 8,
        name: "FADED SKINNY JEANS",
        imageUrl: "/productImages/8.svg",
        price: 210,
        isDiscounted: false,
        stars: 2,
        color: "blue",
        category: "jeans",
        sizes: ["Medium", "Large"],
        style: "Casual",
    },
    {
        id: 9,
        name: "POLO COLLAR SHIRT",
        imageUrl: "/productImages/1.svg",
        price: 150,
        isDiscounted: true,
        stars: 4,
        discountedPercentage: 10,
        color: "navy",
        category: "shirt",
        sizes: ["Medium", "Large", "X_Large"],
        style: "Formal",
    },
    {
        id: 10,
        name: "OVERSIZED HOODIE",
        imageUrl: "/productImages/2.svg",
        price: 300,
        isDiscounted: false,
        stars: 5,
        color: "purple",
        category: "hoodie",
        sizes: ["Large", "X_Large", "XX-Large"],
        style: "Casual",
    },
    {
        id: 11,
        name: "CLASSIC BLUE JEANS",
        imageUrl: "/productImages/3.svg",
        price: 220,
        isDiscounted: false,
        stars: 4,
        color: "blue",
        category: "jeans",
        sizes: ["Medium", "Large"],
        style: "Casual",
    },
    {
        id: 12,
        name: "GRAPHIC SWEATSHIRT",
        imageUrl: "/productImages/4.svg",
        price: 180,
        isDiscounted: true,
        stars: 4,
        discountedPercentage: 15,
        color: "yellow",
        category: "sweatshirt",
        sizes: ["Small", "Medium", "Large"],
        style: "Gym",
    },
    {
        id: 13,
        name: "DENIM JACKET",
        imageUrl: "/productImages/5.svg",
        price: 260,
        isDiscounted: false,
        stars: 5,
        color: "black",
        category: "jacket",
        sizes: ["Medium", "Large"],
        style: "Casual",
    },
    {
        id: 14,
        name: "COTTON SHORTS",
        imageUrl: "/productImages/6.svg",
        price: 90,
        isDiscounted: true,
        stars: 3,
        discountedPercentage: 25,
        color: "green",
        category: "shorts",
        sizes: ["Small", "Medium"],
        style: "Gym",
    },
    {
        id: 15,
        name: "STRIPED POLO",
        imageUrl: "/productImages/7.svg",
        price: 170,
        isDiscounted: false,
        stars: 4,
        color: "pink",
        category: "polo",
        sizes: ["Medium", "Large", "X_Large"],
        style: "Casual",
    },
    {
        id: 16,
        name: "SLIM FIT TROUSERS",
        imageUrl: "/productImages/8.svg",
        price: 200,
        isDiscounted: false,
        stars: 4,
        color: "black",
        category: "trousers",
        sizes: ["Medium", "Large"],
        style: "Formal",
    },
];




export const NewArrivals:ProductsType[] = [
    {id:1,name:"T-SHIRT WITH TAPE DETAILS", imageUrl:"/productImages/1.svg",price:120,isDiscounted:false,stars:3,},
    {id:2,name:"VERTICAL STRIPED SHIRT", imageUrl:"/productImages/2.svg",price:212,isDiscounted:true,stars:4,discountedPercentage:20},
    {id:3,name:"SKINNY FIT JEANS", imageUrl:"/productImages/3.svg",price:240,isDiscounted:true,stars:3,discountedPercentage:40},
    {id:4,name:"COURAGE GRAPHIC T-SHIRT", imageUrl:"/productImages/4.svg",price:120,isDiscounted:false,stars:5,},
]


export const TopSelling = [
    {id:5,name:"CHECKERED SHIRT", imageUrl:"/productImages/5.svg",price:180,isDiscounted:false,stars:3,},
    {id:6,name:"LOOSE FIT BERMUDA SHORTS", imageUrl:"/productImages/6.svg",price:80,isDiscounted:false,stars:4,},
    {id:7,name:"SLEEVE STRIPED T-SHIRT", imageUrl:"/productImages/7.svg",price:160,isDiscounted:true,stars:3,discountedPercentage:30},
    {id:8,name:"FADED SKINNY JEANS", imageUrl:"/productImages/8.svg",price:210,isDiscounted:false,stars:2,},
]


export const testimonials = [
    { name: "Sarah M.", review: "I'm blown away by the quality and style of the clothes I received from Shop.co.", postedAt: "August 16, 2025" },
    { name: "Alex K.", review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.", postedAt: "July 3, 2025" },
    { name: "James L.", review: "I'm thrilled to have stumbled upon Shop.co. Their selection is both diverse and trendy.", postedAt: "September 1, 2025" },
    { name: "Mooen A.", review: "Amazing experience! Great quality, fast shipping, and excellent customer service.", postedAt: "June 22, 2025" },
    { name: "Emma R.", review: "I love the recommendations I get every time I log in. Shop.co really understands my style.", postedAt: "August 9, 2025" },
    { name: "Daniel W.", review: "Super fast delivery and the clothes look exactly like the pictures.", postedAt: "July 18, 2025" },
    { name: "Sophia T.", review: "I’ve been recommending Shop.co to all my friends. Their customer support is top-notch!", postedAt: "August 27, 2025" },
    { name: "Liam H.", review: "The fit guide is spot on. Everything I ordered fits perfectly.", postedAt: "September 3, 2025" },
    { name: "Olivia P.", review: "Stylish, affordable, and reliable — my new favorite shop.", postedAt: "May 30, 2025" },
    { name: "Ethan B.", review: "Great variety of products and always fresh new collections.", postedAt: "July 10, 2025" },
    { name: "Mia C.", review: "Returning items was so easy and hassle-free.", postedAt: "June 5, 2025" },
    { name: "Noah D.", review: "The packaging was eco-friendly and the clothes smelled great!", postedAt: "August 21, 2025" },
    { name: "Ava J.", review: "Perfect place for gifting. My friends loved their presents.", postedAt: "July 27, 2025" },
    { name: "Lucas S.", review: "Shop.co is my go-to for every season's wardrobe refresh.", postedAt: "August 3, 2025" },
    { name: "Chloe F.", review: "Affordable prices without compromising on quality. Love it!", postedAt: "September 5, 2025" },
];


export const Bcolors = [
    { id: "brownish", hex: "#4A4332" },
    { id: "greenish", hex: "#2F4A45" },
    { id: "navy", hex: "#2F314D" },
];

export const FilterColors = [
    { id: "brownish", hex: "#4A4332" },
    { id: "greenish", hex: "#2F4A45" },
    { id: "navy", hex: "#2F314D" },
    { id: "green", hex: "#00C12B" },
    { id: "red", hex: "#F50606" },
    { id: "yellow", hex: "#F5DD06" },
    { id: "orange", hex: "#F57906" },
    { id: "lightBlue", hex: "#06CAF5" },
    { id: "darkBlue", hex: "#063AF5" },
    { id: "purple", hex: "#7D06F5" },
    { id: "pink", hex: "#F506A4" },
    { id: "white", hex: "#FFFFFF" },
    { id: "black", hex: "#000000" },

];

export const FilterSizes = [
    "XX-Small","X-Small","Small","Medium","Large","X_Large","XX-Large","3X-Large","4X-Large"
]
export const Sizes = [
    "Small","Medium","Large","X_Large"
]

export const CommentSections = [
    "Product Details","Rating & Reviews","FAQs"
]

export const faqs = [
    {
        question: "What is the return policy?",
        answer:
            "You can return your product within 30 days of purchase for a full refund, provided it is in its original condition.",
    },
    {
        question: "Do you offer free shipping?",
        answer:
            "Yes, we offer free shipping on orders above $50. Standard shipping usually takes 3-5 business days.",
    },
    {
        question: "How can I track my order?",
        answer:
            "Once your order is shipped, you will receive an email with a tracking number to follow your package.",
    },
    {
        question: "Can I change my order after placing it?",
        answer:
            "Yes, you can contact our support team within 12 hours of placing the order to make changes.",
    },
];



