import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" type="image/png" href="../static/favicon.ico"/>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                    <meta name="viewport"content="width=device-width, initial-scale=1.0" />
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
    )
    }
}

export default MyDocument;