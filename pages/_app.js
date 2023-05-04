import Script from "next/script";

// custom styles
import "@/styles/style.css";

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
      <Script
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.bundle.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14/dist/smooth-scroll.polyfills.min.js"
      />
      <Script
        id="init"
        dangerouslySetInnerHTML={{
          __html: `
        // Smooth Scroll
        let scroll = new SmoothScroll('a[href*="#"]');

        // Typed.js
        let typed = new Typed("#typed-content", {
          strings: [
            "Let's do our best work...^200",
            "Let's do our best work together.",
          ],
          smartBackspace: true,
          startDelay: 1200,
          backDelay: 1000,
          typeSpeed: 23,
          backSpeed: 18,
        })
        
        // dynamic copyright date
        let cr = document.getElementById("copyright");
        let date = new Date().getFullYear();
        cr.innerText = "\u00A9" + " 2019-" + date + " Greg Hughes";
        `,
        }}
      />
    </Layout>
  );
}
