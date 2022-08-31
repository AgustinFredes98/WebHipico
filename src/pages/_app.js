import "../styles/styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script src="https://cdn.tailwindcss.com">{"amigo tu me oyes"}</script>
      <style>
        {`
          html {
            background-color: rgb(255, 136, 0);
          }

          body, html, #__next {
            height: 100%;
            width: 100%;
            position: absolute
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp