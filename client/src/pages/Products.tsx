/* =====================================================
   PRODUCTS PAGE — Il Fratelli
   All 6 pizzas with "salsa de tomate" replacing "pomodoro"
   ===================================================== */

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const allPizzas = [
  {
    name: "Margherita",
    desc: "Salsa de tomate, mozzarella, oliva, albahaca",
    img: "/manus-storage/pizza-margherita-product_c38ef54c.png",
    tag: "Clásica",
  },
  {
    name: "Pesto",
    desc: "Salsa de tomate, mozzarella, queso verde de ajo rallado, oliva, pesto de albahaca",
    img: "/manus-storage/pizza-pesto-product_fb6ef1cc.png",
    tag: "Especial",
  },
  {
    name: "Jamón Crudo",
    desc: "Salsa de tomate, oliva, jamón crudo de Parma",
    img: "/manus-storage/pizza-jamon-product_80a2cdc0.png",
    tag: "Premium",
  },
  {
    name: "Fugazzeta",
    desc: "Mozzarella, cebolla blanca y morada, oliva",
    img: "/manus-storage/pizza-fugazzeta-product_0db79ab2.png",
    tag: "Argentina",
  },
  {
    name: "Pepperoni",
    desc: "Salsa de tomate, mozzarella, pepperoni, oliva, salsa diavola de la casa",
    img: "/manus-storage/pizza-pepperoni-product_29ff7f59.png",
    tag: "Picante",
  },
  {
    name: "Dos Quesos",
    desc: "Salsa de tomate, oliva, mozzarella, parmesano rallado",
    img: "/manus-storage/pizza-dos-quesos-product_931a4fe2.png",
    tag: "Especial",
  },
];

function PizzaCard({ pizza, delay = 0 }: { pizza: typeof allPizzas[0]; delay?: number }) {
  const ref = useReveal();
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
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(13,13,13,0.65) 0%, transparent 55%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "var(--brand-red)",
            color: "var(--brand-cream)",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.3rem 0.75rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {pizza.tag}
        </span>
      </div>
      <div style={{ padding: "1.75rem" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.375rem",
            fontWeight: 700,
            color: "var(--brand-cream)",
            marginBottom: "0.625rem",
          }}
        >
          {pizza.name}
        </h3>
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(245,240,232,0.5)",
            lineHeight: 1.65,
            marginBottom: "1.5rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {pizza.desc}
        </p>
        <a
          href={`https://wa.me/541129580073?text=Hola%2C%20quiero%20consultar%20el%20precio%20de%20la%20pizza%20${encodeURIComponent(pizza.name)}%20de%20Il%20Fratelli`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "0.75rem",
            display: "inline-flex",
          }}
        >
          Consultar precio
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  const titleRef = useReveal();

  return (
    <div style={{ background: "var(--brand-dark)", minHeight: "100vh" }}>
      <Navbar />

      {/* Page header */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid rgba(245,240,232,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.25rem",
          }}
        >
          <div ref={titleRef} className="reveal">
            <p className="section-number" style={{ marginBottom: "1rem" }}>
              Nuestros Productos
            </p>
            <h1
              className="display-headline"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                maxWidth: "700px",
                marginBottom: "1.5rem",
              }}
            >
              Cada pizza,
              <br />
              <em style={{ color: "var(--brand-red)", fontStyle: "italic" }}>
                una historia.
              </em>
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "rgba(245,240,232,0.6)",
                lineHeight: 1.7,
                maxWidth: "560px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Nuestras deliciosas pizzas napoletanas, cada una con ingredientes
              de la mejor calidad seleccionados cuidadosamente. Listas para
              congelar y comer en 15 minutos.
            </p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ padding: "6rem 0" }}>
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
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {allPizzas.map((pizza, i) => (
              <PizzaCard key={pizza.name} pizza={pizza} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Prep instructions */}
      <section
        style={{
          padding: "6rem 0",
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
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="md:grid-cols-2 grid-cols-1"
          >
            <div>
              <p className="section-number" style={{ marginBottom: "1rem" }}>
                Cómo preparar tu pizza
              </p>
              <h2
                className="display-headline"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  marginBottom: "2rem",
                }}
              >
                Simple. Rápido.
                <br />
                <em style={{ color: "var(--brand-red)", fontStyle: "italic" }}>
                  Delicioso.
                </em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { step: "01", text: "Precalentá el horno a 220°C" },
                  { step: "02", text: "Colocá la pizza directamente en la rejilla (sin descongelar)" },
                  { step: "03", text: "Horneá 7 a 10 minutos" },
                  { step: "04", text: "¡Listo! Recordá: cuanto más fuerte el horno = bordes más crocantes" },
                ].map((s) => (
                  <div
                    key={s.step}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "var(--brand-red)",
                        fontFamily: "'DM Sans', sans-serif",
                        paddingTop: "0.15rem",
                        flexShrink: 0,
                      }}
                    >
                      {s.step}
                    </span>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "rgba(245,240,232,0.8)",
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <img
                src="/manus-storage/horno-pizza_d197743f.jpg"
                alt="Horno de pizza"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .hidden.md\\:flex { display: flex !important; }
          .md\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
