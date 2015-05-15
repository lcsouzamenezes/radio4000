import Ember from 'ember';

export default Ember.Route.extend({
	// todo: this is repeated for channel/[add,edit,delete]
	beforeModel(transition) {
		const authed = this.get('session.isAuthenticated');
		if (!authed) {
			Ember.debug('no authed --> login');
			transition.abort();
			this.transitionTo('login');
		}

		const userChannel = this.get('session.currentUser.channels.firstObject');
		if (!userChannel) {
			Ember.debug('no userChannel --> login');
			transition.abort();
			this.transitionTo('login');
		}

		const canEdit = userChannel.get('id') === this.modelFor('channel').get('id');
		if (!canEdit) {
			Ember.debug('no canEdit --> login');
			transition.abort();
			this.transitionTo('login');
		}
	},

	// don't render into channel because we don't want channel templates here
	renderTemplate() {
		this.render({
			into: 'application'
		});
	}
});
