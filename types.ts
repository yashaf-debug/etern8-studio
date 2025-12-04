import React from 'react';

export interface PricingTier {
  name: string;
  description: string;
  marketPrice: string;
  ourPrice: string;
  features: string[];
  isPopular?: boolean;
}

export interface ComparisonImage {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}