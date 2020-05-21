import React from 'react';

import {
    PageSection,
    PageSectionVariants,
    TextContent,
    Text
} from '@patternfly/react-core';

import {Table, TableBody, TableHeader} from "@patternfly/react-table";
import {Link} from "react-router-dom";

const columns = [
    {title: 'Applications'},
    {title: 'Development'},
    {title: 'Training'},
    {title: 'Serving'}
];

const data = [
        {
            cells: [
                {
                    title: <Link to='/apps/lr-1'>Linear Regression 1</Link>,
                    props: {column: 'Applications'}
                },
                {
                    title: <Link to='/jupyter/lr-1'>Jupyter Notebook LR-1</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/argo/lr-1'>Argo Workflow LR-1</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/seldon/lr-1'>Seldon Service LR-1</Link>,
                    props: {column: 'Serving'}
                },
            ]
        },
        {
            cells: [
                {
                    title: <Link to='/apps/lr-2'>Linear Regression 2</Link>,
                    props: {column: 'Applications'}
                },
                {
                    title: <Link to='/jupyter/lr-2'>Jupyter Notebook LR-2</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/argo/lr-2'>Argo Workflow LR-2</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/seldon/lr-2'>Seldon Service LR-2</Link>,
                    props: {column: 'Serving'}
                },
            ]
        },
        {
            cells: [
                {
                    title: <Link to='/apps/fa-1'>Flake Analysis 1</Link>,
                    props: {column: 'Applications'}
                },
                {
                    title: <Link to='/jupyter/fa-1'>Jupyter Notebook FA-1</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/argo/fa-1'>Argo Workflow FA-1</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/seldon/fa-1'>Seldon Service FA-1</Link>,
                    props: {column: 'Serving'}
                },
            ]
        },
        {
            cells: [
                {
                    title: <Link to='/apps/fa-2'>Flake Analysis 2</Link>,
                    props: {column: 'Applications'}
                },
                {
                    title: <Link to='/jupyter/fa-2'>Jupyter Notebook FA-2</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/argo/fa-2'>Argo Workflow FA-2</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/seldon/fa-2'>Seldon Service FA-2</Link>,
                    props: {column: 'Serving'}
                },
            ]
        },
        {
            cells: [
                {
                    title: <Link to='/apps/sa-1'>Sentiment Analysis 1</Link>,
                    props: {column: 'Applications'}
                },
                {
                    title: <Link to='/jupyter/sa-1'>Jupyter Notebook SA-1</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/argo/sa-1'>Argo Workflow SA-1</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/seldon/sa-1'>Seldon Service SA-1</Link>,
                    props: {column: 'Serving'}
                },
            ]
        },
        {
            cells: [
                {
                    title: <Link to='/apps/sa-2'>Sentiment Analysis 2</Link>,
                    props: {column: 'Applications'}
                },
                {
                    title: <Link to='/jupyter/sa-2'>Jupyter Notebook SA-2</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/argo/sa-2'>Argo Workflow SA-2</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/seldon/sa-2'>Seldon Service SA-2</Link>,
                    props: {column: 'Serving'}
                },
            ]
        }
    ];

function calculateFilteredRows(filter, data) {
    return data;
}

export const AppList = () => {
    const filter = null;
    const filteredRows = calculateFilteredRows(filter, data);
    return (
        <PageSection variant={PageSectionVariants.light} isFilled>
            <TextContent>
                <Text component='h1'>AI Library Applications</Text>
                <Text component='p'>
                    List of AI Library Applications
                </Text>
            </TextContent>
            <Table cells={columns}
                   rows={filteredRows}
                   aria-label='List of AI Library Applications'>
                <TableHeader/>
                <TableBody/>
            </Table>
        </PageSection>
    );
};
