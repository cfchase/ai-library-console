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
import { BookIcon } from "@patternfly/react-icons";

export const Development = () => (
  <>
    <PageSection variant={PageSectionVariants.light}>
      <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={BookIcon} />

        <Title headingLevel="h5" size="lg">
          Development
        </Title>
        <EmptyStateBody>Future Dev page...</EmptyStateBody>
      </EmptyState>
    </PageSection>
  </>
);
