import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const domain = "localhost:300";

  const o_options = {
    domain,
    monitorDom: true,
  };
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdn.outseta.com/outseta.min.js"
          data-options={JSON.stringify()}
        ></script>
      </body>
    </Html>
  );
}
