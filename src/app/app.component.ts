import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Topic } from './models/topic';
import { AppState } from './store';
import { loadTopicsSuccess } from './store/actions/topic/topic.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<AppState>){
    this.loadTopicsDirect([
      new Topic( 'javascript', 'javascript'),
    ]);
  }
  loadTopicsDirect(data: Topic[]) {
    this.store.dispatch(loadTopicsSuccess({data}))
  }
}
