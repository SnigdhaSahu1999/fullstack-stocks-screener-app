export const menu = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "/home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "/user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "/user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "/product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "/order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "/post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "General",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "/element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "/note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "/form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "/calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "/setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "/backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "/chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "/log.svg",
      },
    ],
  },
];

export const topGainers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  }
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const users = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const activities = [
  {
    id: 1,
    userId: 1,
    text: "purchased Playstation 5 Digital Edition",
    time: "3 day ago",
  },
  {
    id: 2,
    userId: 1,
    text: "added 3 items into their wishlist",
    time: "1 week ago",
  },
  {
    id: 3,
    userId: 1,
    text: "purchased Sony Bravia KD-32w800",
    time: "2 weeks ago",
  },
  {
    id: 4,
    userId: 1,
    text: "reviewed a product",
    time: "1 month ago",
  },
  {
    id: 5,
    userId: 1,
    text: "added 1 item into their wishlist",
    time: "1 month ago",
  },
  {
    id: 6,
    userId: 1,
    text: "reviewed a product",
    time: "2 months ago",
  },
  {
    id: 7,
    userId: 2,
    text: "purchased iPhone 13 Pro Max",
    time: "1 day ago",
  },
  {
    id: 8,
    userId: 2,
    text: "added 2 items into their wishlist",
    time: "3 weeks ago",
  },
  {
    id: 9,
    userId: 2,
    text: "purchased Apple Watch Series 7",
    time: "1 month ago",
  },
  {
    id: 10,
    userId: 3,
    text: "purchased Samsung Galaxy S22",
    time: "2 days ago",
  },
  {
    id: 11,
    userId: 3,
    text: "added 1 item into their wishlist",
    time: "2 weeks ago",
  },
  {
    id: 12,
    userId: 3,
    text: "purchased Samsung 55-inch 4K TV",
    time: "3 weeks ago",
  },
  {
    id: 13,
    userId: 3,
    text: "reviewed a product",
    time: "1 month ago",
  },
];

export const statistics = [
  {
    id: 1,
    userId: 1,
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  {
    id: 2,
    userId: 2,
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 3200,
        clicks: 2100,
      },
      {
        name: "Mon",
        visits: 2800,
        clicks: 1500,
      },
      {
        name: "Tue",
        visits: 1900,
        clicks: 3400,
      },
      {
        name: "Wed",
        visits: 2600,
        clicks: 3700,
      },
      {
        name: "Thu",
        visits: 1790,
        clicks: 4600,
      },
      {
        name: "Fri",
        visits: 2200,
        clicks: 3600,
      },
      {
        name: "Sat",
        visits: 3300,
        clicks: 4100,
      },
    ],
  },
  {
    id: 3,
    userId: 3,
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 3600,
        clicks: 2300,
      },
      {
        name: "Mon",
        visits: 3100,
        clicks: 1800,
      },
      {
        name: "Tue",
        visits: 2200,
        clicks: 4100,
      },
      {
        name: "Wed",
        visits: 2980,
        clicks: 4308,
      },
      {
        name: "Thu",
        visits: 2100,
        clicks: 5200,
      },
      {
        name: "Fri",
        visits: 2600,
        clicks: 4200,
      },
      {
        name: "Sat",
        visits: 3700,
        clicks: 4700,
      },
    ],
  },
];

export const CandleStickData =  [
  {
    x: new Date(1538778600000).toISOString(),
    y: [6629.81, 6650.5, 6623.04, 6633.33]
  },
  {
    x: new Date(1538780400000).toISOString(),
    y: [6632.01, 6643.59, 6620, 6630.11]
  },
  {
    x: new Date(1538782200000).toISOString(),
    y: [6630.71, 6648.95, 6623.34, 6635.65]
  },
  {
    x: new Date(1538784000000).toISOString(),
    y: [6635.65, 6651, 6629.67, 6638.24]
  },
  {
    x: new Date(1538785800000).toISOString(),
    y: [6638.24, 6640, 6620, 6624.47]
  },
  {
    x: new Date(1538787600000).toISOString(),
    y: [6624.53, 6636.03, 6621.68, 6624.31]
  },
  {
    x: new Date(1538789400000).toISOString(),
    y: [6624.61, 6632.2, 6617, 6626.02]
  },
  {
    x: new Date(1538791200000).toISOString(),
    y: [6627, 6627.62, 6584.22, 6603.02]
  },
  {
    x: new Date(1538793000000).toISOString(),
    y: [6605, 6608.03, 6598.95, 6604.01]
  },
  {
    x: new Date(1538794800000).toISOString(),
    y: [6604.5, 6614.4, 6602.26, 6608.02]
  },
  {
    x: new Date(1538796600000).toISOString(),
    y: [6608.02, 6610.68, 6601.99, 6608.91]
  },
  {
    x: new Date(1538798400000).toISOString(),
    y: [6608.91, 6618.99, 6608.01, 6612]
  },
  {
    x: new Date(1538800200000).toISOString(),
    y: [6612, 6615.13, 6605.09, 6612]
  },
  {
    x: new Date(1538802000000).toISOString(),
    y: [6612, 6624.12, 6608.43, 6622.95]
  },
  {
    x: new Date(1538803800000).toISOString(),
    y: [6623.91, 6623.91, 6615, 6615.67]
  },
  {
    x: new Date(1538805600000).toISOString(),
    y: [6618.69, 6618.74, 6610, 6610.4]
  },
  {
    x: new Date(1538807400000).toISOString(),
    y: [6611, 6622.78, 6610.4, 6614.9]
  },
  {
    x: new Date(1538809200000).toISOString(),
    y: [6614.9, 6626.2, 6613.33, 6623.45]
  },
  {
    x: new Date(1538811000000).toISOString(),
    y: [6623.48, 6627, 6618.38, 6620.35]
  },
  {
    x: new Date(1538812800000).toISOString(),
    y: [6619.43, 6620.35, 6610.05, 6615.53]
  },
  {
    x: new Date(1538814600000).toISOString(),
    y: [6615.53, 6617.93, 6610, 6615.19]
  },
  {
    x: new Date(1538816400000).toISOString(),
    y: [6615.19, 6621.6, 6608.2, 6620]
  },
  {
    x: new Date(1538818200000).toISOString(),
    y: [6619.54, 6625.17, 6614.15, 6620]
  },
  {
    x: new Date(1538820000000).toISOString(),
    y: [6620.33, 6634.15, 6617.24, 6624.61]
  },
  {
    x: new Date(1538821800000).toISOString(),
    y: [6625.95, 6626, 6611.66, 6617.58]
  },
  {
    x: new Date(1538823600000).toISOString(),
    y: [6619, 6625.97, 6595.27, 6598.86]
  },
  {
    x: new Date(1538825400000).toISOString(),
    y: [6598.86, 6598.88, 6570, 6587.16]
  },
  {
    x: new Date(1538827200000).toISOString(),
    y: [6588.86, 6600, 6580, 6593.4]
  },
  {
    x: new Date(1538829000000).toISOString(),
    y: [6593.99, 6598.89, 6585, 6587.81]
  },
  {
    x: new Date(1538830800000).toISOString(),
    y: [6587.81, 6592.73, 6567.14, 6578]
  },
  {
    x: new Date(1538832600000).toISOString(),
    y: [6578.35, 6581.72, 6567.39, 6579]
  },
  {
    x: new Date(1538834400000).toISOString(),
    y: [6579.38, 6580.92, 6566.77, 6575.96]
  },
  {
    x: new Date(1538836200000).toISOString(),
    y: [6575.96, 6589, 6571.77, 6588.92]
  },
  {
    x: new Date(1538838000000).toISOString(),
    y: [6588.92, 6594, 6577.55, 6589.22]
  },
  {
    x: new Date(1538839800000).toISOString(),
    y: [6589.3, 6598.89, 6589.1, 6596.08]
  },
  {
    x: new Date(1538841600000).toISOString(),
    y: [6597.5, 6600, 6588.39, 6596.25]
  },
  {
    x: new Date(1538843400000).toISOString(),
    y: [6598.03, 6600, 6588.73, 6595.97]
  },
  {
    x: new Date(1538845200000).toISOString(),
    y: [6595.97, 6602.01, 6588.17, 6602]
  },
  {
    x: new Date(1538847000000).toISOString(),
    y: [6602, 6607, 6596.51, 6599.95]
  },
  {
    x: new Date(1538848800000).toISOString(),
    y: [6600.63, 6601.21, 6590.39, 6591.02]
  },
  {
    x: new Date(1538850600000).toISOString(),
    y: [6591.02, 6603.08, 6591, 6591]
  },
  {
    x: new Date(1538852400000).toISOString(),
    y: [6591, 6601.32, 6585, 6592]
  },
  {
    x: new Date(1538854200000).toISOString(),
    y: [6593.13, 6596.01, 6590, 6593.34]
  },
  {
    x: new Date(1538856000000).toISOString(),
    y: [6593.34, 6604.76, 6582.63, 6593.86]
  },
  {
    x: new Date(1538857800000).toISOString(),
    y: [6593.86, 6604.28, 6586.57, 6600.01]
  },
  {
    x: new Date(1538859600000).toISOString(),
    y: [6601.81, 6603.21, 6592.78, 6596.25]
  },
  {
    x: new Date(1538861400000).toISOString(),
    y: [6596.25, 6604.2, 6590, 6602.99]
  },
  {
    x: new Date(1538863200000).toISOString(),
    y: [6602.99, 6606, 6584.99, 6587.81]
  },
  {
    x: new Date(1538865000000).toISOString(),
    y: [6587.81, 6595, 6583.27, 6591.96]
  },
  {
    x: new Date(1538866800000).toISOString(),
    y: [6591.97, 6596.07, 6585, 6588.39]
  },
  {
    x: new Date(1538868600000).toISOString(),
    y: [6587.6, 6598.21, 6587.6, 6594.27]
  },
  {
    x: new Date(1538870400000).toISOString(),
    y: [6596.44, 6601, 6590, 6596.55]
  },
  {
    x: new Date(1538872200000).toISOString(),
    y: [6598.91, 6605, 6596.61, 6600.02]
  },
  {
    x: new Date(1538874000000).toISOString(),
    y: [6600.55, 6605, 6589.14, 6593.01]
  },
  {
    x: new Date(1538875800000).toISOString(),
    y: [6593.15, 6605, 6592, 6603.06]
  },
  {
    x: new Date(1538877600000).toISOString(),
    y: [6603.07, 6604.5, 6599.09, 6603.89]
  },
  {
    x: new Date(1538879400000).toISOString(),
    y: [6604.44, 6604.44, 6600, 6603.5]
  },
  {
    x: new Date(1538881200000).toISOString(),
    y: [6603.5, 6603.99, 6597.5, 6603.86]
  },
  {
    x: new Date(1538883000000).toISOString(),
    y: [6603.85, 6605, 6600, 6604.07]
  },
  {
    x: new Date(1538884800000).toISOString(),
    y: [6604.98, 6606, 6604.07, 6606]
  },
];

export const apiresponse={
  "header": {
      "searchId": "hdfc-bank-ltd",
      "growwCompanyId": "GSTK500180",
      "isin": "INE040A01034",
      "industryId": 40101010,
      "industryName": "Banks",
      "displayName": "HDFC Bank",
      "shortName": "HDFC Bank",
      "type": "STOCK",
      "isFnoEnabled": true,
      "nseScriptCode": "HDFCBANK",
      "bseScriptCode": "500180",
      "isBseTradable": true,
      "isNseTradable": true,
      "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK500180.png",
      "floatingShares": 7449107474,
      "isBseFnoEnabled": false,
      "isNseFnoEnabled": true
  },
  "details": {
      "fullName": "HDFC Bank",
      "parentCompany": "HDFC Bank Limited",
      "headquarters": "MUMBAI",
      "ceo": "Mr. Sashidhar Jagdishan",
      "managingDirector": "Mr. Sashidhar Jagdishan",
      "foundedYear": 1994,
      "businessSummary": "HDFC Bank Limited (the Bank) is a financial services conglomerate that offers a full suite of financial services, from banking to insurance, and mutual funds through its subsidiaries. The Bank caters to a range of banking services covering commercial and investment banking and transactional/branch banking. Its Treasury segment includes net interest earnings from its investment portfolio, money market borrowing and lending, gains or losses on investment operations and on account of trading in foreign exchange and derivative contracts. The Retail Banking segment includes Digital Banking, and Other retail banking. The Wholesale Banking segment provides loans, non-fund facilities and transaction services to large corporates, public sector units, government bodies, financial institutions and medium scale enterprises. Its subsidiaries include HDFC Securities Ltd., HDB Financial Services Ltd., HDFC Asset Management Co. Ltd, and HDFC ERGO General Insurance Co. Ltd.",
      "websiteUrl": "https://www.hdfcbank.com/"
  },
  "brandDtos": [
      {
          "name": "HDFC Bank Debit Card",
          "logoUrl": "https://assets-netstorage.groww.in/stock-assets/brand_logo/INE040A01034/HDFC%20Bank%20Debit%20Card/1.%20regalia-669x262.png"
      },
      {
          "name": "HDFC Bank",
          "logoUrl": "https://assets-netstorage.groww.in/stock-assets/brand_logo/INE040A01034/HDFC%20Bank/4.%20hdfc-bank-logo-e1357800186247.png"
      },
      {
          "name": "HDFC_Bank.png",
          "logoUrl": "https://assets-netstorage.groww.in/stock-assets/brand_logo/INE040A01034/HDFC_Bank.png"
      }
  ],
  "stats": {
      "marketCap": 1177065.34,
      "pbRatio": 2.69,
      "peRatio": 19.94,
      "divYield": 0.9,
      "bookValue": 575.6588705,
      "epsTtm": 77.71,
      "roe": 13.49897978269006,
      "industryPe": 14.540778488104875,
      "cappedType": "Large Cap",
      "dividendYieldInPercent": 0.9,
      "faceValue": 1,
      "returnOnAssets": 0.0,
      "operatingProfitMargin": 82.872522354787,
      "netProfitMargin": 23.448224774217888,
      "evToSales": 0.0,
      "evToEbitda": 20.05,
      "earningsYield": 0.9006662280957147,
      "sectorPb": 2.1522622613997844,
      "sectorDivYield": 0.8524867847787806,
      "sectorRoe": 14.315278023886657,
      "sectorRoce": 5.508082532503328,
      "ToOcf": -25.812343931157454,
      "priceToFcf": 9.43,
      "roic": 0.0,
      "pePremiumVsSector": 0.37131584916942195,
      "pbPremiumVsSector": 0.24984768271246027,
      "divYieldVsSector": 0.04751321522121943,
      "sectorPe": 14.540778488104875,
      "priceToSales": 3.41,
      "pegRatio": 0.9659698058950398,
      "priceToOcf":0.0
  },
  "fundamentals": [
      {
          "name": "Market Cap",
          "shortName": "Mkt Cap",
          "value": "₹11,77,065Cr"
      },
      {
          "name": "ROE",
          "shortName": "ROE",
          "value": "13.50%"
      },
      {
          "name": "P/E Ratio(TTM)",
          "shortName": "P/E Ratio(TTM)",
          "value": "19.94"
      },
      {
          "name": "EPS(TTM)",
          "shortName": "EPS(TTM)",
          "value": "77.71"
      },
      {
          "name": "P/B Ratio",
          "shortName": "P/B Ratio",
          "value": "2.69"
      },
      {
          "name": "Dividend Yield",
          "shortName": "Div Yield",
          "value": "0.90%"
      },
      {
          "name": "Industry P/E",
          "shortName": "Industry P/E",
          "value": "14.54"
      },
      {
          "name": "Book Value",
          "shortName": "Book Value",
          "value": "575.66"
      },
      {
          "name": "Debt to Equity",
          "shortName": "Debt to Equity",
          "value": "NA"
      },
      {
          "name": "Face Value",
          "shortName": "Face Value",
          "value": "1"
      }
  ],
  "shareHoldingPattern": {
      "Jun '23": {
          "promoters": {
              "individual": {
                  "percent": 25.5199
              },
              "government": {
                  "percent": 0.0
              },
              "corporation": {
                  "percent": 0.0
              }
          },
          "mutualFunds": {
              "percent": 17.5996
          },
          "otherDomesticInstitutions": {
              "insurance": {
                  "percent": 7.701700000000001
              },
              "otherFirms": {
                  "percent": 0.0
              }
          },
          "foreignInstitutions": {
              "percent": 33.3765
          },
          "retailAndOthers": {
              "percent": 15.802300000000013
          }
      },
      "Jul '23": {
          "promoters": {
              "individual": {
                  "percent": 0.0
              },
              "government": {
                  "percent": 0.0
              },
              "corporation": {
                  "percent": 0.0
              }
          },
          "mutualFunds": {
              "percent": 19.1287
          },
          "otherDomesticInstitutions": {
              "insurance": {
                  "percent": 10.879700000000003
              },
              "otherFirms": {
                  "percent": 0.0
              }
          },
          "foreignInstitutions": {
              "percent": 53.9284
          },
          "retailAndOthers": {
              "percent": 16.063200000000002
          }
      },
      "Sep '23": {
          "promoters": {
              "individual": {
                  "percent": 0.0
              },
              "government": {
                  "percent": 0.0
              },
              "corporation": {
                  "percent": 0.0
              }
          },
          "mutualFunds": {
              "percent": 19.7112
          },
          "otherDomesticInstitutions": {
              "insurance": {
                  "percent": 8.8333
              },
              "otherFirms": {
                  "percent": 0.0
              }
          },
          "foreignInstitutions": {
              "percent": 52.1327
          },
          "retailAndOthers": {
              "percent": 19.322800000000008
          }
      },
      "Dec '23": {
          "promoters": {
              "individual": {
                  "percent": 0.0
              },
              "government": {
                  "percent": 0.0
              },
              "corporation": {
                  "percent": 0.0
              }
          },
          "mutualFunds": {
              "percent": 19.4456
          },
          "otherDomesticInstitutions": {
              "insurance": {
                  "percent": 9.1669
              },
              "otherFirms": {
                  "percent": 0.0
              }
          },
          "foreignInstitutions": {
              "percent": 52.301
          },
          "retailAndOthers": {
              "percent": 19.0865
          }
      },
      "Mar '24": {
          "promoters": {
              "individual": {
                  "percent": 0.0
              },
              "government": {
                  "percent": 0.0
              },
              "corporation": {
                  "percent": 0.0
              }
          },
          "mutualFunds": {
              "percent": 23.1686
          },
          "otherDomesticInstitutions": {
              "insurance": {
                  "percent": 10.427699999999998
              },
              "otherFirms": {
                  "percent": 0.0
              }
          },
          "foreignInstitutions": {
              "percent": 47.833
          },
          "retailAndOthers": {
              "percent": 18.570700000000002
          }
      }
  },
  "fundsInvested": [
      {
          "name": "Tata Banking and Financial Services Fund Direct Growth",
          "searchId": "tata-banking-and-financial-services-fund-direct-growth",
          "investedAumPercent": 20.5,
          "rating": 4,
          "return3y": 16.17,
          "return1y": 30.97,
          "return5y": 15.35,
          "logoUrl": "https://assets-netstorage.groww.in/mf-assets/logos/tata_groww.png"
      },
      {
          "name": "ICICI Prudential Banking and Financial Services Direct Plan Growth",
          "searchId": "icici-prudential-banking-and-financial-services-fund-direct-growth",
          "investedAumPercent": 19.27642146,
          "rating": 3,
          "return3y": 15.23,
          "return1y": 26.84,
          "return5y": 11.67,
          "logoUrl": "https://assets-netstorage.groww.in/mf-assets/logos/icici_groww.png"
      },
      {
          "name": "Mirae Asset Banking and Financial Services Fund Direct   Growth",
          "searchId": "mirae-asset-banking-and-financial-services-fund-direct-growth",
          "investedAumPercent": 17.92592462,
          "rating": 4,
          "return3y": 16.53,
          "return1y": 31.27,
          "logoUrl": "https://assets-netstorage.groww.in/mf-assets/logos/mirae_groww.png"
      },
      {
          "name": "Nippon India Banking & Financial Services Fund Direct Growth",
          "searchId": "nippon-india-banking-financial-services-fund-direct-growth",
          "investedAumPercent": 17.5,
          "rating": 4,
          "return3y": 21.7,
          "return1y": 35.95,
          "return5y": 13.67,
          "logoUrl": "https://assets-netstorage.groww.in/mf-assets/logos/reliance_groww.png"
      }
  ],
  "priceData": {
      "nse": {
          "yearLowPrice": 1363.55,
          "yearHighPrice": 1757.5
      },
      "bse": {
          "yearLowPrice": 1363.45,
          "yearHighPrice": 1757.8
      }
  },
  "financialStatement": [
      {
          "title": "Revenue",
          "yearly": {
              "2019": 124107.7909,
              "2020": 147068.2663,
              "2021": 155885.28,
              "2022": 167695.4,
              "2023": 204666.1
          },
          "quarterly": {
              "Dec '22": 54122.84,
              "Mar '23": 57158.84,
              "Jun '23": 61021.29,
              "Sep '23": 107566.62,
              "Dec '23": 115015.51
          }
      },
      {
          "title": "Profit",
          "yearly": {
              "2019": 22445.6129,
              "2020": 27296.2653,
              "2021": 31856.77,
              "2022": 38150.9,
              "2023": 46148.7
          },
          "quarterly": {
              "Dec '22": 12735.43,
              "Mar '23": 12634.01,
              "Jun '23": 12403.25,
              "Sep '23": 17312.38,
              "Dec '23": 17718.0
          }
      },
      {
          "title": "Net Worth",
          "yearly": {
              "2019": 154174.454,
              "2020": 176935.3465,
              "2021": 210442.94,
              "2022": 248046.58,
              "2023": 290297.76
          }
      }
  ],
  "expertRating": {
      "buyCount": 38,
      "sellCount": 1,
      "holdCount": 3,
      "buyPercent": 90.48,
      "sellPercent": 2.38,
      "holdPercent": 7.14
  },
  "similarAssets": {
      "type": "STOCK",
      "size": 10,
      "peerList": [
          {
              "companyHeader": {
                  "searchId": "icici-bank-ltd",
                  "growwCompanyId": "GSTK532174",
                  "isin": "INE090A01021",
                  "industryId": 40101010,
                  "displayName": "ICICI Bank",
                  "shortName": "ICICI Bank",
                  "nseScriptCode": "ICICIBANK",
                  "bseScriptCode": "532174",
                  "isBseTradable": true,
                  "isNseTradable": true,
                  "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK532174.png",
                  "isBseFnoEnabled": false,
                  "isNseFnoEnabled": true
              },
              "nseYearLow": 864.4,
              "nseYearHigh": 1113.55,
              "bseYearLow": 864.45,
              "bseYearHigh": 1113.35,
              "marketCap": 760084.4,
              "peRatio": 17.91,
              "pbRatio": 3.17
          },
          {
              "companyHeader": {
                  "searchId": "kotak-mahindra-bank-ltd",
                  "growwCompanyId": "GSTK500247",
                  "isin": "INE237A01028",
                  "industryId": 40101010,
                  "displayName": "Kotak Mahindra Bank",
                  "shortName": "Kotak Mahindra Bank",
                  "nseScriptCode": "KOTAKBANK",
                  "bseScriptCode": "500247",
                  "isBseTradable": true,
                  "isNseTradable": true,
                  "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK500247.png",
                  "isBseFnoEnabled": false,
                  "isNseFnoEnabled": true
              },
              "nseYearLow": 1667.4,
              "nseYearHigh": 2064.4,
              "bseYearLow": 1666.8,
              "bseYearHigh": 2063.0,
              "marketCap": 354893.58,
              "peRatio": 20.35,
              "pbRatio": 2.95
          },
          {
              "companyHeader": {
                  "searchId": "axis-bank-ltd",
                  "growwCompanyId": "GSTK532215",
                  "isin": "INE238A01034",
                  "industryId": 40101010,
                  "displayName": "Axis Bank",
                  "shortName": "Axis Bank",
                  "nseScriptCode": "AXISBANK",
                  "bseScriptCode": "532215",
                  "isBseTradable": true,
                  "isNseTradable": true,
                  "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK532215.png",
                  "isBseFnoEnabled": false,
                  "isNseFnoEnabled": true
              },
              "nseYearLow": 843.95,
              "nseYearHigh": 1151.85,
              "bseYearLow": 844.05,
              "bseYearHigh": 1151.5,
              "marketCap": 326620.88,
              "peRatio": 24.33,
              "pbRatio": 2.2
          },
          {
              "companyHeader": {
                  "searchId": "indusind-bank-ltd",
                  "growwCompanyId": "GSTK532187",
                  "isin": "INE095A01012",
                  "industryId": 40101010,
                  "displayName": "IndusInd Bank",
                  "shortName": "IndusInd Bank",
                  "nseScriptCode": "INDUSINDBK",
                  "bseScriptCode": "532187",
                  "isBseTradable": true,
                  "isNseTradable": true,
                  "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK532187.png",
                  "isBseFnoEnabled": false,
                  "isNseFnoEnabled": true
              },
              "nseYearLow": 1007.95,
              "nseYearHigh": 1694.5,
              "bseYearLow": 1009.05,
              "bseYearHigh": 1694.35,
              "marketCap": 120705.75,
              "peRatio": 13.92,
              "pbRatio": 2.08
          },
          {
              "companyHeader": {
                  "searchId": "idbi-bank-ltd",
                  "growwCompanyId": "GSTK500116",
                  "isin": "INE008A01015",
                  "industryId": 40101010,
                  "displayName": "IDBI Bank",
                  "shortName": "IDBI Bank",
                  "nseScriptCode": "IDBI",
                  "bseScriptCode": "500116",
                  "isBseTradable": true,
                  "isNseTradable": true,
                  "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK500116.png",
                  "isBseFnoEnabled": false,
                  "isNseFnoEnabled": false
              },
              "nseYearLow": 45.95,
              "nseYearHigh": 98.7,
              "bseYearLow": 45.86,
              "bseYearHigh": 98.7,
              "marketCap": 95395.31,
              "peRatio": 17.85,
              "pbRatio": 2.32
          },
          {
              "companyHeader": {
                  "searchId": "yes-bank-ltd",
                  "growwCompanyId": "GSTK532648",
                  "isin": "INE528G01035",
                  "industryId": 40101010,
                  "displayName": "Yes Bank",
                  "shortName": "Yes Bank",
                  "nseScriptCode": "YESBANK",
                  "bseScriptCode": "532648",
                  "isBseTradable": true,
                  "isNseTradable": true,
                  "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK532648.png",
                  "isBseFnoEnabled": false,
                  "isNseFnoEnabled": false
              },
              "nseYearLow": 15.15,
              "nseYearHigh": 32.85,
              "bseYearLow": 14.1,
              "bseYearHigh": 32.81,
              "marketCap": 72552.6,
              "peRatio": 70.06,
              "pbRatio": 1.78
          },
          {
              "companyHeader": {
                  "searchId": "idfc-bank-ltd",
                  "growwCompanyId": "GSTK539437",
                  "isin": "INE092T01019",
                  "industryId": 40101010,
                  "displayName": "IDFC First Bank",
                  "shortName": "IDFC First Bank",
                  "nseScriptCode": "IDFCFIRSTB",
                  "bseScriptCode": "539437",
                  "isBseTradable": true,
                  "isNseTradable": true,
                  "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK539437.png",
                  "isBseFnoEnabled": false,
                  "isNseFnoEnabled": true
              },
              "nseYearLow": 53.35,
              "nseYearHigh": 100.7,
              "bseYearLow": 53.35,
              "bseYearHigh": 100.74,
              "marketCap": 57040.15,
              "peRatio": 18.85,
              "pbRatio": 1.86
          },
          {
              "companyHeader": {
                  "searchId": "au-small-finance-bank-ltd",
                  "growwCompanyId": "GSTK540611",
                  "isin": "INE949L01017",
                  "industryId": 40101015,
                  "displayName": "AU Small Finance Bank",
                  "shortName": "AU Small Fin Bank",
                  "nseScriptCode": "AUBANK",
                  "bseScriptCode": "540611",
                  "isBseTradable": true,
                  "isNseTradable": true,
                  "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK540611.png",
                  "isBseFnoEnabled": false,
                  "isNseFnoEnabled": true
              },
              "nseYearLow": 553.65,
              "nseYearHigh": 813.4,
              "bseYearLow": 553.9,
              "bseYearHigh": 813.0,
              "marketCap": 47108.69,
              "peRatio": 29.65,
              "pbRatio": 4.0
          },
          {
              "companyHeader": {
                  "searchId": "the-federal-bank-ltd",
                  "growwCompanyId": "GSTK500469",
                  "isin": "INE171A01029",
                  "industryId": 40101010,
                  "displayName": "Federal Bank",
                  "shortName": "The Federal Bank",
                  "nseScriptCode": "FEDERALBNK",
                  "bseScriptCode": "500469",
                  "isBseTradable": true,
                  "isNseTradable": true,
                  "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK500469.png",
                  "isBseFnoEnabled": false,
                  "isNseFnoEnabled": true
              },
              "nseYearLow": 121.0,
              "nseYearHigh": 166.35,
              "bseYearLow": 120.9,
              "bseYearHigh": 166.65,
              "marketCap": 37638.36,
              "peRatio": 9.74,
              "pbRatio": 1.36
          },
         


{
              "companyHeader": {
                  "searchId": "bandhan-bank-ltd",
                  "growwCompanyId": "GSTK541153",
                  "isin": "INE545U01014",
                  "industryId": 40101015,
                  "displayName": "Bandhan Bank",
                  "shortName": "Bandhan Bank",
                  "nseScriptCode": "BANDHANBNK",
                  "bseScriptCode": "541153",
                  "isBseTradable": true,
                  "isNseTradable": true,
                  "logoUrl": "https://assets-netstorage.groww.in/stock-assets/logos/GSTK541153.png",
                  "isBseFnoEnabled": false,
                  "isNseFnoEnabled": true
              },
              "nseYearLow": 173.15,
              "nseYearHigh": 272.0,
              "bseYearLow": 173.45,
              "bseYearHigh": 272.0,
              "marketCap": 31800.54,
              "peRatio": 10.66,
              "pbRatio": 1.53
          }
      ]
  }
}