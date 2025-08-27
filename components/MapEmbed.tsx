'use client';

type MapEmbedProps = {
  address: string;
  heightClass?: string; // e.g. "h-[360px]"
};

export default function MapEmbed({ address, heightClass = 'h-[360px]' }: MapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&hl=en&z=16&output=embed`;
  return (
    <div className={`w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ${heightClass}`}>
      <iframe
        title="Map"
        src={src}
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
