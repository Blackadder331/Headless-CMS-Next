"use client";
import React from "react";
import Link from "next/link";
import Style from "../styles/header.module.css";
import { useEffect, useState } from "react";
import { graphCms } from "../lib/graphCms";

const Header = () => {
  const [categoryLinks, setCategoryLinks] = useState([]);
  // useEffect(async () => {
  //   const { categories } = await graphCms.request(`
  //   query MyQuery {
  //     categories {
  //       color {
  //         css
  //       }
  //       name
  //     }
  //   }
  //   `);
  //   setCategoryLinks(categories);
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const { categories } = await graphCms.request(`
        query MyQuery {
          categories {
            color {
              css
            }
            name
          }
        }
      `);
      setCategoryLinks(categories);
    }
    fetchData();
  }, []);
  return (
    <header className={Style.header}>
      <div className={`container ${Style.container}`}>
        <Link href="/" className={Style.logo}>
          Sharp Design Corp.
        </Link>
        <ul>
          {categoryLinks.map((link) => (
            <li key={link.name}>
              <Link href={`/${link.name}`} style={{ color: link.color.css }}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
