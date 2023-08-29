"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/getCookies");
      const data = await res.json();
      console.log(data.all);
      setCookies(data.all);
    })();
  }, []);

  return (
    <div className="pr-24 pl-24">
      <h1 className="font-semibold">Show Cookies</h1>
      <p>
        {cookies.map((data, index) => {
          return (
            <div>
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    {data.name}
                  </div>
                  <div className="collapse-content">
                    <p>{data.value}</p>
                  </div>
                </div>
                
              </div>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default page;
