interface CoffeeDrink {
  id: number;
  name: string;
  category: string;
  formCode: FormCode;
  displayOrder: number;
  availability: Availability;
  assets: Assets;
  sizes: SizeCode[];
}

interface Assets {
  thumbnail: Thumbnail;
  fullSize: FullSize;
  masterImage: FullSize;
}

interface Thumbnail {
  large: FullSize;
}

interface FullSize {
  uri: string;
}

type FormCode =
  | 'Single'
  | 'Hot'
  | 'Iced'
  | 'Packaged'
  | 'Whole-Bean'
  | 'VIA';

type SizeCode =
  | 'Small'
  | 'Medium'
  | 'Large'
  | 'Single'
  | 'Double'
  | 'Triple'
  | 'Quad'
  | 'Kids'
  | 'Trenta'
  | '14.5-Packaged'
  | '12-Packaged'
  | '11-Packaged'
  | '8-Packaged'
  | '16.9-Packaged'
  | '20-Packaged'
  | '23.7-Packaged'
  | '600-Packaged'
  | '1 Piece'
  | '8.8-oz'
  | '1-lb'
  | '5-count'
  | '12-count';

type Availability = 'Available';
