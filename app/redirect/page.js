"use client";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/redirect");
      //const data = await res.json();
    })();
  }, []);

  return (
    <div className="pr-24 pl-24">
      <h1 className="font-semibold">Redirect Page</h1>
      <p>Successfully redirect with api</p>
    </div>
  );
};

export default page;
