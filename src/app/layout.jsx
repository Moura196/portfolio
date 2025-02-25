// created root directory to separate my application's code from configuration files
// public directory is to store static assets as images, fonts, etc.
// creating a root layout
export default function RootLayout ({children}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}