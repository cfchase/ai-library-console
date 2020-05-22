import React, { useState } from 'react';

import {
  useParams,
} from 'react-router-dom';

import {
  Nav,
  NavItem,
  NavList,
  NavVariants,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  Divider,
} from '@patternfly/react-core';

import {
  Development,
  Training,
  Serving
} from './components';

import './AppDetail.scss';

export const AppDetail = () => {
  const [activeSubNav, setActiveSubNav] = useState('development');

  const onNavSelect = (result) => {
    setActiveSubNav(result.itemId);
  };

  let subSection = ((x) => {
    switch (activeSubNav) {
      case 'training':
        return <Training/>;
      case 'serving':
        return <Serving/>;
      default:
        return <Development/>;
    }
  })(activeSubNav);


  return (
    <>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component='h1'>{useParams().id}</Text>
          <Text component='p'>
            Detail of AI Library Application
          </Text>
        </TextContent>
      </PageSection>
      <Divider component="div"/>
      <PageSection
        className='app-detail nav'
        variant={PageSectionVariants.light}
        noPadding={true}>
        <Nav onSelect={onNavSelect}>
          <NavList variant={NavVariants.tertiary}>
            <NavItem key='development' itemId='development'
                     isActive={activeSubNav === 'development'}>
              Development
            </NavItem>
            <NavItem key='training' itemId='training'
                     isActive={activeSubNav === 'training'}>
              Training
            </NavItem>
            <NavItem key='serving' itemId='serving'
                     isActive={activeSubNav === 'serving'}>
              Serving
            </NavItem>
          </NavList>
        </Nav>
      </PageSection>
      <Divider component="div"/>
      {subSection}
    </>
  );
};
