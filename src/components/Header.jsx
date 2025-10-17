import React, { useState } from "react";

/**
 * Header.jsx
 * Simple accessible header with nav list and responsive toggle.
 *
 * Usage:
 * <Header />
 * <Header items={[{ id: 'home', label: 'Home', href: '/' }, ...]} logo="My Site" />
 */
  


const defaultItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "name", label: "contact", href: "#contact"},
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
];

export default function Header({ items = defaultItems, logo = "My Portfolio" }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="header-inner">
                <a className="brand" href="/">
                    {logo}
                </a>

                <button
                    className="nav-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    onClick={() => setOpen((s) => !s)}
                >
                    <span className="hamburger" aria-hidden="true" />
                </button>

                <nav className={`main-nav ${open ? "open" : ""}`} aria-label="Main navigation">
                    <ul>
                        {items.map((it) => (
                            <li key={it.id}>
                                <a href={it.href} onClick={() => setOpen(false)}>
                                    {it.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <style>{`
                .site-header {
                    background: #ffffff;
                    border-bottom: 1px solid #e6e6e6;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                }
                .header-inner {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0.75rem 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .brand {
                    font-weight: 700;
                    color: #111827;
                    text-decoration: none;
                    font-size: 1.125rem;
                }

                /* Nav */
                .main-nav ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
                .main-nav a {
                    text-decoration: none;
                    color: #374151;
                    padding: 0.25rem 0.5rem;
                    border-radius: 6px;
                    transition: background-color 120ms ease, color 120ms ease;
                }
                .main-nav a:hover,
                .main-nav a:focus {
                    background: #f3f4f6;
                    color: #111827;
                    outline: none;
                }

                /* Toggle button (mobile) */
                .nav-toggle {
                    background: transparent;
                    border: 0;
                    display: inline-flex;
                    width: 40px;
                    height: 40px;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
                .hamburger {
                    width: 18px;
                    height: 2px;
                    background: #111827;
                    display: inline-block;
                    position: relative;
                }
                .hamburger::before,
                .hamburger::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #111827;
                }
                .hamburger::before {
                    top: -6px;
                }
                .hamburger::after {
                    bottom: -6px;
                }

                /* Responsive: collapse nav on small screens */
                @media (max-width: 720px) {
                    .main-nav {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 56px;
                        background: #ffffff;
                        border-bottom: 1px solid #e6e6e6;
                        transform-origin: top;
                        transform: scaleY(0);
                        transition: transform 180ms ease;
                    }
                    .main-nav.open {
                        transform: scaleY(1);
                    }
                    .main-nav ul {
                        flex-direction: column;
                        padding: 0.5rem 1rem;
                        gap: 0.25rem;
                    }
                    .nav-toggle {
                        display: inline-flex;
                    }
                }

                /* On larger screens hide toggle and show nav inline */
                @media (min-width: 721px) {
                    .nav-toggle {
                        display: none;
                    }
                    .main-nav {
                        position: static;
                        transform: none;
                    }
                }
            `}</style>
        </header>
    );
}