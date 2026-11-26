import React from "react";
import { styled } from "styled-components";

const SplitScreenContainer = styled.div`
  display: flex;
`;

const Panel = styled.div<{ $flex?: number }>`
  flex: ${(p) => p.$flex ?? 1};
  min-width: 0;
`;

export interface SplitScreenProps {
  children: React.ReactNode;
  leftWidth?: number;
  rightWidth?: number;
}

export default function SplitScreen({ children, leftWidth, rightWidth }: SplitScreenProps) {
  const [left, right] = React.Children.toArray(children);
  return (
    <SplitScreenContainer className="split-screen">
      <Panel $flex={leftWidth}>
        {left}
      </Panel>
      <Panel $flex={rightWidth}>
        {right}
      </Panel>
    </SplitScreenContainer>
  );
}