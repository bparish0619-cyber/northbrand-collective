/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Tool, JournalArticle } from './types';

export const TOOLS: Tool[] = [
  {
    id: 'p1',
    name: 'Northbrand Aperture',
    tagline: 'Precision Optics & Visual Memory.',
    description: 'Leica-centric photography focusing on high-contrast, shallow depth of field, and monochromatic West Texas landscapes.',
    longDescription: 'Photography is an instrument of vision. The Aperture project explores the desolation of the Texas plains through a technical lens, prioritizing composition rigor and the "Leica Look"—sharp subject isolation with creamy, atmospheric bokeh.',
    category: 'Photography',
    imageUrl: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&q=80&w=1000',
    link: 'https://www.instagram.com/brondolfr.lo',
    features: ['Subject Isolation', 'High Dynamic Range', 'Monochrome Focus']
  },
  {
    id: 'p2',
    name: 'Military and VA Navigator',
    tagline: 'Aviation-Grade Logistics for Veterans.',
    description: 'A dedicated command center for navigating VA benefits, healthcare, and transition logistics with military precision.',
    longDescription: 'Applying the "Prevent Error" principle to the often-chaotic VA system. This navigator uses standardized checklists and failure-mode analysis to help veterans track claims and healthcare outcomes with decimal-point accuracy.',
    category: 'Military/VA',
    imageUrl: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?auto=format&fit=crop&q=80&w=1000',
    link: 'https://va-healthcare.vercel.app/',
    features: ['FMEA Claim Logic', 'Standardized Checklists', 'Secure Tracking']
  },
  {
    id: 'p4',
    name: 'Financials',
    tagline: 'Stress-Testing the Future.',
    description: 'Strategic dashboard designed to identify and neutralize failure points in long-term financial planning.',
    longDescription: 'Most tools show growth; we show risk. Using the "Invert Problems" mental model, this curator allows users to stress-test their retirement against inflation spikes, market crashes, and healthcare variables to ensure total system integrity.',
    category: 'Retirement',
    imageUrl: 'https://images.unsplash.com/photo-1551868455-83e9112228b3?auto=format&fit=crop&q=80&w=1000',
    link: 'https://retirement-curator.vercel.app/',
    features: ['Inflation Stress-Testing', 'Failure-Point Scenarios', 'Precision Projection']
  },
  {
    id: 'p5',
    name: 'JMATS',
    tagline: 'Logistical Force Multiplier.',
    description: 'Operational tracking system for military skill sets and transition logistics.',
    longDescription: 'JMATS acts as a technical force multiplier. It translates military service records into civilian career technical specs, externalizing data to a central source of truth (Supabase) to prevent skill-set loss during transition.',
    category: 'Military/VA',
    imageUrl: 'https://images.unsplash.com/photo-1617721926586-4eecce739745?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=1000',
    link: 'https://crm-jmats.vercel.app/',
    features: ['Skill Translation Logic', 'Secure Data Vault', 'Logistics Dashboard']
  },
  {
    id: 'p6',
    name: 'Northbrand Dev Lab',
    tagline: 'Operational Efficiency in Code.',
    description: 'Frontend engineering research focused on Vercel-deployed React and TypeScript experiments.',
    longDescription: 'The laboratory for Northbrand Collective’s code DNA. Every deployment follows a "No-Waste" engineering approach, focusing on atomic components, accessible UI, and sub-second render times.',
    category: 'Development',
    imageUrl: 'https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=1000',
    link: 'https://github.com/brondolfr',
    features: ['Vercel High-Availability', 'Atomic Design', 'Rigorous Testing']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The 9 Principles of Northbrand",
        date: "May 10, 2025",
        excerpt: "Operational logic for a visual and technical life.",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6" }, "Success in both photography and engineering requires a standardized approach. At Northbrand, we follow nine core principles: Prevent Error, Context-Awareness, Limit Obligations, Standardize Systems, System Integrity, Maintain Momentum, Quality over Volume, Force Multipliers, and Externalize Data."),
            React.createElement("blockquote", { className: "border-l-4 border-[#E20613] pl-6 italic text-xl my-10 font-serif" },
                "\"Precision is the foundation of vision.\""
            )
        )
    },
    {
        id: 2,
        title: "Aperture & Integrity",
        date: "April 28, 2025",
        excerpt: "Why the M-series philosophy defines our technical stack.",
        image: "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6" }, "The Leica M-series camera is the ultimate expression of 'Limit Obligations.' It does one thing perfectly. We apply this to our code: remove the bloat, focus on the core utility, and ensure the UI is as tactile and responsive as a brass dial.")
        )
    }
];

export const BRAND_NAME = 'Northbrand Collective';
