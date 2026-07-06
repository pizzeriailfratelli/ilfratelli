/* =====================================================
   ABOUT PAGE — Il Fratelli
   Nuestra historia, tres hermanos, abuela Clelia, valores
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

export default function About() {
  const titleRef = useReveal();
  const storyRef = useReveal();
  const valuesRef = useReveal();

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
              Nuestra Historia
            </p>
            <h1
              className="display-headline"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                maxWidth: "700px",
              }}
            >
              Tres hermanos,
              <br />
              <em style={{ color: "var(--brand-red)", fontStyle: "italic" }}>
                una pasión.
              </em>
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
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
              gap: "5rem",
              alignItems: "center",
            }}
            className="md:grid-cols-2 grid-cols-1"
          >
            <div ref={storyRef} className="reveal">
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(245,240,232,0.75)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Somos tres hermanos apasionados por la cocina, impulsados por
                nuestra abuela Clelia, que siempre nos ha inculcado la tradición
                de las recetas italianas en la familia.
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(245,240,232,0.75)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Crecimos viendo a nuestra abuela preparar pizzas con amor y
                dedicación, usando ingredientes de calidad y técnicas
                tradicionales que han sido pasadas de generación en generación.
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(245,240,232,0.75)",
                  lineHeight: 1.8,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Hoy hemos creado Il Fratelli para que todos los argentinos puedan
                conocer nuestra receta y satisfacer la necesidad de una pizza
                rica y crocante, hecha con materiales de calidad, lista en menos
                de 15 minutos.
              </p>
            </div>

            <div style={{ overflow: "hidden" }}>
              <img
                src="/manus-storage/familia-cocina-dark_8853660e.jpg"
                alt="Los hermanos de Il Fratelli en la cocina"
                style={{
                  width: "100%",
                  aspectRatio: "3/2",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        style={{
          padding: "6rem 0",
          background: "var(--brand-dark-2)",
          borderTop: "1px solid rgba(245,240,232,0.06)",
          borderBottom: "1px solid rgba(245,240,232,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 1.25rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--brand-red)",
              marginBottom: "2rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            — Abuela Clelia
          </p>
          <blockquote
            className="display-headline"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
              fontStyle: "italic",
              color: "rgba(245,240,232,0.85)",
              lineHeight: 1.3,
            }}
          >
            "La pizza no es solo comida. Es el tiempo que le dedicás, los
            ingredientes que elegís, y el amor con que la hacés."
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "7rem 0" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.25rem",
          }}
        >
          <div ref={valuesRef} className="reveal" style={{ marginBottom: "4rem" }}>
            <p className="section-number" style={{ marginBottom: "1rem" }}>
              Nuestros Valores
            </p>
            <h2
              className="display-headline"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Lo que nos define.
            </h2>
          </div>

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
                title: "Tradición",
                body: "Respetamos las recetas italianas auténticas, transmitidas por nuestra abuela Clelia con amor y dedicación.",
              },
              {
                num: "02",
                title: "Calidad",
                body: "Cada ingrediente es seleccionado cuidadosamente. No usamos conservantes ni aditivos artificiales.",
              },
              {
                num: "03",
                title: "Tiempo",
                body: "Pensamos en un producto de larga duración para que lo puedas congelar por hasta 6 meses.",
              },
            ].map((val, i) => {
              const ref = useReveal();
              return (
                <div
                  key={val.num}
                  ref={ref}
                  className="reveal"
                  style={{
                    background: "var(--brand-dark)",
                    padding: "3rem 2.5rem",
                    transitionDelay: `${i * 100}ms`,
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
                    {val.num}
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
                    {val.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(245,240,232,0.55)",
                      lineHeight: 1.7,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {val.body}
                  </p>
                </div>
              );
            })}
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
