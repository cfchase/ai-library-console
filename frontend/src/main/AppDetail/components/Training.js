import React from "react";

import {
  Title,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  PageSection,
  PageSectionVariants,
} from "@patternfly/react-core";
import { RunningIcon } from "@patternfly/react-icons";

export const Training = () => (
  <>
    <PageSection variant={PageSectionVariants.light}>
      <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={RunningIcon} />

        <Title headingLevel="h5" size="lg">
          Training
        </Title>
        <EmptyStateBody>Future Training page...</EmptyStateBody>
      </EmptyState>
    </PageSection>
  </>
);
