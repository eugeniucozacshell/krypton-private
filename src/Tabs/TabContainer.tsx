import React, { memo } from "react";
import { TabsContainerProps } from "./types";
import { Container } from "./Tabs.styles";

export const TabContainer = memo(
  ({ children, value, variant, tabsAlign }: TabsContainerProps, props) => {
    return (
      <Container variant={variant} tabsAlign={tabsAlign} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { value, variant, tabsAlign });
          }
        })}
      </Container>
    );
  }
);
