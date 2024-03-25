import TestTask1 from "../views/TestSite/Task1/task1.vue"
import PreTraining from "../views/TestSite/Task1/pre-training.vue"
import Training from "../views/TestSite/Task1/training.vue"
import Test from "../views/TestSite/Task1/test.vue"


const routes = [
    {
        path: '/test/task1',
        name: 'testTask1',
        component: TestTask1
    },
    {
        path: '/test/pre_training',
        name: 'pre_training',
        component: PreTraining
    },
    {
        path: '/test/training',
        name: 'training',
        component: Training
    },
    {
        path: '/test/test',
        name: 'test',
        component: Test
    },
];

export default routes
