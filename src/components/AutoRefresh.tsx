"use client";

import { useEffect } from "react";

export default function AutoRefresh() {
  const timeRefetch = 60 * 1000 * 3;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, timeRefetch);

    return () => clearTimeout(timer);
  }, [timeRefetch]);

  return null;
}
