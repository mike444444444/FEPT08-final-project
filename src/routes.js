import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import QuienesSomos from './views/QuienesSomos.vue'
import NuestrosQuesos from './views/NuestrosQuesos.vue'
import ValoresNutricionales from './views/ValoresNutricionales.vue'
import Contacto from './views/Contacto.vue'


const routes= [
    {path: '/', 
     name: 'Home',
     component: Home
    },    
    {path: '/quienesSomos',
     name: 'QuienesSomos', 
     component: QuienesSomos
    },
    {path: '/nuestrosQuesos', 
     name: 'NuestrosQuesos',
     component: NuestrosQuesos
    },
    {path: '/:path(.*)',
     name: 'notFound',
     component: NotFound
    },
    {path: '/valoresNutricionales',
     name: "ValoresNutricionales",
     component: ValoresNutricionales
    }
    // {path: '/contacto',
    //  name: "Contacto",
    //  component: Contacto
    // }
    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router