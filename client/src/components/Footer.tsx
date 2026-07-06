/* =====================================================
   FOOTER — Il Fratelli
   Dark minimal footer with contact info
   ===================================================== */

import { useLocation } from "wouter";

export default function Footer() {
  const [, navigate] = useLocation();

  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contacto"
      style={{
        background: "var(--brand-dark)",
        borderTop: "1px solid rgba(245,240,232,0.08)",
        padding: "5rem 0 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 1.25rem",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand */}
          <div>
            <img
              src="/manus-storage/il-fratelli-logo-new_abdf93f6.png"
              alt="Il Fratelli"
              style={{
                height: "64px",
                width: "64px",
                objectFit: "contain",
                borderRadius: "50%",
                marginBottom: "1rem",
              }}
            />
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem",
                color: "var(--brand-cream)",
                marginBottom: "0.5rem",
              }}
            >
              Il Fratelli
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.5)",
                lineHeight: 1.6,
                maxWidth: "220px",
              }}
            >
              Pizza napoletana hecha con pasión entre hermanos.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--brand-red)",
                marginBottom: "1.25rem",
              }}
            >
              Navegación
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Inicio", path: "/" },
                { label: "Productos", path: "/productos" },
                { label: "Nosotros", path: "/nosotros" },
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => goTo(item.path)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(245,240,232,0.6)",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    transition: "color 200ms ease",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-cream)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--brand-red)",
                marginBottom: "1.25rem",
              }}
            >
              Contacto
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="mailto:pizzeriailfratelli@gmail.com"
                style={{
                  color: "rgba(245,240,232,0.6)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
              >
                pizzeriailfratelli@gmail.com
              </a>
              <a
                href="tel:+541128590037"
                style={{
                  color: "rgba(245,240,232,0.6)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
              >
                +54 11 2859-0037
              </a>
              <a
                href="https://wa.me/541128590037"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(245,240,232,0.6)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--brand-red)",
                marginBottom: "1.25rem",
              }}
            >
              Ubicación
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.6)",
                fontSize: "0.875rem",
                lineHeight: 1.6,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Buenos Aires, Argentina
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(245,240,232,0.08)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.35)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            © 2026 Il Fratelli. Todos los derechos reservados. Hecha entre hermanos.
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.35)",
              fontFamily: "'DM Sans', sans-serif",
              fontStyle: "italic",
            }}
          >
            Pizza Napoletana · Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}
