import { Sparkles, Orbit, Shield, Rocket, Telescope } from "lucide-react";
import Link from "next/link";



const tiles = [
  { name: "Imagination Galaxy", tagline: "Escape beyond your boundaries", icon: Sparkles, genreId: 16 },
  { name: "Family Orbit", tagline: "Couch Constellation approved", icon: Orbit, genreId: 10751 },
  { name: "Heroverse", tagline: "Where good always triumphs", icon: Shield, genreId: 28 },
  { name: "Far Far Away", tagline: "Where the stars begin", icon: Rocket, genreId: 878 },
  { name: "Cosmic Curiosity", tagline: "The endless quest for why", icon: Telescope, genreId: 99 },
];

function GalaxyTiles() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-4 px-5 mb-10">
      {tiles.map((tile) => {
        const Icon = tile.icon;
        return (
          <Link href={`/genre/${tile.genreId}?name=${tile.name}`}
            key={tile.genreId}
            className="aspect-video flex flex-col items-center justify-center text-center p-3 rounded-xl border border-glam-purple bg-[#221a4a] hover:scale-105 hover:border-glam-pink transition duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-glam-gold focus-visible:ring-offset-4 focus-visible:ring-offset-glam-space"
          >
            <Icon className="w-8 h-8 text-glam-pink mb-2" />
            <h3 className="font-bold text-sm md:text-base">{tile.name}</h3>
            <p className="text-xs text-glam-gold">{tile.tagline}</p>
          </Link>
        );
      })}
    </section>
  );
}

export default GalaxyTiles;