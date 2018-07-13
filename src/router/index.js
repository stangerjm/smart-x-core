import Vue from 'vue';
import Router from 'vue-router';
import People from '../views/people';
import PersonCreate from '../views/person-create';
import PersonDelete from '../views/person-delete';
import PersonEdit from '../views/person-edit';
import PersonDetails from '../views/person-details';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/people/create',
      name: 'PeopleCreate',
      component: PersonCreate
    },
    {
      path: '/people/delete/:id',
      name: 'PeopleDelete',
      component: PersonDelete
    },
    {
      path: '/people/edit/:id',
      name: 'PersonEdit',
      component: PersonEdit
    },
    {
      path: '/people/details/:id',
      name: 'PersonDetails',
      component: PersonDetails
    }
  ]
})