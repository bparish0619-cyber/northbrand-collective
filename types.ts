/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Photography' | 'Development' | 'Military/VA' | 'Retirement';
  imageUrl: string;
  link: string;
  features: string[];
}

// Product interface kept for compatibility if needed elsewhere
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode; 
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'tool', tool: Tool }
  | { type: 'journal', article: JournalArticle };