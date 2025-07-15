export interface NavLink {
  label: string;
  href: string;
}

export interface Flower {
  name: string;
  price: number;
  description?: string;
}

export interface FlowerListProps {
  title: string;
  flowers: Flower[];
  className?: string;
}
