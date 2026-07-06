/* =====================================================
   HOME PAGE — Il Fratelli
   Manifesto Napoletano: dark editorial, Playfair + DM Sans
   Sections: Hero, Why, Marquee, Products preview, CTA, Contact
   ===================================================== */

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";

// ── Scroll reveal hook ──────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ── Pizza data ──────────────────────────────────────
const pizzas = [
  {
    name: "Margherita",
    desc: "Salsa de tomate, mozzarella, oliva, albahaca",
    img: "/manus-storage/pizza-margherita_0c097dc5.png",
  },
  {
    name: "Pesto",
    desc: "Salsa de tomate, mozzarella, queso verde de ajo rallado, oliva, pesto de albahaca",
    img: "/manus-storage/pizza-pesto_58240e2f.png",
  },
  {
    name: "Jamón Crudo",
    desc: "Salsa de tomate, oliva, jamón crudo de Parma",
    img: "/manus-storage/pizza-jamon-crudo_f1d909bb.png",
  },
];

// ── Marquee items ───────────────────────────────────
const marqueeItems = [
  "Auténtica", "·", "Artesanal", "·", "Napoletana", "·",
  "Hecha entre hermanos", "·", "Sin conservantes", "·",
  "Lista en 15 minutos", "·", "Buenos Aires", "·",
  "Auténtica", "·", "Artesanal", "·", "Napoletana", "·",
  "Hecha entre hermanos", "·", "Sin conservantes", "·",
  "Lista en 15 minutos", "·", "Buenos Aires", "·",
];

// ── FAQ data ────────────────────────────────────────
const faqs = [
  {
    q: "¿Cómo se prepara la pizza?",
    a: "Congelada con precisión. Precalentá el horno a 220°C, coloca la pizza, hornea 7 a 10 minutos. ¡Listo! Recordá: cuanto más fuerte el horno = bordes más crocantes.",
  },
  {
    q: "¿Usan conservantes o aditivos?",
    a: "No. Cada pizza Il Fratelli es hecha con ingredientes naturales cuidadosamente seleccionados. Sin conservantes, sin aditivos artificiales.",
  },
  {
    q: "¿Cómo puedo hacer un pedido?",
    a: "Podés contactarnos por WhatsApp al +54 11 5496-4833 o por email a pizzeriailfratelli@gmail.com. Te respondemos a la brevedad.",
  },
  {
    q: "¿Hacen envíos?",
    a: "Sí, realizamos envíos en Buenos Aires. Consultanos por WhatsApp para coordinar la entrega.",
  },
];

// ── FAQ Item component ──────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span style={{ paddingRight: "1rem" }}>{q}</span>
        <span
          style={{
            fontSize: "1.25rem",
            color: "var(--brand-red)",
            transition: "transform 250ms ease",
            transform: open ? "rotate(45deg)" : "none",
            flexShrink: 0,
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? "300px" : "0",
          transition: "max-height 350ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <p
          style={{
            color: "rgba(245,240,232,0.65)",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            paddingBottom: "1.5rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

// ── Pizza card ──────────────────────────────────────
function PizzaCard({ pizza, delay = 0 }: { pizza: typeof pizzas[0]; delay?: number }) {
  const ref = useReveal();
  const [, navigate] = useLocation();
  return (
    <div
      ref={ref}
      className="reveal pizza-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
        <img
          src={pizza.img}
          alt={pizza.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 500ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 50%)",
          }}
        />
      </div>
      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--brand-cream)",
            marginBottom: "0.5rem",
          }}
        >
          {pizza.name}
        </h3>
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(245,240,232,0.55)",
            lineHeight: 1.6,
            marginBottom: "1.25rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {pizza.desc}
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href="https://wa.me/5491154964833?text=Hola%2C%20quiero%20consultar%20el%20precio%20de%20la%20pizza%20Il%20Fratelli"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.625rem 1.25rem", fontSize: "0.75rem" }}
          >
            Consultar precio
          </a>
          <button
            className="btn-outline"
            style={{ padding: "0.625rem 1.25rem", fontSize: "0.75rem" }}
            onClick={() => navigate("/productos")}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main component ──────────────────────────────────
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whyRef = useReveal();
  const ingredRef = useReveal();
  const faqRef = useReveal();
  const ctaRef = useReveal();
  const [, navigate] = useLocation();

  // Hero parallax
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY * 0.3;
        heroRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "var(--brand-dark)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "72px",
        }}
      >
        {/* Background image */}
        <div
          ref={heroRef}
          style={{
            position: "absolute",
            inset: "-10%",
            backgroundImage: `url('/manus-storage/hero-pizza-dark_64e424bb.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.75) 50%, rgba(13,13,13,0.35) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "4rem 1.25rem",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "700px" }}>
            <p
              className="section-number"
              style={{ marginBottom: "1.5rem", display: "block" }}
            >
              Pizza Napoletana · Buenos Aires
            </p>
            <h1
              className="display-headline"
              style={{
                fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
                marginBottom: "1.5rem",
                lineHeight: 1.0,
              }}
            >
              Auténtica.
              <br />
              <em style={{ color: "var(--brand-red)", fontStyle: "italic" }}>
                Artesanal.
              </em>
              <br />
              Lista en 15 min.
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                color: "rgba(245,240,232,0.75)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "520px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Pizzas napoletanas envasadas al vacío, congeladas con precisión.
              Ingredientes de la mejor calidad seleccionados, técnicas italianas
              tradicionales, conveniencia moderna para tu mesa.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                className="btn-primary"
                onClick={() => navigate("/productos")}
              >
                Ver Productos
              </button>
              <button
                className="btn-outline"
                onClick={() => {
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contactar
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.4)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Scroll
          </p>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, rgba(245,240,232,0.4), transparent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(245,240,232,0.08)",
          borderBottom: "1px solid rgba(245,240,232,0.08)",
          overflow: "hidden",
          padding: "1rem 0",
          background: "var(--brand-dark-2)",
        }}
      >
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color:
                  item === "·"
                    ? "var(--brand-red)"
                    : "rgba(245,240,232,0.5)",
                padding: "0 1.25rem",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── WHY IL FRATELLI ──────────────────────── */}
      <section style={{ padding: "7rem 0" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.25rem",
          }}
        >
          <div
            ref={whyRef}
            className="reveal"
            style={{ marginBottom: "5rem" }}
          >
            <p className="section-number" style={{ marginBottom: "1rem" }}>
              01 — Por qué Il Fratelli
            </p>
            <h2
              className="display-headline"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                maxWidth: "700px",
              }}
            >
              No usamos atajos.
              <br />
              <em style={{ color: "rgba(245,240,232,0.45)", fontStyle: "italic" }}>
                 Harina, tomate, horno fuerte.
              </em>
            </h2>
          </div>

          {/* Three pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              background: "rgba(245,240,232,0.08)",
            }}
          >
            {[
              {
                num: "01",
                title: "Tradición Italiana",
                body: "Tres hermanos apasionados por la cocina, impulsados por nuestra abuela Clelia, que nos inculcó la tradición de las recetas italianas.",
                delay: 0,
              },
              {
                num: "02",
                title: "Ingredientes Premium",
                body: "Seleccionamos cuidadosamente cada ingrediente. Mozzarella fresca, salsa de tomate, aceite de oliva extra virgen. Sin conservantes.",
                delay: 100,
              },
              {
                num: "03",
                title: "15 Minutos",
                body: "Congelada con precisión. Precalentá el horno a 220°C, coloca la pizza, hornea 7 a 10 minutos. ¡Listo! Cuanto más fuerte el horno = bordes más crocantes.",
                delay: 200,
              },
            ].map((pillar) => {
              const ref = useReveal();
              return (
                <div
                  key={pillar.num}
                  ref={ref}
                  className="reveal"
                  style={{
                    background: "var(--brand-dark)",
                    padding: "3rem 2.5rem",
                    transitionDelay: `${pillar.delay}ms`,
                  }}
                >
                  <p
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "rgba(200,16,46,0.2)",
                      fontFamily: "'Playfair Display', serif",
                      marginBottom: "1.5rem",
                      lineHeight: 1,
                    }}
                  >
                    {pillar.num}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "var(--brand-cream)",
                      marginBottom: "1rem",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(245,240,232,0.55)",
                      lineHeight: 1.7,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ─────────────────────── */}
      <section
        style={{
          padding: "7rem 0",
          background: "var(--brand-dark-2)",
          borderTop: "1px solid rgba(245,240,232,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.25rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "4rem",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <p className="section-number" style={{ marginBottom: "1rem" }}>
                02 — Nuestros Productos
              </p>
              <h2
                className="display-headline"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Cada pizza,
                <br />
                una historia.
              </h2>
            </div>
            <button
              className="btn-outline"
              onClick={() => {
                navigate("/productos");
                window.scrollTo({ top: 0 });
              }}
            >
              Ver todos →
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {pizzas.map((pizza, i) => (
              <PizzaCard key={pizza.name} pizza={pizza} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INGREDIENTS ──────────────────────────── */}
      <section style={{ padding: "7rem 0" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.25rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="md:grid-cols-2 grid-cols-1"
          >
            <div ref={ingredRef} className="reveal">
              <p className="section-number" style={{ marginBottom: "1rem" }}>
                02 — Ingredientes de Alta Calidad
              </p>
              <h2
                className="display-headline"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  marginBottom: "1.5rem",
                }}
              >
                Lo que entra,
                <br />
                define lo que sale.
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(245,240,232,0.65)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Cada pizza Il Fratelli es hecha con ingredientes cuidadosamente
                seleccionados. No usamos conservantes ni aditivos artificiales.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Mozzarella fresca",
                  "Salsa de tomate",
                  "Aceite de oliva extra virgen",
                  "Albahaca fresca",
                  "Harina de calidad",
                ].map((ing) => (
                  <div
                    key={ing}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.875rem",
                      padding: "0.875rem 1rem",
                      background: "var(--brand-dark-2)",
                      border: "1px solid rgba(245,240,232,0.07)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--brand-red)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(245,240,232,0.8)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {ing}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <img
                src="/manus-storage/ingredientes-dark_dd1f50d6.jpg"
                alt="Ingredientes italianos"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(13,13,13,0.3) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section
        style={{
          padding: "7rem 0",
          background: "var(--brand-dark-2)",
          borderTop: "1px solid rgba(245,240,232,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.25rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="md:grid-cols-2 grid-cols-1"
          >
            <div ref={faqRef} className="reveal">
              <p className="section-number" style={{ marginBottom: "1rem" }}>
                04 — FAQ
              </p>
              <h2
                className="display-headline"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Preguntas
                <br />
                frecuentes.
              </h2>
            </div>
            <div>
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          padding: "8rem 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('/manus-storage/horno-pizza_d197743f.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(13,13,13,0.85)",
          }}
        />
        <div
          ref={ctaRef}
          className="reveal"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.25rem",
            textAlign: "center",
          }}
        >
          <p className="section-number" style={{ marginBottom: "1.5rem" }}>
            Descubrí la verdadera pizza napoletana
          </p>
          <h2
            className="display-headline"
            style={{
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              marginBottom: "1.5rem",
            }}
          >
            Hecha con pasión.
            <br />
            <em style={{ color: "var(--brand-red)", fontStyle: "italic" }}>
              Congelada con precisión.
            </em>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(245,240,232,0.65)",
              marginBottom: "3rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Lista en 15 minutos.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-primary"
              onClick={() => {
                navigate("/productos");
                window.scrollTo({ top: 0 });
              }}
            >
              Ver Nuestros Productos
            </button>
            <a
              href="https://wa.me/5491154964833?text=Hola%2C%20quiero%20pedir%20pizzas%20Il%20Fratelli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @media (max-width: 768px) {
          .md\\:grid-cols-2 {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) {
          .hidden.md\\:flex {
            display: flex !important;
          }
          .md\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
