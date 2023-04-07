import React from "react";
import ReactDOM from "react-dom/client";
const Card = (props) => {
  const { resData } = props;
  console.log(resData.data.type);
  return (
    <div className="card  hover:shadow-xl" style={{ width: "250px" }} id="card">
      <img
        className="card-img-top"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.data.cloudinaryImageId
        }
        alt="this is the image"
      />
      <div className="card-body">
        <h5 className="card-title restaurant-name">{resData.data.name}</h5>
        <h4 className="restaurant-cuisines" style={{ marginTop: "15px" }}>
          {resData.data.cuisines.join(",")}
        </h4>
        <h4 className="restaurant-rating" style={{ marginTop: "15px" }}>
          {resData.data.avgRating}⭐
        </h4>
        <h4 className="restaurant-cost">₹{resData.data.costForTwo / 100}</h4>
        <a href="#" className="btn btn-success" style={{ marginTop: "15px" }}>
          Order Now!
        </a>
      </div>
    </div>
  );
};
const resObj = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "437445",
      name: "House Of Blends",
      uuid: "6376298b-3b0a-403b-88be-9a2b5eef1606",
      city: "104",
      area: "Wright Town",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ca0cc5f989f556022662be8ad843db9b",
      cuisines: ["Chinese", "Continental"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: "house-of-blends-jab_west-jab_west",
        city: "jabalpur",
      },
      cityState: "104",
      address:
        "32 & 102, 1172A, ATUL VIHAR, COMMERCIAL WING, WRIGHT TOWN Jabalpur, , Madhya Pradesh, 482001",
      locality: "Atul Vihar",
      parentId: 263993,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6282131~p=16~eid=00000187-4ab0-9042-0344-5eb300a7106f",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "437445",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "427124",
      name: "Behrouz Biryani",
      uuid: "f80653ea-972d-4daa-a705-6135d17fa80e",
      city: "104",
      area: "Ganjipura",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "dvoodb1ez3p1v3h2tjoa",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Persian",
        "Desserts",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "behrouz-biryani-bhavartal-garden-road-jab-south",
        city: "jabalpur",
      },
      cityState: "104",
      address:
        "Shop No 324, Bhavartal Garden Road, Russel Chowk, Napier Town, Jabalpur, Madhya Pradesh 482001",
      locality: "Russel Chowk",
      parentId: 1803,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "427124",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "226740",
      name: "The Oven Classics(Cantt)",
      uuid: "9a688020-7220-458c-812d-162e1af0a99e",
      city: "104",
      area: "South Civil Lines",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "eot2nvcqou0y2wjn63jq",
      cuisines: ["Desserts", "Italian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 2.0999999046325684,
      slugs: {
        restaurant: "the-oven-classics-ganjipura-ganjipura",
        city: "jabalpur",
      },
      cityState: "104",
      address:
        "10 Carvas Comples, Station Road, South Civil Lines, Civil Lines, Jabalpur",
      locality: "Station Road",
      parentId: 212180,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6271799~p=19~eid=00000187-4ab0-9042-0344-5eb400a7137e",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "226740",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 2.0999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "101277",
      name: "New Indian Coffee House",
      uuid: "5ad53f00-0538-4dd3-bc17-ee9d62e6779e",
      city: "104",
      area: "Napier Town",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "rmo9dunot5xryf9tehcy",
      cuisines: ["Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 0.4000000059604645,
      slugs: {
        restaurant: "new-india-coffee-house-napier-town-ganjipura",
        city: "jabalpur",
      },
      cityState: "104",
      address: "OPPOSITE JAYANTI CINEMA,NAPIER TOWN,Jabalpur",
      locality: "Jayanti Cinema Road",
      parentId: 146803,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "101277",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.4000000059604645,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "427131",
      name: "Pure Veg Meals by Lunchbox",
      uuid: "86bcd78a-9737-4348-8107-b7de3d21c773",
      city: "104",
      area: "Ganjipura",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "ikgvgjavt2fzzs7ltl9t",
      cuisines: ["North Indian", "Desserts", "Biryani"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant:
          "navaratri-meals-by-lunchbox-bhavartal-garden-road-jab-south",
        city: "jabalpur",
      },
      cityState: "104",
      address:
        "Shop No 324, Bhavartal Garden Road, Russel Chowk, Napier Town, Jabalpur, Madhya Pradesh 482001",
      locality: "Russel Chowk",
      parentId: 21938,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "427131",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "427129",
      name: "The Good Bowl",
      uuid: "55525bdf-86f7-416a-8289-dde7102054a5",
      city: "104",
      area: "Ganjipura",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "tqluaetavka8eeg1m36q",
      cuisines: [
        "North Indian",
        "Biryani",
        "Chinese",
        "Asian",
        "Pastas",
        "Desserts",
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "the-good-bowl-bhavartal-garden-road-jab-south",
        city: "jabalpur",
      },
      cityState: "104",
      address:
        "Shop No 324, Bhavartal Garden Road, Russel Chowk, Napier Town, Jabalpur, Madhya Pradesh 482001",
      locality: "Russel Chowk",
      parentId: 7918,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "427129",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "149633",
      name: "Munna Hotel - Wright Town",
      uuid: "575de82e-d526-44c9-a42c-f5f692828fc5",
      city: "104",
      area: "WrightTown Stadium",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "xcawzmkyyhancbt7j87p",
      cuisines: ["North Indian", "Thalis"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "munna-hotel-wrighttown-stadium-ganjipura",
        city: "jabalpur",
      },
      cityState: "104",
      address: "Shop No.3, Wright Town, Stadium, Gow Mata Chowk, Jabalpur",
      locality: "Stadium Market",
      parentId: 141901,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "149633",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.8",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "468050",
      name: "ANURADHA's CAKES",
      uuid: "70068829-400e-4100-973c-4b166c2d839e",
      city: "104",
      area: "Shakti Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "amico2c9gyp16kbdwm69",
      cuisines: ["Bakery"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 3.799999952316284,
      slugs: {
        restaurant: "anuradha's-cakes-jab_west-jab_west",
        city: "jabalpur",
      },
      cityState: "104",
      address:
        "1880, premnagar, Madan Mahal, Jabalpur, Jabalpur, Jabalpur, Madhya Pradesh - 482001",
      locality: "Madan Mahal",
      parentId: 281173,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6230669~p=25~eid=00000187-4ab0-9042-0344-5eb600a71955",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "468050",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 3.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "338692",
      name: "Jawahar momos king",
      uuid: "40a0e87f-7a2c-442b-9ff5-e3a28b340286",
      city: "104",
      area: "Khatik Mohalla",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "mrua6amicf9kuzaye8fr",
      cuisines: ["Bakery", "Pastas", "Chinese"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: "jawahar-momos-king-jab_north-jab_north",
        city: "jabalpur",
      },
      cityState: "104",
      address: "Jawahar Hotel, Khatik Mohalla, Jabalpur, Madhya Pradesh, India",
      locality: "Belbaag-Gurandi Road",
      parentId: 109912,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "338692",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "472787",
      name: "Bharat Samosa",
      uuid: "b1824266-b055-4f48-ad78-fef190aef831",
      city: "104",
      area: "Wright Town",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "tuckcrgsrkjij3jxmrdl",
      cuisines: ["Snacks"],
      tags: [],
      costForTwo: 5000,
      costForTwoString: "₹50 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.5,
      slugs: {
        restaurant: "bharat-samosa-jab-south-jab-south",
        city: "jabalpur",
      },
      cityState: "104",
      address:
        "Malaviya Chowk, Awadhpuri, Ganjipura, Jabalpur, Jabalpur, Jabalpur, Jabalpur, Madhya Pradesh - 482001",
      locality: "Malaviya Chowk",
      parentId: 284030,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "472787",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "575246",
      name: "Veg Daawat by Behrouz",
      uuid: "545596e6-6ecc-40c5-b656-cadb068a5158",
      city: "104",
      area: "Ganjipura",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "twrgfyppj2gjhddvw6yc",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Persian",
        "Desserts",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "veg-daawat-by-behrouz-bhavartal-garden-road-jab-south",
        city: "jabalpur",
      },
      cityState: "104",
      address:
        "Shop No 324, Bhavartal Garden Road, Russel Chowk, Napier Town, Jabalpur, Madhya Pradesh 482001",
      locality: "Russel Chowk",
      parentId: 344904,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 900,
        message: "",
        title: "Delivery Charge",
        amount: "900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "575246",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light shadow-2xl header sticky-top">
      <img
        className="logo-image-navbar"
        src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
      ></img>
      <ul className="navbar-nav flex flex-row nav-headings">
        <li class="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#search" class="nav-link">
            Items
          </a>
        </li>
        <li className="nav-item">
          <a href="#footer" class="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <img
            className="cart-img"
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
          ></img>
        </li>
      </ul>
    </nav>
  );
};

const Carousel = () => {
  return (
    <div className="carousel bg-slate-900" id="carousel">
      <div className="image-container hover:border-neutral-300">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
          className="carousel-image"
        ></img>
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/tgnvusbs3fnzz7xupeno"
          className="carousel-image"
        ></img>
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/nhubtkw7dukg3ukcmpam"
          className="carousel-image"
        ></img>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer " id="footer">
      <img
        className="footer-image"
        src="https://cdn-icons-png.flaticon.com/512/2504/2504926.png"
      ></img>
      <img
        className="footer-image"
        src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png"
      ></img>
      <img
        className="footer-image"
        src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"
      ></img>
      <img
        className="footer-image"
        src="https://cdn-icons-png.flaticon.com/512/2504/2504957.png"
      ></img>
    </div>
  );
};
const Search = () => {
  return (
    <div
      className="search-box"
      style={{ paddingTop: "2%", paddingBottom: "2%", paddingLeft: "1%" }}
      id="search"
    >
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          style={{ marginLeft: "10px" }}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};
const Final = () => {
  return (
    <div className="final">
      <Navbar />
      <Carousel />
      <Search />
      <div
        className="card-container"
        style={{
          paddingLeft: "20px",
          paddingRight: "15px",
          background: "#f8fafc",
        }}
      >
        <Card resData={resObj[0]} />
        <Card resData={resObj[1]} />
        <Card resData={resObj[2]} />
        <Card resData={resObj[3]} />
        <Card resData={resObj[4]} />
        <Card resData={resObj[5]} />
        <Card resData={resObj[6]} />
        <Card resData={resObj[7]} />
        <Card resData={resObj[8]} />
        <Card resData={resObj[9]} />
        <Card resData={resObj[10]} />
      </div>
      <Footer />
      <h1 style={{textAlign:"center", fontSize:"1.5rem",marginTop:"-5%",marginBottom:"5%"}}>contact us</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Final />);
