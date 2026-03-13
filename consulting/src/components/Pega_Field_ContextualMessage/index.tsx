import { useState, useEffect } from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from '../shared/PConnProps';
import '../shared/create-nonce';
import StyledPegaFieldContextualMessageWrapper from './styles';

// Alert variant definitions
type AlertVariant = 'warning' | 'info' | 'reminder' | 'speak';

// interface for props
interface PegaFieldContextualMessageProps extends PConnFieldProps {
  /**
   * Controls the visual style, icon, and color scheme of the alert.
   *
   * - `warning` — Orange (`#FD6000`). Use for non-blocking cautions or advisories.
   * - `info` — Grey (`#6B7280`). Use for neutral informational messages.
   * - `reminder` — Purple (`#681FC3`). Use to prompt the user to take a follow-up action.
   * - `speak` — Aqua (`#00BCD4`). Use for conversational guidance or operator instructions.
   */
  variant: AlertVariant;
  /** Short headline displayed in bold at the top of the alert. */
  title: string;
  /** Name of the Pega data page that returns the alert message body (e.g. `D_AlertContent`). */
  getDPage: string;
  /** Comma-separated `key:value` parameters passed to the data page (e.g. `alertId:welcome`). */
  getDParams: string;
  /**
   * The property name on the data page response object that contains the message text.
   * Defaults to `'message'` if not specified.
   */
  responseProperty?: string;
  /**
   * Storybook-only: when set to a **non-empty string**, this value is used directly
   * as the message body and the data page fetch is skipped entirely.
   * This prop is never present in a live Pega configuration, so its presence
   * unambiguously identifies the Storybook rendering path.
   * An empty string is treated the same as `undefined` — the data page path runs normally.
   */
  storybookMessage?: string;
}

// Resolve icon and heading colour from the variant using a switch
function getVariantConfig(variant: AlertVariant): { headingColor: string; icon: JSX.Element } {
  switch (variant) {
    case 'warning':
      return {
        headingColor: '#FD6000',
        icon: (
          <svg width="22" height="22" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M21.9512 12.5585C21.7853 12.6189 21.6283 12.7018 21.4859 12.8064C20.7503 13.3477 19.3788 14.8262 19.3788 14.8262C19.421 14.7866 18.3912 15.783 17.4471 16.7033C17.1823 16.9617 16.7371 16.7761 16.7339 16.406V4.48078C16.7339 3.31189 15.7886 2.50554 14.6447 2.74586C13.7319 2.93766 13.2448 3.78681 13.2448 4.80213L13.2528 13.804L11.8615 13.8073V1.62503C11.8615 0.509688 10.9661 -0.222505 9.88735 0.0613085C9.14715 0.255858 8.80062 0.952573 8.80062 1.83102V13.824L7.41337 13.8269L7.40536 4.08253C7.40536 3.10887 6.94622 2.2501 5.97302 2.22126C4.96159 2.19128 4.47453 3.03974 4.47453 4.04454L4.46011 13.843L3.10399 13.8457V7.42329C3.10399 6.41163 2.6334 5.64739 1.61626 5.64739C0.60437 5.64739 0.133789 6.41163 0.133789 7.42329L0.134933 21.681C0.642364 29.0112 4.78626 29.9999 9.11808 29.9999C12.7069 29.9999 15.578 28.2197 17.1674 25.374C17.372 25.044 17.925 24.1742 18.5807 23.144C19.5134 21.6789 20.3598 20.3681 20.9538 19.4393C21.7368 18.2146 22.4536 17.2579 23.3403 16.1059C23.5871 15.7855 23.7914 15.5275 23.889 15.4209C24.1561 15.1293 24.3321 14.7665 24.3847 14.3749V14.3009C24.3847 12.8871 23.279 12.0732 21.9512 12.5585Z" fill="#FD6000"/>
          </svg>
        )
      };
    case 'info':
      return {
        headingColor: '#6B7280',
        icon: (
          <svg width="22" height="22" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3.03418 0.200195H26.2334C26.9774 0.200195 27.6099 0.462455 28.1406 0.993164C28.6713 1.52387 28.9336 2.15636 28.9336 2.90039V20.2998C28.9336 21.0438 28.6713 21.6763 28.1406 22.207C27.6099 22.7377 26.9774 23 26.2334 23H5.85059L0.333984 28.5166V2.90039C0.333984 2.15636 0.596244 1.52387 1.12695 0.993164C1.65766 0.462455 2.29014 0.200195 3.03418 0.200195ZM2.83398 22.4062L3.17383 22.0742L4.7832 20.5H26.4336V2.7002H2.83398V22.4062ZM17.334 14.7002V17.2002H6.13379V14.7002H17.334ZM23.1338 10.3496V12.8496H6.13379V10.3496H23.1338ZM23.1338 6V8.5H6.13379V6H23.1338Z" fill="#6B7280" stroke="white" strokeWidth="0.4"/>
          </svg>
        )
      };
    case 'reminder':
      return {
        headingColor: '#681FC3',
        icon: (
          <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M22.6562 2.26562H24.4688C25.0696 2.26562 25.6459 2.50432 26.0708 2.92921C26.4957 3.3541 26.7344 3.93037 26.7344 4.53125V24.4688C26.7344 25.0696 26.4957 25.6459 26.0708 26.0708C25.6459 26.4957 25.0696 26.7344 24.4688 26.7344H4.53125C3.93037 26.7344 3.3541 26.4957 2.92921 26.0708C2.50432 25.6459 2.26562 25.0696 2.26562 24.4688V4.53125C2.26562 3.93037 2.50432 3.3541 2.92921 2.92921C3.3541 2.50432 3.93037 2.26563 4.53125 2.26562H6.34375" stroke="#681FC3" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
            <path d="M19.9375 16.7656L14.5 12.2344L9.0625 16.7656V2.26562H19.9375V16.7656Z" stroke="#681FC3" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
          </svg>
        )
      };
    default: // speak
      return {
        headingColor: '#00BCD4',
        icon: (
          <svg width="22" height="22" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M24.4496 19.2729L22.4821 17.4C23.413 16.5743 24.1429 15.5975 24.6718 14.4698C25.2007 13.342 25.4651 12.1437 25.4651 10.875C25.4651 9.60622 25.2007 8.41802 24.6718 7.31038C24.1429 6.20275 23.413 5.23608 22.4821 4.41038L24.4496 2.47705C25.6344 3.54441 26.5758 4.80309 27.274 6.25309C27.9721 7.70309 28.3212 9.24372 28.3212 10.875C28.3212 12.5062 27.9721 14.0468 27.274 15.4968C26.5758 16.9468 25.6344 18.2055 24.4496 19.2729ZM20.3877 15.4062L18.3567 13.4729C18.7375 13.1305 19.0443 12.7428 19.277 12.3099C19.5097 11.8769 19.6261 11.3986 19.6261 10.875C19.6261 10.3514 19.5097 9.87306 19.277 9.44007C19.0443 9.00709 18.7375 8.61941 18.3567 8.27705L20.3877 6.34372C21.0647 6.92775 21.5936 7.60743 21.9744 8.38278C22.3552 9.15813 22.5456 9.98886 22.5456 10.875C22.5456 11.7611 22.3552 12.5918 21.9744 13.3672C21.5936 14.1425 21.0647 14.8222 20.3877 15.4062ZM10.5501 15.7083C9.15385 15.7083 7.95854 15.235 6.9642 14.2885C5.96987 13.342 5.4727 12.2041 5.4727 10.875C5.4727 9.5458 5.96987 8.40795 6.9642 7.46143C7.95854 6.5149 9.15385 6.04163 10.5501 6.04163C11.9464 6.04163 13.1418 6.5149 14.1361 7.46143C15.1304 8.40795 15.6276 9.5458 15.6276 10.875C15.6276 12.2041 15.1304 13.342 14.1361 14.2885C13.1418 15.235 11.9464 15.7083 10.5501 15.7083ZM0.395264 25.375V21.9916C0.395264 21.3271 0.57509 20.7027 0.934742 20.1187C1.29439 19.5347 1.79156 19.0916 2.42624 18.7896C3.5052 18.2659 4.72167 17.8229 6.07565 17.4604C7.42964 17.0979 8.92113 16.9166 10.5501 16.9166C12.1792 16.9166 13.6707 17.0979 15.0246 17.4604C16.3786 17.8229 17.5951 18.2659 18.6741 18.7896C19.3087 19.0916 19.8059 19.5347 20.1656 20.1187C20.5252 20.7027 20.705 21.3271 20.705 21.9916V25.375H0.395264ZM2.93398 22.9583H18.1663V21.9916C18.1663 21.7701 18.1081 21.5687 17.9918 21.3875C17.8754 21.2062 17.722 21.0652 17.5316 20.9646C16.77 20.6021 15.7915 20.2396 14.5962 19.8771C13.4009 19.5146 12.0522 19.3333 10.5501 19.3333C9.04807 19.3333 7.69937 19.5146 6.50406 19.8771C5.30875 20.2396 4.33028 20.6021 3.56866 20.9646C3.37826 21.0652 3.22488 21.2062 3.10852 21.3875C2.99216 21.5687 2.93398 21.7701 2.93398 21.9916V22.9583ZM10.5501 13.2916C11.2483 13.2916 11.846 13.055 12.3431 12.5817C12.8403 12.1085 13.0889 11.5396 13.0889 10.875C13.0889 10.2104 12.8403 9.64146 12.3431 9.1682C11.846 8.69493 11.2483 8.4583 10.5501 8.4583C9.852 8.4583 9.25434 8.69493 8.75717 9.1682C8.26001 9.64146 8.01143 10.2104 8.01143 10.875C8.01143 11.5396 8.26001 12.1085 8.75717 12.5817C9.25434 13.055 9.852 13.2916 10.5501 13.2916Z" fill="#00BCD4"/>
          </svg>
        )
      };
  }
}

// Helper function to detect if content is HTML
const isHtmlContent = (content: string): boolean => {
  const htmlRegex = /<\/?[a-z][\s\S]*>/i;
  return htmlRegex.test(content);
};

// Helper function to sanitize HTML (basic sanitization)
const sanitizeHtml = (html: string): string => {
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  sanitized = sanitized.replace(/\son\w+="[^"]*"/gi, '');
  return sanitized;
};

async function getDataPageResults(getPConnect:any, getDPage:string, getDParams:string) {
  const getParamValue = (e:any) => {
      if (e === null || e === "") {
        return e;
      }
      const eachVal = e.split(':');
  
      if (eachVal[1].trim().startsWith(".")) {
        let propVal = eachVal[1].trim();
        const lastIndex = propVal.lastIndexOf('.');
        console.log(propVal);
        // if property is embed page reference
        if (lastIndex === 0) {
          propVal = getPConnect.getValue(propVal);
        } else {
          const searchProp = propVal.substring(lastIndex);
          propVal = getPConnect.getValue(searchProp, `caseInfo.content${propVal.substring(0, lastIndex)}`);
        }
        return JSON.stringify(eachVal[0].trim()) + ":" + JSON.stringify(propVal);
      }
      else {
        return JSON.stringify(eachVal[0].trim()) + ":" + JSON.stringify(eachVal[1].trim());
      }
    };
    const dPageParams = "{" + getDParams.split(',').map(getParamValue).join(",") + "}";
    console.log(dPageParams);
    /*
     get value from $PConnect if propValue starts with "."
    */
    const context = getPConnect.getContextName();
    const PCore = window.PCore;
    try {
      const getData = await PCore.getDataPageUtils().getPageDataAsync(getDPage, context, JSON.parse(dPageParams));
      if (getData !== null && getData !== undefined) {
        return getData;
      }
    }
    catch (error) {
      console.log("Unable to fetch contextual message here is error: " + error);
    }
};

// Main Contextual Message component
function PegaFieldContextualMessage(props: PegaFieldContextualMessageProps) {
  const {
    getPConnect,
    variant = 'info' as AlertVariant,
    title = 'Alert',
    getDPage = '',
    getDParams = '',
    responseProperty = 'message',
    storybookMessage,
    testId
  } = props;

  // Storybook path: storybookMessage is a non-empty string supplied explicitly in
  // story args. This prop is never present in a live Pega configuration, so its
  // presence unambiguously means "render the prop value, skip the data page fetch".
  // An empty string is treated the same as absent so a misconfigured story cannot
  // accidentally suppress the data page call with a blank message.
  const isStorybookMode = typeof storybookMessage === 'string' && storybookMessage.length > 0;

  const [message, setMessage] = useState<string>(isStorybookMode ? storybookMessage : '');

  useEffect(() => {
    // Storybook: keep in sync when the prop changes (e.g. controls panel).
    if (isStorybookMode) {
      setMessage(storybookMessage);
      return;
    }

    if (!getDPage) return;

    getDataPageResults(getPConnect, getDPage, getDParams)
      .then((data: any) => {
        setMessage(data?.[responseProperty] ?? '');
      })
      .catch(() => setMessage(''));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPConnect, getDPage, getDParams, responseProperty, storybookMessage]);

  const { headingColor, icon } = getVariantConfig(variant);

  const renderMessage = () => {
    if (!message) return null;

    if (isHtmlContent(message)) {
      const sanitizedHtml = sanitizeHtml(message);
      return (
        <div
          className="alert-message html-content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      );
    }

    return (
      <div className="alert-message text-content">
        {message}
      </div>
    );
  };

  return (
    <StyledPegaFieldContextualMessageWrapper data-testid={testId}>
      <div className={`contextual-alert contextual-alert--${variant}`} role="alert" aria-live="polite">
        <div className="alert-header">
          <div className="alert-icon">
            {icon}
          </div>
          <div className="alert-title">
            <strong style={{ color: headingColor }}>{title}</strong>
          </div>
        </div>
        {message && (
          <div className="alert-body">
            {renderMessage()}
          </div>
        )}
      </div>
    </StyledPegaFieldContextualMessageWrapper>
  );
}

export default withConfiguration(PegaFieldContextualMessage);
