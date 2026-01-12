export interface Visit {
  page: string;
  timestamp: string;
  date: string;
  time: string;
  ip: string;
  location: {
    city: string;
    country: string;
    lat: number | null;
    lng: number | null;
  };
  userAgent: string;
}