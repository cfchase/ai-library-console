import React from 'react';

import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  Divider,
} from '@patternfly/react-core';

export const AppDetail = () => {
  return (
    <>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component='h1'>AI Library Application</Text>
          <Text component='p'>
            Detail of AI Library Application
          </Text>
        </TextContent>
      </PageSection>
      <Divider component="div"/>
      <PageSection variant={PageSectionVariants.light} noPadding={true}
                   isFilled>
      </PageSection>
    </>
  );
};
