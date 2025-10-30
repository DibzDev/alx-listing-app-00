// Interface for Card component props
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  location: string;
  onButtonClick?: () => void;
}

// Interface for Button component props
export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

// Property interface for listing items
export interface Property {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  amenities: string[];
}