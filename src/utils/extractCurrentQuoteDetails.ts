import { CurrentQuoteDetailsType } from '@/types/globalTypes';

export const extractCurrentQuoteDetails = (quote: CurrentQuoteDetailsType) => {
  return [
    { label: 'Annual Price', value: quote.annual_price },
    { label: 'Cover Type', value: quote.cover_type },
    { label: 'Discount Code', value: quote.discount_code || 'N/A' },
    { label: 'Excess', value: quote.excess || 'N/A' },
    { label: 'Fortnightly Price', value: quote.fortnightly_price },
    { label: 'Frequency', value: quote.frequency },
    { label: 'Future Price', value: quote.future_price || 'N/A' },
    { label: 'Lead Owner', value: quote.lead_owner },
    { label: 'Price', value: quote.price },
    { label: 'Product Name', value: quote.product_name },
    { label: 'Promo Code', value: quote.promo_code || 'N/A' },
    { label: 'Quote Token', value: quote.quote_token },
    { label: 'Rate Code', value: quote.rate_code },
    { label: 'Reference Number', value: quote.reference_number || 'N/A' },
    {
      label: 'Send Email',
      value:
        quote.send_email === null ? 'N/A' : quote.send_email ? 'Yes' : 'No',
    },
  ];
};
