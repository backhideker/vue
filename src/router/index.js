import Vue from 'vue';
import Router from 'vue-router';
import SelectRoles from '../views/SelectRoles'
import Login from '../views/Login'
import Index from '../views/Index'
import Main from '../views/main/index'
import Shop from '../views/main/shop'
import EvoucherRecord from '../views/main/eVoucherRecords'
import EvoucherRefund from '../views/main/eVoucherRefund'
import EvoucherUsing from '../views/main/eVoucherUsing'
import Shopqrcode from '../views/main/shopqrcode'
import NotifyComponent from '../views/main/notification'
import Profile from '../views/main/profile'
import UpdatePassword1 from '../views/main/updatePassword1'
import UpdatePassword2 from '../views/main/updatePassword2'
import register1 from '../views/register1'
Vue.use(Router);

export default new Router({
    //base: '/',
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'default',
            redirect: '/selectroles'
        },
        {
            path:'/register1',
            name:'register1',
            component:register1
        },
        {
            path: '/selectroles',
            name: 'SelectRoles',
            component: SelectRoles
        },
       
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: Login,
                    showMenu:false
                },
                {
                    path: '/updatepassword1',
                    name: 'UpdatePassword1',
                    component: UpdatePassword1,
                    showMenu:false
                },
                {
                    path: '/updatepassword2',
                    name: 'UpdatePassword2',
                    component: UpdatePassword2,
                    showMenu:false
                },
            ]
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            redirect: {name:'shop'},
            children: [
                {
                    path: 'shop',
                    name: 'shop',
                    component: Shop
                },
                {
                    path: 'evoucher-record',
                    name: 'evoucherrecord',
                    component: EvoucherRecord
                },
                {
                    path: 'evoucher-refund',
                    name: 'evoucherrefund',
                    component: EvoucherRefund
                },
                {
                    path: 'evoucher-using',
                    name: 'evoucherusing',
                    component: EvoucherUsing
                },
                {
                    path: 'shopqrcode',
                    name: 'shopqrcode',
                    component: Shopqrcode
                },
                {
                    path: 'notification',
                    name: 'notification',
                    component: NotifyComponent
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: Profile
                },
            ]
        }
    ]
});