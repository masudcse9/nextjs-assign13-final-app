"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [json, setJson] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/json");
      const data = await res.json();
      console.log(data);
      setJson(data);
    })();
  }, []);

  return (
    <div className="pr-24 pl-24">
      <h1 className="font-semibold">JSON</h1>
      <p>{ JSON.stringify(json) }</p>
    </div>
  );
};

export default page;
