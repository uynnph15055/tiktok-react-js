import { HeaderOnly } from '~/components/Layouts';
import Upload from '~/pages/Upload';

const { default: Folowing } = require('~/pages/Folowing');
const { default: Home } = require('~/pages/Home');

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/folowing', component: Folowing },
   { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
