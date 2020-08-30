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