import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home";
import People from "../views/person/people";
import PersonCreate from "../views/person/person-create";
import PersonDelete from "../views/person/person-delete";
import PersonEdit from "../views/person/person-edit";
import PersonDetails from "../views/person/person-details";
import Region from "../views/region/region";
import RegionEdit from "../views/region/region-edit";
import RegionCreate from "../views/region/region-create";
import RegionDelete from "../views/region/region-delete";
import RegionDetails from "../views/region/region-details";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      name: "Home",
      component: Home
    },
    /***********************************
     * PERSON ROUTES
     **********************************/
    {
      path: "/person",
      name: "People",
      component: People
    },
    {
      path: "/person/create",
      name: "PeopleCreate",
      component: PersonCreate
    },
    {
      path: "/person/delete/:id",
      name: "PeopleDelete",
      component: PersonDelete
    },
    {
      path: "/person/edit/:id",
      name: "PersonEdit",
      component: PersonEdit
    },
    {
      path: "/person/details/:id",
      name: "PersonDetails",
      component: PersonDetails
    },
    /***********************************
     * REGION ROUTES
     **********************************/
    {
      path: "/region",
      name: "Region",
      component: Region
    },
    {
      path: "/region/create",
      name: "RegionCreate",
      component: RegionCreate
    },
    {
      path: "/region/edit/:id",
      name: "RegionEdit",
      component: RegionEdit
    },
    {
      path: "/region/delete/:id",
      name: "RegionDelete",
      component: RegionDelete
    },
    {
      path: "/region/details/:id",
      name: "RegionDetails",
      component: RegionDetails
    }
  ]
});
