export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  idealFor: string;
  popular?: boolean;
  yearlyPrice: number;
  monthlyPrice: number;
  monthlySetupFee: number;
  yearlySavingsNote: string;
  serverSpecs: {
    kvmTier: string;
    vcpu: string;
    ram: string;
    storage: string;
    bandwidth: string;
    networkSpeed?: string;
    rootAccess?: boolean;
  };
  aiFeatures: string[];
  securityFeatures?: string[];
  waText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
