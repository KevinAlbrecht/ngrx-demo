import { RouterStateSerializer } from '@ngrx/router-store';
import { MyRouterStateSnapshot } from './router.state';
import { RouterStateSnapshot } from '@angular/router';


export class CustomRouterStateSerializer implements RouterStateSerializer<MyRouterStateSnapshot> {
	serialize(routerState: RouterStateSnapshot): MyRouterStateSnapshot {
		const routerStateSnapshot: MyRouterStateSnapshot = {
			url: routerState.url,
			params: null,
			queryParams: null
		};

		let childRoute = routerState.root;
		while (childRoute.firstChild) {
			childRoute = childRoute.firstChild;
		}

		routerStateSnapshot.params = childRoute.params;
		routerStateSnapshot.queryParams = childRoute.queryParams;
		return routerStateSnapshot;
	}
}
