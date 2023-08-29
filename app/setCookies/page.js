"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const page = async () => {
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/setCookies");
      const data = await res.json();
    })();
  }, []);

  return (
    <div className="p-24 text-center">
      <p>Successfully cookies set.</p>
      <Link href={"showCookies"}>
        <button className="btn btn-primary border text-cyan-50 ">
          Show Cookies
        </button>
      </Link>
    </div>
  );
};

export default page;
