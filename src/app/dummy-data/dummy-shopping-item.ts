import { ShoppingItem } from '../models/shopping-item.model';

export const DUMMY_SHOPPING_ITEMS: ShoppingItem[] = [
    {
        id: 1,
        name: "Apple TV",
        description: "color black, 64GB memory, Apple A15 Bionic",
        imgFile: "appleTv.png",
        categories: ["computers", "home office"],
        price: 3000
    },
    {
        id: 2,
        name: "Apple Watch 10 46mm",
        description: "color black, 46mm, NFC, GPS, Always-on display",
        imgFile: "appleWatcg.png",
        categories: ["smartwatches", "lifestyle"],
        price: 2199
    },
    {
        id: 3,
        name: "iMAC",
        description: "color pink, 64GB RAM, 512GB ROM, 23.5 inch",
        imgFile: "iMac.png",
        categories: ["computers", "home office"],
        price: 6200
    },
    {
        id: 4,
        name: "iPhone 12",
        description: "color green, 4GB RAM, 64GB ROM, 2 cameras, 6.1 inch",
        imgFile: "ip12.png",
        categories: ["smartphones"],
        price: 2200
    },
    {
        id: 5,
        name: "iPhone 16 Pro Max",
        description: "color black, 8GB RAM, 256GB ROM, 3 cameras, 6.7 inch",
        imgFile: "ip16pm.png",
        categories: ["smartphones"],
        price: 6500
    },
    {
        id: 6,
        name: "iPad Pro",
        description: "color silver, 8GB RAM, 256GB ROM, OLED Ultra Retina XDR, 11 inch",
        imgFile: "iPadPro.png",
        categories: ["tablets"],
        price: 4999
    },
    {
        id: 7,
        name: "Macbook Air",
        description: "color silver, 8GB RAM, 512GB ROM, Apple M3, 13.6 inch",
        imgFile: "macbookAir.png",
        categories: ["laptops", "home office"],
        price: 4999
    },
];
