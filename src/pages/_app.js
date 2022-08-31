import "../styles/styles.css"
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <script>{"console.log(window.location.href);window.location.href = '/WebHipico/#' + window.location.pathname.replace('/WebHipico', ''"}
      </script>
      <script src="https://cdn.tailwindcss.com"></script>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp