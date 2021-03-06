import Ember from 'ember';
import authenticatedRoute from 'radio4000/mixins/authenticated-route'

export default Ember.Route.extend(authenticatedRoute, {
	beforeModel(transition) {
		// Deprecation of old bookmarklet URLs "channel-slug/add?url=xxx&title=xxx" to "add?url=xxx&title=xxx"
		this.transitionTo('add', {queryParams: transition.queryParams});
	}
});
