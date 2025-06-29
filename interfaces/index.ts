// export interface CardProps {
//   // Placeholder – define props later
//   title: string;
//   image: string;
//   location: string;
//   price: number;
//   onButtonClick?: () => void;
// }

// export interface ButtonProps {
//   // Placeholder – define props later
//   text: string;
//   onClick?: () => void;
//   type?: 'button' | 'submit' | 'reset';
//   variant?: 'primary' | 'secondary' | 'danger';
// }

// export interface PropertyProps {
//   name: string;
//   address: {
//     state: string;
//     city: string;
//     country: string;
//   };
//   rating: number;
//   category: string[];
//   price: number;
//   offers: {
//     bed: string;
//     shower: string;
//     occupants: string;
//   };
//   image: string;
//   discount: string;
// }
export interface PropertyProps {
  name: string;
    address: {
      state: string;
      city: string;
      country: string;
    },
    rating: number;
    category: string[];
    price: number;
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    },
    image: string,
    discount?: string;
}

export interface FooterLinksProps {
  title: string;
  links: {
    first: string;
    second: string;
    third: string;
    fourth?: string;
    fifth?: string;
  }
}
export interface PillProps {
  label: string;
}
