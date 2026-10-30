import { Routes } from '@angular/router';

export const routes: Routes = [
     {
        path: '',
        loadComponent: () => 
            import('./containers/bitwise-operators-container/bitwise-operators-container')
                .then(m => m.BitwiseOperatorsContainer),
        
    },
    {
        path: 'bit-wise-operators',
        loadComponent: () => 
            import('./containers/bitwise-operators-container/bitwise-operators-container')
                .then(m => m.BitwiseOperatorsContainer),
        
    }, 
    {
        path: 'closures',
        loadComponent: () => 
            import('./containers/closures/closures')
                .then(m => m.Closures), 
    },
    {
        path: 'rxjs', 
        loadComponent: () => import('./containers/rxjs/rxjs')
            .then(m => m.Rxjs) 
    }
];
