import { PartnerDetailsType } from '@/types/globalTypes';

export const extractPartnerDetails = (partnerDetails: PartnerDetailsType) => {
  return [
    { label: 'DOB', value: partnerDetails.date_of_birth },
    { label: 'LHC Age', value: partnerDetails.lhc_age || 'N/A' },
    {
      label: 'Youth Discount Age',
      value: partnerDetails.youth_discount_age || 'N/A',
    },
  ];
};
