import React from 'react';

export interface TestimonialData {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
  timeAgo: string;
}

export interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}