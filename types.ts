
export enum PropertyType {
  FLAT = 'flat',
  PLOT = 'plot',
  ROOM = 'room'
}

export enum PropertyStatus {
  AVAILABLE = 'available',
  SOLD = 'sold',
  RENTED = 'rented'
}

export interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: PropertyType;
  status: PropertyStatus;
  images: string[];
  features: string[];
  ownerName: string;
  ownerContact: string;
  area?: string;
  createdAt: string;
}

export interface Lead {
  name: string;
  phone: string;
  email: string;
  message: string;
  propertyId?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
