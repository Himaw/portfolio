import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Loader from "../loading/loader";
import Color from "../utils/page.colors.util";
import colors from "/content/index/_colors.json";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading2(false);
    }, 3200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const contentStyle = {
    opacity: loading2 ? 0 : 1,
    transition: "opacity 0.5s ease",
  };
  const contentStyle2 = {
    opacity: 0,
  };

  return (
    <div>
      {loading ? (
        <>
          <Color colors={colors} />
          <div style={contentStyle2}>
            <Navbar />
          </div>
          <main>
            {" "}
            <Loader />
          </main>
        </>
      ) : (
        <div style={contentStyle}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </div>
  );
}
