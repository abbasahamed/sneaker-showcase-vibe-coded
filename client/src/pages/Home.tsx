import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { MetalButton } from "@/components/ui/liquid-glass-button"

/**
 * Design Philosophy: Premium Sneaker Showcase
 * - Dark, immersive aesthetic with WebGL background
 * - Bold typography with high contrast
 * - Luxury brand positioning with metallic accents
 * - Smooth animations and glass-morphism effects
 */

export default function Home() {
  const brands = [
    {
      name: "Nike",
      shoe: "Air Max 97",
      description: "The iconic swoosh",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      buttonVariant: "gold" as const,
    },
    {
      name: "Adidas",
      shoe: "Ultraboost 24",
      description: "Three stripes legacy",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
      buttonVariant: "default" as const,
    },
    {
      name: "Asics",
      shoe: "Gel-Kayano 31",
      description: "Performance meets comfort",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
      buttonVariant: "success" as const,
    },
    {
      name: "New Balance",
      shoe: "1080v13",
      description: "Timeless innovation",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      buttonVariant: "bronze" as const,
    },
  ]

  const drops = [
    {
      name: "Air Jordan 1 Retro",
      brand: "Nike",
      price: "$170",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    },
    {
      name: "Stan Smith Recon",
      brand: "Adidas",
      price: "$120",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    },
    {
      name: "Gel-Lyte III OG",
      brand: "Asics",
      price: "$140",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* WebGL Shader Background */}
      <WebGLShader />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="relative border border-[#27272a] p-2 w-full mx-auto max-w-4xl">
          <div className="relative border border-[#27272a] py-20 px-6 overflow-hidden">
            <div className="text-center">
              <h1 className="mb-6 text-white text-center text-5xl md:text-[clamp(2.5rem,8vw,7rem)] font-extrabold tracking-tighter leading-tight">
                Step Into the Future
              </h1>
              <p className="text-white/60 px-6 text-center text-sm md:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
                Explore iconic silhouettes from Nike, Adidas, Asics & New Balance
              </p>

              {/* Availability Badge */}
              <div className="my-8 flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500 font-medium">Available Now</p>
              </div>

              {/* Shop Now Button */}
              <div className="flex justify-center mt-10">
                <LiquidButton className="text-white border border-white/30 rounded-full px-8" size="xl">
                  Shop Now
                </LiquidButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">
            Featured Brands
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group relative bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300"
              >
                {/* Brand Image */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={brand.image}
                    alt={brand.shoe}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Brand Info */}
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {brand.description}
                  </p>
                  <p className="text-white/80 text-xs font-semibold mb-6 uppercase tracking-wider">
                    {brand.shoe}
                  </p>

                  {/* Explore Button */}
                  <MetalButton variant={brand.buttonVariant} className="w-full">
                    Explore
                  </MetalButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Drops Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">
            Latest Drops
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {drops.map((drop, idx) => (
              <div
                key={idx}
                className="group relative bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-72 overflow-hidden bg-black">
                  <img
                    src={drop.image}
                    alt={drop.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                    {drop.brand}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {drop.name}
                  </h3>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-extrabold text-white">
                      {drop.price}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <LiquidButton className="w-full text-white border border-white/30" size="lg">
                    Add to Cart
                  </LiquidButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800 bg-black/50 backdrop-blur-sm py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                SneakerHub
              </h3>
              <p className="text-white/60 text-sm">
                Your destination for premium sneaker culture
              </p>
            </div>

            {/* Nike Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Nike</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    Air Max Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    Jordan Retros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    Latest Releases
                  </a>
                </li>
              </ul>
            </div>

            {/* Adidas Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Adidas</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    Ultraboost Series
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    Stan Smith
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    Yeezy Collection
                  </a>
                </li>
              </ul>
            </div>

            {/* More Brands */}
            <div>
              <h4 className="text-white font-semibold mb-4">More</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    Asics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    New Balance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © 2026 SneakerHub. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
