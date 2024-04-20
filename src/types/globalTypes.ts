export type CurrentQuoteDetailsType = {
  annual_price: number;
  cover_type: number;
  discount_code: null | string;
  excess: null | number;
  fortnightly_price: number;
  frequency: string;
  future_price: null | number;
  lead_owner: string;
  price: number;
  product_name: string;
  promo_code: null | string;
  quote_token: string;
  rate_code: number;
  reference_number: null | string;
  send_email: null | boolean;
};
export type PartnerDetailsType = {
  date_of_birth: string;
  lhc_age: null | number;
  youth_discount_age: null | number;
};
export type QuoteDetailsType = {
  current_quote: CurrentQuoteDetailsType;
  partner: PartnerDetailsType;
} | null;
