import { BiFootball, BiSolidCricketBall } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GiCardKingDiamonds, GiHorseHead, GiHound } from "react-icons/gi";
import { IoIosJet, IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { IoTennisball } from "react-icons/io5";
import { GiCirclingFish } from "react-icons/gi";
import { icons } from "antd/es/image/PreviewGroup";

export const bannerImages = [{
    imgPath:"assets/images/banner/banner-1-unicon-SCJtuYQ9.jpg",
    alt:"Banner Img 1"
},

{
    imgPath:"assets/images/banner/banner-2-unicon-_c1DIV87.jpg",
     alt:"Banner Img 2"
},
{
    imgPath:"assets/images/banner/banner-3-unicon-ggHzAQpn.jpg",
     alt:"Banner Img 3"
},
{
    imgPath:"assets/images/banner/banner-4-unicon-B1kiJQ_E.jpg",
     alt:"Banner Img 4"
},
{
    imgPath:"assets/images/banner/banner-5-unicon-DgIV6Wle.jpg",
     alt:"Banner Img 5"
},
{
  imgPath:"assets/images/banner/banner-6-unicon-CBpczhu1.jpg",
   alt:"Banner Img 5"
},
]
export const siderbarDrawer = [
 
  {
    title: "Cricket",
      icon: <BiSolidCricketBall fill="#8B191B" size={20}/>,
     routing: "/sports-page/cricket"
  },
  {
    title: "Football",
      icon: <BiFootball  size={20}/>,
   routing: "/sports-page/soccer"
  },
  {
    title: "Tennis",
      icon: <IoTennisball fill="#7FBA42" size={20}/>,
     routing: "/sports-page/tennis"
  },
  {
    title: "Horse Racing",
      icon: <img alt="horse" src="/icons/horseicon.svg" width={20} height={20}/>,
    routing: "/sports-page/Horse-racing"
  },
  {
    title: "Greyhound Racing",
      icon: <img alt="horse" src="/icons/greyhound.svg" width={20} height={20}/>,
    routing: "/sports-page/Greyhound-Racing"
  },
  {
    title: "Indian Card Games",
      icon: <img alt="horse" src="/icons/card.svg" width={20} height={20}/>,
      routing: "/sports-page/indian-card-games"
  },
  {
    title: "Live Casino",
      icon: <img alt="horse" src="/icons/casino.svg" width={20} height={20}/>,
     routing: "/casino-lobby/casino"
  },
  {
    title: "Aviator",
      icon:<img alt="horse" src="/icons/aviator.svg" width={20} height={20}/>,
       routing: "/aviator"
  },
  {
    title: "Slot Games",
      icon: <img alt="horse" src="/icons/slot.svg" width={20} height={20}/>,
routing: "/casino-lobby/slot-games"
  },
 
  ]
export const socialLinks = [{
      title:"",
      icon: <FaTelegramPlane size={25} fill="var(--color-quaternary)" />
    },
    {
      title:"",
      icon: <IoLogoWhatsapp size={25} fill="var(--color-quaternary)"/>
    },
    {
      title:"",
      icon: <IoIosMail size={30} fill="var(--color-quaternary)"/>
    },
    {
      title:"",
      icon: <FaFacebook size={25} fill="var(--color-quaternary)"/>
    },
    {
      title:"",
      icon: <BsInstagram size={25} fill="var(--color-quaternary)"/>
    },
  ]

export const carousalImages = [
{
  title1: 'Evolution',
  bgUrl1: 'assets/images/gaming/Evolution-1705911275808.jpeg',
  iconUrl1:
    'https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format',
  altText1: 'Evolution-image',
  title2: 'Sportsbook',
  bgUrl2: 'assets/images/gaming/Sportsbook-1705911352020.jpeg',
  iconUrl2:
    'https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format',
  altText2: 'Evolution-image',
  title3: 'Live Casinos',
  bgUrl3: 'assets/images/gaming/LiveCasinos-1705911704269.jpeg',
  iconUrl3:
    'https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format',
  altText3: 'Evolution-image',
  title4: 'E-Cricket',
  bgUrl4: 'assets/images/gaming/e-Cricket-1705911799120.jpeg',
  iconUrl4:
    'https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format',
  altText4: 'Evolution-image',
},
{
  title1: 'Multiplayer Games',
  bgUrl1: 'assets/images/gaming/MultiplayerGames-1705912077487.jpeg',
  iconUrl1:
    'https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format',
  altText1: 'Evolution-image',
  title2: 'Slot Games',
  bgUrl2: 'assets/images/gaming/SlotGames-1705912015298.jpeg',
  iconUrl2:
    'https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format',
  altText2: 'Evolution-image',
  title3: 'Fishing Games',
  bgUrl3: 'assets/images/gaming/Fishinggames-1705912252625.jpeg',
  iconUrl3:
    'https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format',
  altText3: 'Evolution-image',
  title4: 'Color Game',
  bgUrl4: 'assets/images/gaming/SlotGames-1705912015298.jpeg',
  iconUrl4:
    'https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format',
  altText4: 'Evolution-image',
},
// Add more button objects here
];

export  const cardGames = [{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-31.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
alt:"Banner Img 1"
},

{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-27.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 2"
},
{
imgPath:"https://auraimgs.imgix.net/indiangamesposters-04.webp?q=65&amp;amp; w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 3"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-02.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 4"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-25.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-26.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-23.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-15.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-24.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-09.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-12.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-11.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-13.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-29.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},

{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-22.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},{
imgPath:"https://Playfunexch.com/assets/images/casino/livecasino/Casino+Meter.webp",
 alt:"Banner Img 5"
},

{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-07.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-20.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-01.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-05.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-08.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-10.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-06.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://Playfunexch.com/assets/images/casino/livecasino/The+Trap.webp",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-03.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-08.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-19.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://auraimgs.imgix.net/indian%20games%20posters-17.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
]

export const popularGames = [{
imgPath:"https://luckmedia.link/aes_baccarat_classic/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
alt:"Banner Img 1"
},

{
imgPath:"https://luckmedia.link/aes_dragontiger/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 2"
},
{
imgPath:"https://luckmedia.link/aes_thai_hi_lo/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 3"
},
{
imgPath:"https://luckmedia.link/spb_aviator/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 4"
},
{
imgPath:"https://luckmedia.link/jil_royal_fishing/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://luckmedia.link/dwg_baccarat_evolution_pairs/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},{
imgPath:"https://luckmedia.link/evo_speed_baccarat_n/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},{
imgPath:"https://luckmedia.link/evo_deal_or_no_deal/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},{
imgPath:"https://luckmedia.link/rtg_aztec_spins/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
 alt:"Banner Img 5"
},
{
imgPath:"https://luckmedia.link/sms_jetx/thumb_3_4_custom.webp?q=65&amp;w=600&amp;px=auto&amp;auto=format",
 alt:"Banner Img 5"
},
]

export const casinoProviders = [{
  imgPath:"assets/casiono-provider-img/1x2-gamimg.svg",
  alt:"Banner Img 1"
  },
  
  {
  imgPath:"assets/casiono-provider-img/7mojos.svg",
   alt:"Banner Img 2"
  },
  {
  imgPath:"assets/casiono-provider-img/ad-lunam.svg",
   alt:"Banner Img 3"
  },
  {
  imgPath:"https://luckmedia.link/providers/aux/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
   alt:"Banner Img 4"
  },
  {
  imgPath:"https://luckmedia.link/providers/btr/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
   alt:"Banner Img 5"
  },
  {
  imgPath:"/assets/Bet_Games-DQk1EkcT.svg",
   alt:"Banner Img 5"
  },{
  imgPath:"https://luckmedia.link/providers/btg/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
   alt:"Banner Img 5"
  },{
  imgPath:"https://luckmedia.link/providers/bng/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
   alt:"Banner Img 5"
  },{
  imgPath:"/assets/dragonsoft-CjyAhXve.svg",
   alt:"Banner Img 5"
  },
  {
  imgPath:"/assets/elk-provider-B53cQllv.svg",
   alt:"Banner Img 5"
  },
  {
    imgPath:"https://luckmedia.link/providers/end/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
     alt:"Banner Img 5"
    },
    {
      imgPath:"https://luckmedia.link/providers/evo/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
       alt:"Banner Img 5"
      },

      {
        imgPath:"/assets/evo-play-B4a-CkvN.svg",
         alt:"Banner Img 5"
        },
  ]


 export const headerMenu = [
  
    { title: "Cricket", routing: "/sports-page/cricket" },
    { title: "Football", routing: "/sports-page/soccer" },
    { title: "Tennis", routing: "/sports-page/tennis" },
    { title: "Horse Racing", routing: "/sports-page/Horse-Racing" },
    { title: "GreyHound Racing", routing: "/sports-page/Greyhound-Racing" },
    { title: "Aura", routing: "/aura" },
    { title: "Aviator", routing: "/aviator" },
    { title: "Live Casino", routing: "/casino-lobby/casino" },
    { title: "Slots", routing: "/casino-lobby/slot-games" },
    { title: "Crash Games", routing: "/casino-lobby/slot-games/Crash" },
    { title: "Fishing Games", routing: "/casino-lobby/slot-games/Shooting" },
  ];

  export const mobileHeaderMenu = [
  
    
    { title: "Aviator", routing: "/aviator",icon:  <img src="/icons/aviator.svg" alt="My Icon" width={20} height={20} />
     },
    { title: "Live Casino", routing: "/casino-lobby/casino" ,icon:  <img src="/icons/casino.svg" alt="My Icon" width={20} height={20} />},
    { title: "Slots", routing: "/casino-lobby/slot-games", icon: <img src="/icons/slot.svg" alt="My Icon" width={20} height={20} />},
    { title: "Crash Games", routing: "/casino-lobby/slot-games/Crash" ,icon: <img src="/icons/aviator.svg" alt="My Icon" width={20} height={20} />},
    { title: "Fishing Games", routing: "/casino-lobby/slot-games/Shooting" ,icon:<GiCirclingFish size={20} fill="#c10931"/>},
  ];
  export const casinoCards =[{
    img:"/assets/1x2gaming-D40uNj3a.svg"
  },
{
 img:"/assets/7mojos-Py1bIlTK.svg" 
},{
  img:"/assets/ad-lunam-b7fE7vWv.svg"
},
{
  img:"https://luckmedia.link/providers/aux/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/btr/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/Bet_Games-DQk1EkcT.svg"
},
{
  img:"https://luckmedia.link/providers/btg/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/blg/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/bng/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/cqc/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},

{
  img:"/assets/dragonsoft-CjyAhXve.svg"
},
{
  img:"/assets/elk-provider-B53cQllv.svg"
},
{
  img:"https://luckmedia.link/providers/end/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/evo/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/evo-play-B4a-CkvN.svg"
},
{
  img:"https://luckmedia.link/providers/ezg/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/fa-chai-D6An2gCp.svg"
},
{
  img:"https://luckmedia.link/providers/fnt/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/fgs/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/galaxsys-DOOEwUo_.svg"
},
{
  img:"/assets/gameart-C8h1_IIc.svg"
},
{
  img:"/assets/gamingCorps-CksWDq3n.svg"
},
{
  img:"https://luckmedia.link/providers/gmz/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/hbn/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/hcw/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/ho-gaming-CAWkGdU2.svg"
},
{
  img:"/assets/irondogstudio-qDFHAY_U.svg"
},
{
  img:"/assets/kalamba-games-TZ5_nARA.svg"
},
{
  img:"https://luckmedia.link/providers/kir/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/mnn/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/mbl/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/ntn/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/net-game-entertainment-BL5nhYPW.svg"
},
{
  img:"https://luckmedia.link/providers/nlc/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/omi-gaming-C9z3wx9J.svg"
},
{
  img:"/assets/onetouch-gaming-BSAfsh0z.svg"
},
{
  img:"https://luckmedia.link/providers/onl/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/png/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/plt/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/pnt/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/prospect-gaming-B0R8Xne-.svg"
},
{
  img:"https://luckmedia.link/providers/psh/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/qps/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/rtg/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/reg/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/revolver-gaming-D-XDe58E.svg"
},
{
  img:"/assets/rival-powered-C0NPKyGi.svg"
},
{
  img:"/assets/rtg-slots-D2KdxDUZ.svg"
},
{
  img:"/assets/SA-Gaming-BUOAf51M.svg"
},
{
  img:"/assets/skywind-gaming-DZg2XH3X.svg"
},
{
  img:"/assets/slotmill-games-CzuoVJKU.svg"
},
{
  img:"/assets/SpearheadStudios-CmYqcAbu.svg"
},
{
  img:"https://luckmedia.link/providers/spb/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"https://luckmedia.link/providers/tdk/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/Triple-PG-DlqaSDFS.svg"
},
{
  img:"/assets/turbo-games-BaS9dDhA.svg"
},
{
  img:"/assets/vivo-gaming-DgqeW9vk.svg"
},
{
  img:"https://luckmedia.link/providers/wzd/logo_3_2_cl_dark.svg?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format"
},
{
  img:"/assets/woohoo-gaming-BXurIsks.svg"
}
]

export const baccarats=[{
  img:"https://client.qtlauncher.com/images/?id=EVO-always8baccarat_en_US&amp&type=logo-square&amp;version=1731473904011"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-bacbo_en_US&amp&type=logo-square&amp;version=1678359207526"
},
{
  img:"https://client.qtlauncher.com/images/?id=BTV-baccarat_en_US&amp&type=logo-square&amp;version=1662976207439"
},
{
 img:"https://client.qtlauncher.com/images/?id=EVO-baccarat_en_US&amp&type=logo-square&amp;version=1678359251397" 
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-baccarat_en_US&amp&type=logo-square&amp;version=1716211287452"
},
{
  img:"https://client.qtlauncher.com/images/?id=L88-baccarat1_en_US&amp&type=logo-square&amp;version=1727968121327"
},
{
  img:"https://client.qtlauncher.com/images/?id=L88-baccarat3_en_US&amp&type=logo-square&amp;version=1727875420320"
},
{
  img:"https://client.qtlauncher.com/images/?id=L88-baccarat5_en_US&amp&type=logo-square&amp;version=1727875500599"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-baccarata_en_US&amp&type=logo-square&amp;version=1726028817311"
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-baccarata_en_US&amp&type=logo-square&amp;version=1717130391537"
}
]

export const roulette=[{
  img:"https://client.qtlauncher.com/images/?id=VGL-americanautoroulette_en_US&amp&type=logo-square&amp;version=1701672928302"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-americanroulette_en_US&amp&type=logo-square&amp;version=1678358704943"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-autolightningroulette_en_US&amp&type=logo-square&amp;version=1701277574098"
},
{
  img:"https://client.qtlauncher.com/images/?id=BTL-autoroulette_en_US&amp&type=logo-square&amp;version=1727274726306"
},
{
  img:"https://client.qtlauncher.com/images/?id=BTL-autoroulette_en_US&amp&type=logo-square&amp;version=1727274726306"
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-automaticroulette_en_US&amp&type=logo-square&amp;version=1716210438504"
},
{
  img:"https://client.qtlauncher.com/images/?id=L88-autoroulette1_en_US&amp&type=logo-square&amp;version=1727875079920"
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-autoroulette1_en_US&amp&type=logo-square&amp;version=1716214180331"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-autoroulette_en_US&amp&type=logo-square&amp;version=1726028196831"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-autoroulettelapartage_en_US&amp&type=logo-square&amp;version=1702450712159"
}
]

export const andarbhar =[{
  img:"https://client.qtlauncher.com/images/?id=EZU-andarbahar_en_US&amp&type=logo-square&amp;version=1678476979546"
},
{
  img:"https://client.qtlauncher.com/images/?id=L88-andarbahar1_en_US&amp&type=logo-square&amp;version=1727874820295"
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-casinomarinaandarbahar_en_US&amp&type=logo-square&amp;version=1685691014988"
},
{
  img:"https://client.qtlauncher.com/images/?id=SAG-mandarbahar_en_US&amp&type=logo-square&amp;version=1702895346689"
},
{
  img:"https://client.qtlauncher.com/images/?id=EVO-superandarbahar_en_US&amp&type=logo-square&amp;version=1678388339595"
},
{
  img:"https://client.qtlauncher.com/images/?id=EZU-ultimateandarbahar_en_US&amp&type=logo-square&amp;version=1669146546695"
}]


