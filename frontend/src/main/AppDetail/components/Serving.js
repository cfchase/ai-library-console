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
import { ServicesIcon } from "@patternfly/react-icons";

export const Serving = () => (
  <>
    <PageSection variant={PageSectionVariants.light}>
      <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={ServicesIcon} />

        <Title headingLevel="h5" size="lg">
          Serving
        </Title>
        <EmptyStateBody>Future Serving page...</EmptyStateBody>
      </EmptyState>
    </PageSection>
  </>
);
