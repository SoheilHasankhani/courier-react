import { usePreferences } from "@trycourier/react-hooks";
import React from "react";
import styled from "styled-components";
import { BusinessFooter } from "./BusinessFooter";
import { FreeFooter } from "./FreeFooter";

export const Footer: React.FunctionComponent = () => {
  const preferences = usePreferences();

  if (preferences.isLoading || !preferences.preferencePage) {
    return null;
  }

  const FooterWrapepr = styled.div`
    width: 100%;
    margin-top: 16px;
    > div {
      height: 80px;
      padding: 10px;
    }
  `;

  return (
    <FooterWrapepr>
      {preferences.preferencePage?.showCourierFooter ? (
        <FreeFooter />
      ) : (
        <BusinessFooter
          links={preferences.preferencePage.brand.links}
          theme={preferences.preferencePage.brand.settings.colors.primary}
        />
      )}
    </FooterWrapepr>
  );
};
