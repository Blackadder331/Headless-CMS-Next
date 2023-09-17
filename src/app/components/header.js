"use client";
import React from "react";
import Link from "next/link";
import Style from "../styles/header.module.css";
import { useEffect, useState } from "react";
import { graphCms } from "../lib/graphCms";

const Header = () => {
  const [categoryLinks, setCategoryLinks] = useState([]);

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("Is menu open:", isMenuOpen); // Debugging line
  
  return (
    <header className={Style.header}>
      <div className={`container ${Style.container}`}>
        <Link href="/" className={Style.logo}>
          Sharp Design Corp.
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={Style.menuButton}
        >
          ☰
        </button>


       <nav className={Style.nav}>
          <ol className={Style.navLinks}>
            {categoryLinks.map((link) => (
              <li key={link.name}>
                <Link href={`/${link.name}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {isMenuOpen && (
          <div className={Style.mobileNav}>
            <ol>
              {categoryLinks.map((link) => (
                <li key={link.name}>
                  <Link href={`/${link.name}`} /* style={{ color: link.color.css }} */>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
               
    </header>
  );
};

export default Header;
