import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5839a81e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _6d6651f6 = () => import('../pages/test.vue' /* webpackChunkName: "pages/test" */).then(m => m.default || m)
const _3881cd59 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _5839a81e,
			name: "index"
		},
		{
			path: "/test",
			component: _6d6651f6,
			name: "test"
		},
		{
			path: "/about",
			component: _3881cd59,
			name: "about"
		}
    ],
    
    
    fallback: false
  })
}
