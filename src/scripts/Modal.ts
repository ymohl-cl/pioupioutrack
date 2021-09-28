import { ComponentRef } from '@ionic/core';
import { modalController } from '@ionic/vue';

export default class Modal {
	private instance: HTMLIonModalElement | null

	constructor() {
		this.instance = null
	}
	async open(component: ComponentRef) {
		this.instance = await modalController
			.create({
				component: component,
				componentProps: {
					modalInstance: this,
				}
			})
		return await this.instance.present();
	}
	close() {
		if (!this.instance) {
			return
		}
		this.instance.dismiss()
		this.instance = null
	}
}
