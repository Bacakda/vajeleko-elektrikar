'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  GA_TRACKING_ID: string
}

export default function GoogleAnalytics({ GA_TRACKING_ID }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Enhanced E-commerce tracking for service inquiries
export const trackServiceInquiry = (serviceName: string, value: number = 0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_inquiry', {
      service_name: serviceName,
      value: value,
      currency: 'CZK',
    })
  }
}

// Track phone calls
export const trackPhoneCall = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'engagement',
      event_label: 'floating_call_button',
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
    })
  }
}

// Track project views
export const trackProjectView = (projectId: string, projectTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_view', {
      event_category: 'content',
      event_label: projectTitle,
      custom_parameter_1: projectId,
    })
  }
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
