import localFont from 'next/font/local'

const BrutalType = localFont({
    src: [{ path: "../assets/fonts/BrutalType.ttf" }],
    variable: "--font-brutal",
})

const classDisplay = localFont({
    src: [
        {
            path: "../assets/fonts/BrutalType-Light.eot",
            weight: "300",
            style: "normal"
        },
    ],
    variable: "--font-class-display",
});


export { BrutalType, classDisplay }