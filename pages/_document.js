import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="ro">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;400;500;700;900&display=swap" rel="stylesheet" />
                    <script src="https://kit.fontawesome.com/c0b43c776e.js" crossOrigin="anonymous"></script>
                    <meta name="description" content="Vrei sa fii soferache? Hai la Auto Iordache! Soferi buni pe strazile Iasului din 1992."></meta>
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                        crossorigin="" />
                        <script dangerouslySetInnerHTML={{
                            __html: `
                            window.fbAsyncInit = function() {
                                FB.init({
                                    xfbml: true,
                                    version: 'v8.0'
                                });
                            };
                            
                            (function(d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) return;
                            js = d.createElement(s); js.id = id;
                            js.src = 'https://connect.facebook.net/ro_RO/sdk/xfbml.customerchat.js';
                            fjs.parentNode.insertBefore(js, fjs);
                            }(document, 'script', 'facebook-jssdk'));
                            `
                        }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument