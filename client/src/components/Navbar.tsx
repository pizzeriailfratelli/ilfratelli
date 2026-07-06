/* =====================================================
   NAVBAR — Il Fratelli
   Dark editorial navbar, transparent → dark on scroll
   Logo: il-fratelli-logo-new, nav links uppercase DM Sans
   ===================================================== */

import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goTo = (path: string) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el2 = document.getElementById(id);
        el2?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 300ms ease, box-shadow 300ms ease",
          background: scrolled
            ? "rgba(13,13,13,0.97)"
            : "transparent",
          boxShadow: scrolled
            ? "0 1px 0 rgba(245,240,232,0.08)"
            : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => goTo("/")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Il Fratelli - Inicio"
          >
            <img
              src="/manus-storage/il-fratelli-logo-transparent_e35319ab.png"
              alt="Il Fratelli"
              style={{
                height: "52px",
                width: "52px",
                objectFit: "contain",
              }}
            />
          </button>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
            className="hidden md:flex"
          >
            <button className="nav-link" onClick={() => goTo("/")}>Inicio</button>
            <button className="nav-link" onClick={() => goTo("/productos")}>Productos</button>
            <button className="nav-link" onClick={() => goTo("/nosotros")}>Nosotros</button>
            <button className="nav-link" onClick={() => scrollToSection("contacto")}>Contacto</button>
            <a
              href="https://wa.me/541128590037?text=Hola%2C%20quiero%20pedir%20pizzas%20Il%20Fratelli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "0.625rem 1.25rem", fontSize: "0.75rem" }}
            >
              Pedir ahora
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            style={{
              background: "none",
              border: "none",
              color: "var(--brand-cream)",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "var(--brand-cream)",
                transition: "transform 250ms ease, opacity 250ms ease",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "var(--brand-cream)",
                transition: "opacity 250ms ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "var(--brand-cream)",
                transition: "transform 250ms ease, opacity 250ms ease",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(13,13,13,0.98)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          transition: "opacity 300ms ease, visibility 300ms ease",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        <button
          className="nav-link"
          onClick={() => goTo("/")}
          style={{ fontSize: "1.5rem", letterSpacing: "0.2em" }}
        >
          Inicio
        </button>
        <button
          className="nav-link"
          onClick={() => goTo("/productos")}
          style={{ fontSize: "1.5rem", letterSpacing: "0.2em" }}
        >
          Productos
        </button>
        <button
          className="nav-link"
          onClick={() => goTo("/nosotros")}
          style={{ fontSize: "1.5rem", letterSpacing: "0.2em" }}
        >
          Nosotros
        </button>
        <button
          className="nav-link"
          onClick={() => scrollToSection("contacto")}
          style={{ fontSize: "1.5rem", letterSpacing: "0.2em" }}
        >
          Contacto
        </button>
        <a
          href="https://wa.me/541128590037?text=Hola%2C%20quiero%20pedir%20pizzas%20Il%20Fratelli"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          onClick={() => setMenuOpen(false)}
        >
          Pedir ahora
        </a>
      </div>
    </>
  );
}
