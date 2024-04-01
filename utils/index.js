import { useLayoutEffect, useEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ISOToDate(date) {
  if (date) {
    let convertDate = new Date(date);
    return (
      convertDate.getFullYear() +
      "-" +
      (convertDate.getMonth() + 1) +
      "-" +
      convertDate.getDate()
    );
  }
}

export function getRandomImage() {
  const randomImageUrl = [
    "/react-portfolio-template/app/assets/yaspeez-Mockup.webp",
    "/react-portfolio-template/app/assets/calculatrice.png",
    "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1657295791913-5074c912398e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80",
  ];
  return randomImageUrl[Math.floor(Math.random() * randomImageUrl.length)];
}
