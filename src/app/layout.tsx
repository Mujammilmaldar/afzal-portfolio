import "./globals.css";
import Navbar from "@/components/Navbar";
import CallToAction from "@/components/CallToAction";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ── Favicon ── */}
        <link rel="icon" href="/afzalkhan-healthcaredigitalmarketingconsultantMumbai-Logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/afzalkhan-healthcaredigitalmarketingconsultantMumbai-Logo.svg" />

        {/* ── Google Analytics ── */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-68SH300L7T"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-68SH300L7T');
          `}
        </script>

        {/* ── Core Meta ── */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Healthcare Digital Marketing Consultant</title>
        <meta name="description" content="With over 13 years of specialized experience in healthcare digital marketing, I have helped hospitals, clinics, and doctors build a powerful online presence — driving more patients, reducing lead costs, and improving conversions." />

        {/* ── Open Graph ── */}
        <meta property="og:title" content="Healthcare Digital Marketing Consultant in Mumbai" />
        <meta property="og:description" content="With 13+ years in healthcare digital marketing, I have helped hospitals, clinics & doctors grow their online presence and attract more patients. Know More!" />
        <meta property="og:url" content="https://afzaldigital.com/" />
        <meta property="og:image" content="https://afzaldigital.com/afzalkhan-healthcaredigitalmarketingconsultantMumbai-Logo.svg" />
        <meta property="og:image:alt" content="Afzal Khan - Healthcare Digital Marketing Consultant Mumbai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Afzal Khan | Healthcare Digital Marketing Consultant" />

        {/* ── Twitter / X Card ── */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Healthcare Digital Marketing Consultant in Mumbai" />
        <meta name="twitter:description" content="With 13+ years in healthcare digital marketing, I have helped hospitals, clinics & doctors grow their online presence and attract more patients." />
        <meta name="twitter:image" content="https://afzaldigital.com/afzalkhan-healthcaredigitalmarketingconsultantMumbai-Logo.svg" />
      </head>
      <body className="bg-lighttype">
        <Navbar />
        {children}
        <CallToAction />
      </body>
    </html>
  );
}
