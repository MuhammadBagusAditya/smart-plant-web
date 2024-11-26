<script>
	import '../app.css';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Loader from '$lib/components/loader.svelte';
	import { isLoading } from '$lib/states';
	import { mqttClient } from '$lib/utils';

	let { children } = $props();

	beforeNavigate(() => {
		isLoading.set(true);
	});

	afterNavigate(() => {
		window.HSStaticMethods.autoInit();
	});

	$effect(() => {
		mqttClient.on('connect', () => {
			isLoading.set(false);
		});

		mqttClient.on('reconnect', () => {
			isLoading.set(true);
		});

		mqttClient.subscribe([
			'status/soilMoisture',
			'status/airHumidity',
			'status/temperature',
			'status/light'
		]);
	});
</script>

{#if $isLoading}
	<Loader />
{/if}

{@render children()}
