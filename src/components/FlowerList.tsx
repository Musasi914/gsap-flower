import type { FlowerListProps } from "@/types";

export default function FlowerList({ title, flowers, className = "" }: FlowerListProps) {
  return (
    <section className={`hero__list-wrapper ${className}`} aria-labelledby={`${title}-title`}>
      <h2 className="text-3xl font-bold font-serif" id={`${title}-title`}>
        {title}
      </h2>
      <dl className="hero__list mt-4 bg-black/40 backdrop-blur-sm p-2 rounded-2xl">
        {flowers.map((flower, index) => (
          <div key={`${flower.name}-${index}`} className="flex items-center justify-between py-2">
            <div>
              <dt className="text-2xl font-bold font-serif text-accent">{flower.name}</dt>
              <dd className="text-sm text-gray-100">{flower.description}</dd>
            </div>
            <dd className="text-2xl font-bold font-serif">{flower.price}$</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
