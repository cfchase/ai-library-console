export const navMap = {
    '/apps': 'Applications',
    '/jupyter': 'Jupyter',
    '/rstudio': 'RStudio',
    '/argo': 'Argo',
    '/kf-pipelines': 'Kubeflow Pipelines',
    '/tekton': 'Tekton',
    '/seldon': 'Seldon',
    '/kf-serving': 'Kubeflow Serving',
    '/tf-serving': 'Tensorflow Serving',
}

export const navData = [
    {id: 'apps', label: 'Applications', href: '/apps'},
    {
        group: {id: 'dev', title: 'Development'},
        children: [
            {id: 'jupyter', label: 'Jupyter', href: '/jupyter'},
            {id: 'rstudio', label: 'RStudio', href: '/rstudio'}
        ]
    },
    {
        group: {id: 'training', title: 'Training'},
        children: [
            {id: 'argo', label: 'Argo', href: '/argo'},
            {id: 'kf-pipelines', label: 'Kubeflow Pipelines', href: '/kf-pipelines'},
            {id: 'tekton', label: 'Tekton', href: '/tekton'}
        ]
    },
    {
        group: {id: 'serving', title: 'Serving'},
        children: [
            {id: 'seldon', label: 'Seldon', href: '/seldon'},
            {id: 'kf-serving', label: 'Kubeflow Serving', href: '/kf-serving'},
            {id: 'tf-serving', label: 'Tensorflow Serving', href: '/tf-serving'}
        ]
    },
]
