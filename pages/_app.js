import Script from "next/script";

// custom styles
import "@/styles/style.css";

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"
      />
      <Script
        id="init"
        dangerouslySetInnerHTML={{
          __html: `
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
        
        let cr = document.getElementById("copyright");
        let date = new Date().getFullYear();
        cr.innerText = "\u00A9" + " 2019-" + date + " Greg Hughes";
        `,
        }}
      />
    </Layout>
  );
}
